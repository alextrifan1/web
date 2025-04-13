function valideazaText(idInput, idStatus) {
    const input = document.getElementById(idInput);
    const status = document.getElementById(idStatus);

    input.addEventListener("input", function () {
        const regex = /^[a-z0-9]+$/; // doar litere mici și cifre
        const isValid = regex.test(input.value);
        status.className = "status-dot " + (isValid ? "valid" : "invalid");
    });
}

// Apelăm pentru cele două inputuri text cerute de laborator
document.addEventListener("DOMContentLoaded", () => {
    valideazaText("full_name", "full_name_status");
    valideazaText("username", "username_status");
});
