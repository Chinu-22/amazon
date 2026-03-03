document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation check
    if (username && password) {
        alert("Login successful!");
        // Here you can handle actual login logic
    } else {
        alert("Please fill in both fields.");
    }
});
