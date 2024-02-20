function hozzávalóKalkulátor() {
    let vendegekSzáma = document.getElementById('vendegekSzáma').value;

    let tejMennyiseg = (vendegekSzáma * 0.2).toFixed(1);
    let tojásMennyiség = vendegekSzáma * 2;
    let cukorMennyiség = vendegekSzáma * 1;

    document.getElementById('tej').textContent = tejMennyiseg + " l tej";
    document.getElementById('tojás').textContent = tojásMennyiség + " db tojás";
    document.getElementById('cukor').textContent = cukorMennyiség + " ek kristálycukor";
}