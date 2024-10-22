document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    const messageDiv = document.getElementById('message');

    if (response.ok) {
        localStorage.setItem('token', data.token); // Save JWT to local storage
        if (data.role === 'admin') {
            window.location.href = 'admin.html'; // Redirect to admin page
        } else {
            window.location.href = 'regular.html'; // Redirect to regular user page
        }
    } else {
        messageDiv.innerHTML = `<p>${data.message}</p>`;
    }
});
