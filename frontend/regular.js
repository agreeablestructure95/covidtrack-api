document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
});

async function fetchCaseData() {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:5000/covid/cases', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const caseDataDiv = document.getElementById('caseData');
    if (response.ok) {
        const cases = await response.json();
        caseDataDiv.innerHTML = cases.map(c => `<p>${c.caseId}: ${c.status}</p>`).join('');
    } else {
        caseDataDiv.innerHTML = '<p>Failed to fetch case data.</p>';
    }
}

fetchCaseData();
