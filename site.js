// Shared behavior for every public page.

document.addEventListener('DOMContentLoaded', initShared);

function initShared() {
    setupGithubIssueLinks();
    updateOverviewStatistics();
}

// Status grouping shared with app.js (loaded after site.js on data pages).
// Single definition: every status count on the site derives from this.
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

// Fills the index.html hero stat cards from the data files. index.html loads
// both bills-data.js (state bills) and federal-bills-data.js; every number is
// computed at runtime so the HTML never carries hardcoded counts.
function updateOverviewStatistics() {
    const hooks = document.querySelectorAll('[data-overview-stat]');
    if (!hooks.length) return;

    const stateBills = (typeof billsData !== 'undefined') ? billsData : null;
    const federalBills = (typeof federalBillsData !== 'undefined') ? federalBillsData : null;
    if (!stateBills && !federalBills) return;

    const values = {};
    if (federalBills) {
        values['federal-total'] = federalBills.length;
        values['federal-families'] = new Set(federalBills.map(bill => bill.proposalFamily || bill.id)).size;
        values['federal-tier1'] = federalBills.filter(bill => bill.tier === 1).length;
        values['federal-tier2'] = federalBills.filter(bill => bill.tier === 2).length;
    }
    if (stateBills) {
        values['state-total'] = stateBills.length;
        values['state-states'] = new Set(stateBills.map(bill => bill.state)).size;
        values['state-enacted'] = stateBills.filter(bill => getStatusGroup(bill.status) === 'enacted').length;
        values['state-pending'] = stateBills.filter(bill => getStatusGroup(bill.status) === 'pending').length;
    }

    hooks.forEach(element => {
        const key = element.dataset.overviewStat;
        if (key in values) element.textContent = values[key];
    });
}

function setupGithubIssueLinks() {
    const issueLinks = document.querySelectorAll('[data-github-issue]');
    if (!issueLinks.length) return;

    const configuredRepository = document.documentElement.dataset.githubRepository?.trim();
    const host = window.location.hostname.toLowerCase();
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    let repository = configuredRepository || '';

    if (!repository && host.endsWith('.github.io')) {
        const owner = host.slice(0, -'.github.io'.length);
        const repositoryName = !pathParts[0] || pathParts[0].endsWith('.html')
            ? `${owner}.github.io`
            : pathParts[0];
        repository = `${owner}/${repositoryName}`;
    }

    if (!repository) return;

    issueLinks.forEach(link => {
        const isBillReport = link.dataset.githubIssue === 'report_bill.yml';
        const params = new URLSearchParams({
            title: isBillReport ? 'Bill report: ' : 'Tracker question: ',
            body: isBillReport
                ? 'Official government bill page:\n\nJurisdiction:\n\nBill number:\n\nWhy it may fit the tracker criteria:\n\nAdditional context:\n'
                : 'Question or correction:\n\nRelevant page or official source (if applicable):\n'
        });
        link.href = `https://github.com/${repository}/issues/new?${params.toString()}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    });
}
