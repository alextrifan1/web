document.addEventListener("DOMContentLoaded", () => {
    const tabele = document.querySelectorAll("table.tabel-sortabil");

    tabele.forEach(tabel => {
        const ths = tabel.querySelectorAll("th");
        let sortState = {};

        ths.forEach((th, colIndex) => {
            if (colIndex === 0 || colIndex === ths.length - 1) return;

            th.style.cursor = "pointer";
            th.addEventListener("click", () => {
                const tbody = tabel.querySelector("tbody") || tabel;
                const rows = Array.from(tbody.querySelectorAll("tr")).slice(1); // exclude header

                const ascending = !sortState[colIndex];
                sortState[colIndex] = ascending;

                rows.sort((a, b) => {
                    const valA = a.children[colIndex].innerText.trim();
                    const valB = b.children[colIndex].innerText.trim();

                    const numA = parseFloat(valA.replace(/[^\d.,]/g, '').replace(',', '.'));
                    const numB = parseFloat(valB.replace(/[^\d.,]/g, '').replace(',', '.'));

                    if (!isNaN(numA) && !isNaN(numB)) {
                        return ascending ? numA - numB : numB - numA;
                    }

                    return ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
                });

                rows.forEach(row => tbody.appendChild(row));
            });
        });
    });
});
