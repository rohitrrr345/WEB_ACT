function extractHostname(url) {
    let hostname;
    // Find & remove protocol (http, https, ftp, etc.) and get hostname
    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }
    // Find & remove port number and "?"
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}

chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.storage.local.get(['visitedSites'], function(result) {
        let visitedSites = result.visitedSites || [];
        let hostname = extractHostname(details.url);
        visitedSites.push({
            name: hostname,
            timestamp: new Date().toISOString()
        });
        chrome.storage.local.set({ visitedSites: visitedSites });
    });
}, { url: [{ schemes: ['http', 'https'] }] });

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ visitedSites: [] });
});
