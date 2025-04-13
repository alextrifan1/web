document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("phone");
    const status = document.getElementById("phone_status");

    phoneInput.addEventListener("input", () => {
        const regex = /^\(\+40\)\s\d{3}\s\d{3}\s\d{3}$/;
        const isValid = regex.test(phoneInput.value);
        status.className = "status-dot " + (isValid ? "valid" : "invalid");
    });
});
