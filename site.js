// Shared behavior for every public page.

document.addEventListener('DOMContentLoaded', setupGithubIssueLinks);

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
