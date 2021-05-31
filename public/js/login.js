const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').nodeValue.trim();
    const password = document.querySelector('#password-login').nodeValue.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};