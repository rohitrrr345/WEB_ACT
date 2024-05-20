document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['visitedSites'], function(result) {
        let visitedSites = result.visitedSites || [];
        let visitedSitesTableBody = document.querySelector('#visitedSitesTable tbody');
        
        if (visitedSitesTableBody) {
            visitedSites.forEach(function(site) {
                let row = visitedSitesTableBody.insertRow();
                let nameCell = row.insertCell(0);
                let timestampCell = row.insertCell(1);
                
                nameCell.textContent = site.name;
                timestampCell.textContent = site.timestamp;
            });
        } else {
            console.error('Table body not found');
        }
    });
});
