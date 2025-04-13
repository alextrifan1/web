function valideaza(data, format) {
    const delimitatori = /[\/\-.]/;
    const parts = data.split(delimitatori);
    const today = new Date();

    let zi, luna, an;

    switch (format) {
        case "zz/ll/aaaa":
            [zi, luna, an] = parts;
            break;
        case "ll/zz/aaaa":
            [luna, zi, an] = parts;
            break;
        case "zz/ll/aa":
            [zi, luna, an] = parts;
            an = parseInt(an, 10);
            an += an < 50 ? 2000 : 1900;
            break;
        default:
            return false;
    }

    const date = new Date(`${an}-${luna}-${zi}`);
    return (
        date.getFullYear() === +an &&
        date.getMonth() + 1 === +luna &&
        date.getDate() === +zi
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("birthdate");
    const status = document.getElementById("date_status");

    input.addEventListener("input", () => {
        const isValid = valideaza(input.value, "zz/ll/aaaa");
        status.className = "status-dot " + (isValid ? "valid" : "invalid");
    });
});
