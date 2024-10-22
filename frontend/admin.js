document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
});

document.getElementById('updateVaccinationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const caseId = document.getElementById('caseId').value;
    const vaccinationStatus = document.getElementById('vaccinationStatus').value;
    const token = localStorage.getItem('token');

    const response = await fetch(`http://localhost:5000/covid/vaccination-status/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ caseId, vaccinationStatus })
    });

    const updateMessageDiv = document.getElementById('updateMessage');
    if (response.ok) {
        updateMessageDiv.innerHTML = `<p>Vaccination status updated successfully!</p>`;
    } else {
        const data = await response.json();
        updateMessageDiv.innerHTML = `<p>${data.message}</p>`;
    }
});
