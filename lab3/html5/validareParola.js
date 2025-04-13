document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const status = document.getElementById("password_status");

    passwordInput.addEventListener("input", () => {
        const value = passwordInput.value;
        const isValid =
            /[a-z]/.test(value) &&
            /[A-Z]/.test(value) &&
            /[0-9]/.test(value) &&
            /[!]/.test(value);

        status.className = "status-dot " + (isValid ? "valid" : "invalid");
    });
});
