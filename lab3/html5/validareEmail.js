document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const status = document.getElementById("email_status");

    emailInput.addEventListener("input", () => {
        const value = emailInput.value;
        const regex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_.]+$/;
        const atCount = (value.match(/@/g) || []).length;

        const isValid = regex.test(value) && atCount === 1;

        status.className = "status-dot " + (isValid ? "valid" : "invalid");
    });
});
