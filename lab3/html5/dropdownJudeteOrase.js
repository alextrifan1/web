document.addEventListener("DOMContentLoaded", () => {
    const judetSelect = document.getElementById("judet");
    const orasSelect = document.getElementById("oras");

    const localitati = {
        "Alba": ["Alba Iulia", "Aiud", "Blaj", "Cugir"],
        "Arad": ["Arad", "Ineu", "Lipova", "Curtici"],
        "Bacău": ["Bacău", "Onești", "Moinești", "Comănești"],
        "Brașov": ["Brașov", "Codlea", "Făgăraș", "Săcele"],
        "Cluj": ["Cluj-Napoca", "Turda", "Dej", "Gherla"],
        "Constanța": ["Constanța", "Mangalia", "Medgidia", "Năvodari"],
        "Dolj": ["Craiova", "Calafat", "Băilești", "Filiași"],
        "Iași": ["Iași", "Pașcani", "Târgu Frumos", "Hârlău"],
        "Maramureș": ["Baia Mare", "Sighetu Marmației", "Borșa", "Târgu Lăpuș"],
        "Prahova": ["Ploiești", "Câmpina", "Sinaia", "Bușteni"],
        "Sibiu": ["Sibiu", "Mediaș", "Agnita", "Cisnădie"],
        "Timiș": ["Timișoara", "Lugoj", "Sânnicolau Mare", "Jimbolia"],
        "Vrancea": ["Focșani", "Adjud", "Mărășești", "Odobești"]
    };

    for (const judet in localitati) {
        const opt = document.createElement("option");
        opt.value = judet;
        opt.textContent = judet;
        judetSelect.appendChild(opt);
    }

    judetSelect.addEventListener("change", () => {
        const orase = localitati[judetSelect.value] || [];
        orasSelect.innerHTML = "";
        orase.forEach(oras => {
            const opt = document.createElement("option");
            opt.value = oras;
            opt.textContent = oras;
            orasSelect.appendChild(opt);
        });
    });

    judetSelect.dispatchEvent(new Event("change")); // inițializare la încărcare
});
