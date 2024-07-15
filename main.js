loginForm.addEventListener("submit", async e => {
    e.preventDefault();
    
    const username = document.querySelector("#loginUsername").value;
    const password = document.querySelector("#loginPassword").value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        
        if (data.success) {
            // Handle successful login
            setFormMessage(loginForm, "success", "Login successful!");
        } else {
            // Handle login error
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

createAccountForm.addEventListener("submit", async e => {
    e.preventDefault();

    const signupUsername = document.querySelector("#signupUsername").value;
    const signupEmail = document.querySelector("#signupEmail").value;
    const signupPassword = document.querySelector("#signupPassword").value;
    const signupConfirmPassword = document.querySelector("#signupConfirmPassword").value;

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ signupUsername, signupEmail, signupPassword, signupConfirmPassword }),
        });
        const data = await response.json();

        if (data.success) {
            // Handle successful account creation
            setFormMessage(createAccountForm, "success", "Account created successfully. Please log in.");
            createAccountForm.classList.add("form--hidden");
            loginForm.classList.remove("form--hidden");
        } else {
            // Handle account creation error
            setFormMessage(createAccountForm, "error", data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
