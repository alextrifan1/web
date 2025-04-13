document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); // ia formularul curent din pagină

    form.addEventListener("submit", function (e) {
        const dots = form.querySelectorAll(".status-dot"); // doar din formularul respectiv
        const invalid = Array.from(dots).some(dot => dot.classList.contains("invalid"));

        if (invalid) {
            e.preventDefault();
            alert("Formularul conține câmpuri invalide!");
        } else {
            alert("Formular trimis cu succes!");
        }
    });
});
