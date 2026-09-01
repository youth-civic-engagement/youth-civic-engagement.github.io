// Civil Rights Legislation Tracker for Chinese Americans - dashboard application

const PAGE_SIZE = 12;
const CATEGORY_LABELS = {
    property: 'Property & land',
    contract: 'Employment & contracting',
    education: 'Education',
    research: 'Research access & security',
    financial: 'Finance',
    infrastructure: 'Infrastructure & technology',
    immigration: 'Immigration & visas',
    employment: 'Employment restrictions',
    civic: 'Civic participation',
    other: 'Other restrictions'
};

let visibleBillLimit = PAGE_SIZE;
let currentFilteredBills = [];

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    populateStateFilter();
    updateStatistics();
    renderStateSummary();
    renderStateMap();
    setupFilters();
    loadFiltersFromURL();
    applyFilters({ updateUrl: false });
}

function populateStateFilter() {
    const stateFilter = document.getElementById('state-filter');
    if (!stateFilter) return;

    const states = [...new Map(
        billsData.map(bill => [bill.state, bill.stateName])
    ).entries()].sort((a, b) => a[1].localeCompare(b[1]));

    states.forEach(([code, name]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = name;
        stateFilter.appendChild(option);
    });
}

function setupFilters() {
    const selectIds = ['state-filter', 'category-filter', 'status-filter', 'tier-filter'];

    selectIds.forEach(id => {
        document.getElementById(id)?.addEventListener('change', () => {
            visibleBillLimit = PAGE_SIZE;
            applyFilters();
        });
    });

    document.getElementById('search-filter')?.addEventListener('input', () => {
        visibleBillLimit = PAGE_SIZE;
        applyFilters();
    });

    document.getElementById('clear-filters')?.addEventListener('click', clearFilters);

    document.getElementById('status-summary')?.addEventListener('click', event => {
        const button = event.target.closest('[data-status-filter]');
        if (!button) return;

        const statusFilter = document.getElementById('status-filter');
        const requestedStatus = button.dataset.statusFilter;
        statusFilter.value = statusFilter.value === requestedStatus ? 'all' : requestedStatus;
        visibleBillLimit = PAGE_SIZE;
        applyFilters();
    });

    document.getElementById('state-summary-list')?.addEventListener('click', event => {
        const button = event.target.closest('[data-state-filter]');
        if (!button) return;

        const stateFilter = document.getElementById('state-filter');
        const requestedState = button.dataset.stateFilter;
        stateFilter.value = stateFilter.value === requestedState ? 'all' : requestedState;
        visibleBillLimit = PAGE_SIZE;
        applyFilters();
    });

    document.getElementById('load-more')?.addEventListener('click', () => {
        visibleBillLimit += PAGE_SIZE;
        renderVisibleBills(true);
    });

    setupStateMapInteractions();
}

function clearFilters() {
    ['state-filter', 'category-filter', 'status-filter', 'tier-filter'].forEach(id => {
        const filter = document.getElementById(id);
        if (filter) filter.value = 'all';
    });

    const searchFilter = document.getElementById('search-filter');
    if (searchFilter) searchFilter.value = '';

    visibleBillLimit = PAGE_SIZE;
    applyFilters();
}

function applyFilters(options = {}) {
    const { updateUrl = true } = options;
    const filters = getFilterValues();
    const query = filters.query.toLocaleLowerCase();

    currentFilteredBills = billsData
        .filter(bill => billMatchesFilters(bill, filters, query))
        .sort(compareBillsForDisplay);

    renderVisibleBills();
    updateActiveSummaryFilters(filters);
    updateStateMap(filters);

    if (updateUrl) updateURL(filters);
}

function billMatchesFilters(bill, filters, normalizedQuery = filters.query.toLocaleLowerCase(), ignoreState = false) {
    if (!ignoreState && filters.state !== 'all' && bill.state !== filters.state) return false;
    if (filters.category !== 'all' && bill.category !== filters.category) return false;
    if (filters.status !== 'all' && getStatusGroup(bill.status) !== filters.status) return false;
    if (filters.tier !== 'all' && String(bill.tier) !== filters.tier) return false;

    if (normalizedQuery) {
        const searchableText = [
            bill.billNumber,
            bill.title,
            bill.state,
            bill.stateName,
            bill.summary,
            bill.target,
            bill.restrictions,
            bill.civilRightsImpact,
            bill.status,
            bill.session,
            bill.latestAction,
            bill.committee
        ].filter(Boolean).join(' ').toLocaleLowerCase();

        if (!searchableText.includes(normalizedQuery)) return false;
    }

    return true;
}

function getFilterValues() {
    return {
        query: document.getElementById('search-filter')?.value.trim() || '',
        state: document.getElementById('state-filter')?.value || 'all',
        category: document.getElementById('category-filter')?.value || 'all',
        status: document.getElementById('status-filter')?.value || 'all',
        tier: document.getElementById('tier-filter')?.value || 'all'
    };
}

function compareBillsForDisplay(first, second) {
    const firstDate = Date.parse(first.actionDate || first.lastUpdated || first.introducedDate || '') || 0;
    const secondDate = Date.parse(second.actionDate || second.lastUpdated || second.introducedDate || '') || 0;
    if (firstDate !== secondDate) return secondDate - firstDate;

    return first.stateName.localeCompare(second.stateName) ||
        first.billNumber.localeCompare(second.billNumber, undefined, { numeric: true });
}

function renderVisibleBills(preserveScroll = false) {
    const billsList = document.getElementById('bills-list');
    const loadMoreButton = document.getElementById('load-more');
    const resultsCount = document.getElementById('results-count');

    if (!billsList) return;

    const previousScroll = preserveScroll ? billsList.scrollTop : 0;
    billsList.innerHTML = '';

    if (currentFilteredBills.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'no-results';

        const emptyContent = document.createElement('div');
        const heading = document.createElement('h3');
        heading.textContent = 'No measures found';
        const text = document.createElement('p');
        text.textContent = 'Try a broader search or clear one of the filters.';

        emptyContent.append(heading, text);
        emptyState.appendChild(emptyContent);
        billsList.appendChild(emptyState);
    } else {
        currentFilteredBills.slice(0, visibleBillLimit).forEach(bill => {
            billsList.appendChild(createBillCard(bill));
        });
    }

    const resultLabel = `${currentFilteredBills.length} ${currentFilteredBills.length === 1 ? 'measure' : 'measures'}`;
    if (resultsCount) resultsCount.textContent = resultLabel;

    if (loadMoreButton) {
        const remaining = currentFilteredBills.length - visibleBillLimit;
        loadMoreButton.hidden = remaining <= 0;
        if (remaining > 0) {
            loadMoreButton.textContent = `Load ${Math.min(PAGE_SIZE, remaining)} more measures`;
        }
    }

    if (preserveScroll) billsList.scrollTop = previousScroll;
    announceToScreenReader(`Showing ${Math.min(visibleBillLimit, currentFilteredBills.length)} of ${resultLabel}`);
}

function createBillCard(bill) {
    const statusGroup = getStatusGroup(bill.status);
    const primaryUrl = bill.url || bill.officialUrl;

    const card = document.createElement('article');
    card.className = 'bill-card';
    card.dataset.state = bill.state;
    card.dataset.category = bill.category;
    card.dataset.status = statusGroup;

    const headerRow = document.createElement('div');
    headerRow.className = 'bill-header-row';

    const billId = document.createElement('p');
    billId.className = 'bill-id';
    billId.textContent = `${bill.stateName} · ${bill.billNumber}`;

    const status = document.createElement('span');
    status.className = `status-badge ${statusGroup}`;
    status.textContent = getStatusLabel(statusGroup);

    headerRow.append(billId, status);

    const title = document.createElement('h3');
    title.className = 'bill-title';

    if (primaryUrl) {
        const titleLink = createExternalLink(primaryUrl, bill.title);
        titleLink.setAttribute('aria-label', `${bill.title} — official source opens in a new tab`);
        title.appendChild(titleLink);
    } else {
        title.textContent = bill.title;
    }

    const isFederalBill = bill.state === 'US';
    const context = document.createElement('p');
    context.className = 'bill-context';
    context.textContent = isFederalBill
        ? [
            bill.introducedDate ? `Introduced ${formatDate(bill.introducedDate)}` : '',
            bill.actionDate ? `Latest action ${formatDate(bill.actionDate)}` : ''
        ].filter(Boolean).join(' · ')
        : [
            bill.session ? `Session: ${bill.session}` : '',
            bill.lastUpdated ? `Record updated ${formatDate(bill.lastUpdated)}` : ''
        ].filter(Boolean).join(' · ');

    const description = document.createElement('p');
    description.className = 'bill-description';
    description.textContent = bill.summary;

    const tags = document.createElement('div');
    tags.className = 'bill-tags';

    const tierTag = document.createElement('span');
    tierTag.className = `bill-tag tier-${bill.tier}`;
    tierTag.textContent = bill.tier === 1
        ? 'Tier 1 · LPRs and/or citizens'
        : 'Tier 2 · visa applicants/holders and other non-LPRs';

    const categoryTag = document.createElement('span');
    categoryTag.className = 'bill-tag category';
    categoryTag.textContent = CATEGORY_LABELS[bill.category] || bill.category;

    tags.append(tierTag, categoryTag);

    if (bill.reviewStatus) {
        const reviewTag = document.createElement('span');
        reviewTag.className = 'bill-tag review';
        reviewTag.textContent = bill.reviewStatus === 'Provisional' ? 'Scope review pending' : bill.reviewStatus;
        tags.appendChild(reviewTag);
    }

    const details = document.createElement('details');
    details.className = 'bill-details';

    const detailsSummary = document.createElement('summary');
    detailsSummary.textContent = 'View analysis and official sources';

    const detailsContent = document.createElement('div');
    detailsContent.className = 'bill-details-content';

    appendDetailBlock(detailsContent, 'Who the text covers', bill.target);

    if (isFederalBill) {
        appendDetailBlock(detailsContent, 'Latest legislative action', bill.latestAction);
        appendDetailBlock(detailsContent, 'Committee assignment', bill.committee);
    }

    if (bill.civilRightsImpact) {
        appendDetailBlock(detailsContent, 'Potential individual effect', bill.civilRightsImpact, 'civil-rights-impact');
    }

    const restrictionText = [
        bill.restrictions ? `Restrictions: ${bill.restrictions}` : '',
        bill.penalties ? `Penalties: ${bill.penalties}` : '',
        bill.status ? `Recorded legislative status: ${bill.status}` : ''
    ].filter(Boolean).join(' ');
    appendDetailBlock(detailsContent, 'Legislative details', restrictionText);

    const actions = createBillActions(bill);
    if (actions.childElementCount) detailsContent.appendChild(actions);

    details.append(detailsSummary, detailsContent);
    card.append(headerRow, title, context, description, tags, details);

    return card;
}

function appendDetailBlock(parent, headingText, bodyText, extraClass = '') {
    if (!bodyText) return;

    const block = document.createElement('div');
    block.className = `bill-detail-block${extraClass ? ` ${extraClass}` : ''}`;

    const heading = document.createElement('h4');
    heading.textContent = headingText;

    const body = document.createElement('p');
    body.textContent = bodyText;

    block.append(heading, body);
    parent.appendChild(block);
}

function createBillActions(bill) {
    const actions = document.createElement('div');
    actions.className = 'bill-actions';

    if (bill.url) {
        const billPageLink = createExternalLink(bill.url, 'Official bill page');
        billPageLink.className = 'bill-link';
        actions.appendChild(billPageLink);
    }

    if (bill.officialUrl && bill.officialUrl !== bill.url) {
        const sourceLink = createExternalLink(bill.officialUrl, 'Official text / source');
        sourceLink.className = 'bill-link secondary';
        actions.appendChild(sourceLink);
    }

    return actions;
}

function createExternalLink(url, text) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = text;
    return link;
}

function formatDate(dateValue) {
    const date = new Date(`${dateValue}T00:00:00Z`);
    if (Number.isNaN(date.getTime())) return dateValue;

    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    }).format(date);
}

// Normalize legislature-specific status text into three public filter groups.
function getStatusGroup(status) {
    const normalized = String(status || '').toUpperCase();

    if (normalized.includes('ENACTED') ||
        normalized.includes('SIGNED BY GOVERNOR') ||
        normalized.includes('BECAME LAW')) {
        return 'enacted';
    }

    if (normalized.includes('FAILED') ||
        normalized.includes('INEXPEDIENT') ||
        normalized.includes('DID NOT ADVANCE') ||
        normalized.includes('DIED') ||
        normalized.includes('VETOED') ||
        normalized.includes('POSTPONED INDEFINITELY')) {
        return 'failed';
    }

    return 'pending';
}

function getStatusLabel(statusGroup) {
    return {
        enacted: 'Enacted',
        pending: 'Pending',
        failed: 'Failed'
    }[statusGroup] || 'Pending';
}

function calculateStatistics() {
    const stats = {
        total: billsData.length,
        states: new Set(billsData.map(bill => bill.state)).size,
        enacted: 0,
        pending: 0,
        failed: 0,
        tier1: 0,
        tier2: 0,
        families: new Set(billsData.map(bill => bill.proposalFamily || bill.id)).size,
        byState: {},
        byCategory: {}
    };

    billsData.forEach(bill => {
        stats[getStatusGroup(bill.status)] += 1;
        if (bill.tier === 1) stats.tier1 += 1;
        if (bill.tier === 2) stats.tier2 += 1;
        stats.byCategory[bill.category] = (stats.byCategory[bill.category] || 0) + 1;

        if (!stats.byState[bill.state]) {
            stats.byState[bill.state] = {
                code: bill.state,
                name: bill.stateName,
                count: 0
            };
        }
        stats.byState[bill.state].count += 1;
    });

    return stats;
}

function updateStatistics() {
    const stats = calculateStatistics();

    document.querySelectorAll('[data-stat]').forEach(element => {
        const key = element.dataset.stat;
        if (key in stats) element.textContent = stats[key];
    });

    document.querySelectorAll('[data-status-count]').forEach(element => {
        const key = element.dataset.statusCount;
        element.textContent = stats[key] ?? 0;
    });

    document.querySelectorAll('[data-category-count]').forEach(element => {
        const key = element.dataset.categoryCount;
        element.textContent = stats.byCategory[key] ?? 0;
    });
}

function renderStateSummary() {
    const stateSummary = document.getElementById('state-summary-list');
    if (!stateSummary) return;

    const states = Object.values(calculateStatistics().byState)
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

    stateSummary.innerHTML = '';

    states.forEach(state => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'state-summary-item';
        button.dataset.stateFilter = state.code;
        button.setAttribute('aria-label', `Filter to ${state.name}, ${state.count} measures`);

        const name = document.createElement('span');
        name.textContent = state.name;

        const count = document.createElement('strong');
        count.textContent = state.count;

        button.append(name, count);
        stateSummary.appendChild(button);
    });
}

function renderStateMap() {
    const mapPaths = document.getElementById('state-map-paths');
    if (!mapPaths || typeof US_MAP_DATA === 'undefined') return;

    const svgNamespace = 'http://www.w3.org/2000/svg';
    mapPaths.innerHTML = '';

    Object.entries(US_MAP_DATA).forEach(([stateCode, state]) => {
        const path = document.createElementNS(svgNamespace, 'path');
        path.setAttribute('d', state.dimensions);
        path.setAttribute('class', 'map-state count-0');
        path.dataset.state = stateCode;
        path.dataset.stateName = state.name;
        path.dataset.count = '0';

        const title = document.createElementNS(svgNamespace, 'title');
        title.textContent = `${state.name}: no tracked measures`;
        path.appendChild(title);
        mapPaths.appendChild(path);
    });
}

function setupStateMapInteractions() {
    const map = document.getElementById('state-map');
    const clearButton = document.getElementById('map-clear-state');
    if (!map) return;

    map.addEventListener('click', event => {
        selectStateFromMap(event.target.closest('.map-state'));
    });

    map.addEventListener('mousemove', event => {
        const statePath = event.target.closest('.map-state');
        if (statePath) showMapTooltip(statePath, event.clientX, event.clientY);
    });

    map.addEventListener('mouseleave', hideMapTooltip);

    clearButton?.addEventListener('click', () => {
        const stateFilter = document.getElementById('state-filter');
        if (!stateFilter) return;

        stateFilter.value = 'all';
        visibleBillLimit = PAGE_SIZE;
        applyFilters();
    });
}

function selectStateFromMap(statePath) {
    if (!statePath || Number(statePath.dataset.count) === 0) return;

    const stateFilter = document.getElementById('state-filter');
    if (!stateFilter) return;

    const stateCode = statePath.dataset.state;
    stateFilter.value = stateFilter.value === stateCode ? 'all' : stateCode;
    visibleBillLimit = PAGE_SIZE;
    applyFilters();
}

function updateStateMap(filters) {
    const mapPaths = document.querySelectorAll('.map-state');
    const mapSummary = document.getElementById('map-summary');
    const clearButton = document.getElementById('map-clear-state');
    if (!mapPaths.length) return;

    const normalizedQuery = filters.query.toLocaleLowerCase();
    const mapBills = billsData.filter(bill => billMatchesFilters(bill, filters, normalizedQuery, true));
    const counts = mapBills.reduce((totals, bill) => {
        totals[bill.state] = (totals[bill.state] || 0) + 1;
        return totals;
    }, {});
    const matchingStateCount = Object.keys(counts).length;

    mapPaths.forEach(path => {
        const count = counts[path.dataset.state] || 0;
        const countClass = `count-${Math.min(count, 3)}`;
        const isActive = path.dataset.state === filters.state;
        const label = `${path.dataset.stateName}: ${count} ${count === 1 ? 'tracked measure' : 'tracked measures'}`;

        path.dataset.count = String(count);
        path.classList.remove('count-0', 'count-1', 'count-2', 'count-3');
        path.classList.add(countClass);
        path.classList.toggle('has-bills', count > 0);
        path.classList.toggle('is-active', isActive);

        const title = path.querySelector('title');
        if (title) title.textContent = label;

    });

    const hasScopedFilters = Boolean(filters.query) ||
        filters.category !== 'all' ||
        filters.status !== 'all' ||
        filters.tier !== 'all';

    if (mapSummary) {
        mapSummary.textContent = hasScopedFilters
            ? `${matchingStateCount} ${matchingStateCount === 1 ? 'state matches' : 'states match'} the current filters.`
            : `${matchingStateCount} ${matchingStateCount === 1 ? 'state has' : 'states have'} tracked measures.`;
    }

    if (clearButton) clearButton.hidden = filters.state === 'all';
}

function showMapTooltip(statePath, clientX, clientY) {
    const tooltip = document.getElementById('map-tooltip');
    const frame = document.getElementById('state-map-frame');
    if (!tooltip || !frame) return;

    const count = Number(statePath.dataset.count);
    const title = document.createElement('strong');
    title.textContent = statePath.dataset.stateName;

    const detail = document.createElement('span');
    detail.textContent = count === 0
        ? 'No tracked measures'
        : `${count} tracked ${count === 1 ? 'measure' : 'measures'}`;

    tooltip.replaceChildren(title, detail);
    tooltip.hidden = false;

    const frameRect = frame.getBoundingClientRect();
    const left = Math.max(0, Math.min(clientX - frameRect.left, frameRect.width - tooltip.offsetWidth - 16));
    const top = Math.max(0, Math.min(clientY - frameRect.top, frameRect.height - tooltip.offsetHeight - 16));
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
}

function hideMapTooltip() {
    const tooltip = document.getElementById('map-tooltip');
    if (tooltip) tooltip.hidden = true;
}

function updateActiveSummaryFilters(filters) {
    document.querySelectorAll('[data-status-filter]').forEach(button => {
        button.classList.toggle('is-active', button.dataset.statusFilter === filters.status);
    });

    document.querySelectorAll('[data-state-filter]').forEach(button => {
        button.classList.toggle('is-active', button.dataset.stateFilter === filters.state);
    });
}

function updateURL(filters) {
    const params = new URLSearchParams();

    if (filters.query) params.set('q', filters.query);
    if (filters.state !== 'all') params.set('state', filters.state);
    if (filters.category !== 'all') params.set('category', filters.category);
    if (filters.status !== 'all') params.set('status', filters.status);
    if (filters.tier !== 'all') params.set('tier', filters.tier);

    const newURL = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.replaceState({}, '', newURL);
}

function loadFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);

    setFilterFromParameter('search-filter', params.get('q'), false);
    setFilterFromParameter('state-filter', params.get('state'));
    setFilterFromParameter('category-filter', params.get('category'));
    setFilterFromParameter('status-filter', params.get('status'));
    setFilterFromParameter('tier-filter', params.get('tier'));
}

function setFilterFromParameter(elementId, value, validateOption = true) {
    if (!value) return;

    const element = document.getElementById(elementId);
    if (!element) return;

    if (!validateOption || [...element.options].some(option => option.value === value)) {
        element.value = value;
    }
}

function announceToScreenReader(message) {
    let announcer = document.getElementById('sr-announcer');

    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'sr-announcer';
        announcer.className = 'sr-only';
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        document.body.appendChild(announcer);
    }

    announcer.textContent = message;
}

const TrackerApp = {
    applyFilters,
    calculateStatistics,
    getStatusGroup
};
