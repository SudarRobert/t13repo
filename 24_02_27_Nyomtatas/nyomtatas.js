function kalkulal() {
    // Űrlapadatok
    const szelesseg = document.getElementById('szelesseg').value;
    const magassag = document.getElementById('magassag').value;
    const papir = document.getElementById('papirtipus').value;

    // Számítások
    let terulet = Math.round((szelesseg * magassag) / 10000);
    let koltseg = terulet * papir;

    document.getElementById('terulet').textContent = terulet;
    document.getElementById('papir').textContent = papir;

    // Költség megjelenítése
    document.getElementById('koltseg').textContent = koltseg;

    // Keret láthatóvá tétele
    document.getElementById('valasz').style.visibility = "visible";
}
