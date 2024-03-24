var dobasok = [];

function KockaDobas() {
    return Math.round(Math.random() * 5) + 1;//1 és 6 közötti dobás
}

function TobbKockaDobas(dobasokMennyisege) {
    let tobbDobas = [];
    for (let i = 0; i < dobasokMennyisege; i++) {
        tobbDobas.push(KockaDobas());
    }
    return tobbDobas;
}

//ÍGY HÍVHATSZ MEG ADD EVENT LISTENERBEN PARAMÉTERES FÜGGVÉNYT!!!
kockaEldobasa.addEventListener("click", () => { KockaMegjelenites(3) });


function KockaMegjelenites(dobasokMennyisege) {
    let megtortentDobasok = TobbKockaDobas(dobasokMennyisege);
    for (let i = 0; i < megtortentDobasok.length; i++) {
        dobasok.push(megtortentDobasok[i]);
    }
    MaxDobas(megtortentDobasok);
    TriplaHatos(megtortentDobasok);
    Egyformak(megtortentDobasok);
    Kulonbozok(megtortentDobasok);
    //aktDobasokObjektuma(megtortentDobasok);
    DobasElfordulasok(aktDobasOsszeg(megtortentDobasok));
    console.log(dobasOsszegekMennyiseg);
    LegkisebbDobásMennyiseg(megtortentDobasok);
    LegnagyobbDobásMennyiseg(megtortentDobasok);
    kettosNegyesHatosSzazalek(megtortentDobasok);
    /*
    for (let i = 0; i < megtortentDobasok.length; i++) {
        document.querySelector(`#kockaKep0${i}`).style.backgroundImage = "url(img/" + megtortentDobasok[i] + ".png)";

    }*/
    document.querySelector("#kockaKep01").style.backgroundImage = "url(img/" + megtortentDobasok[0] + ".png)";
    document.querySelector("#kockaKep02").style.backgroundImage = "url(img/" + megtortentDobasok[1] + ".png)";
    document.querySelector("#kockaKep03").style.backgroundImage = "url(img/" + megtortentDobasok[2] + ".png)";

}


function DobasokSzama() {
    let dobasMennyiseg = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < dobasok.length; i++) {
        dobasMennyiseg[0] += dobasok[i];
        dobasMennyiseg[dobasok[i]]++;
    }
    return dobasMennyiseg;
}
kockaEldobasa.addEventListener("click", () => { StatisztikaKiir(DobasokSzama()) });


function AtlagSzamitas(eredmenyek) {
    return eredmenyek[0] / dobasok.length;
}

function StatisztikaKiir(eredmenyek) {
    document.querySelector("#egyes").innerHTML = eredmenyek[1];
    document.querySelector("#kettes").innerHTML = eredmenyek[2];
    document.querySelector("#harmas").innerHTML = eredmenyek[3];
    document.querySelector("#negyes").innerHTML = eredmenyek[4];
    document.querySelector("#otos").innerHTML = eredmenyek[5];
    document.querySelector("#hatos").innerHTML = eredmenyek[6];
    document.querySelector("#dobasMennyiseg").innerHTML = dobasok.length;
    document.querySelector("#osszesen").innerHTML = eredmenyek[0];
    document.querySelector("#atlag").innerHTML = AtlagSzamitas(eredmenyek).toFixed(2);
}

//TRIPLA DOBÁSRA VAN CSAK!
function MaxDobas(aktDobasok) {
    let aktDobasOsszege = aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
    let eddigiLegnagyobb = document.querySelector("#legnagyobb").innerHTML;
    if (aktDobasOsszege > eddigiLegnagyobb) {
        document.querySelector("#legnagyobb").innerHTML = aktDobasOsszege;
    }
}

function TriplaHatos(aktDobasok) {
    if (aktDobasok[0] == 6 && aktDobasok[1] == 6 && aktDobasok[2] == 6) {
        document.querySelector("#triplaHat").innerHTML = "Volt";
    }
}

function Egyformak(aktDobasok) {
    if (aktDobasok[0] == aktDobasok[1] && aktDobasok[1] == aktDobasok[2]) {
        let regiErtek = document.querySelector("#egyformak").innerHTML;
        document.querySelector("#egyformak").innerHTML = Number(regiErtek) + 1;
    }
}

function Kulonbozok(aktDobasok) {
    if (aktDobasok[0] != aktDobasok[1] && aktDobasok[1] != aktDobasok[2] && aktDobasok[0] != aktDobasok[2]) {
        let regiErtek = document.querySelector("#kulonbozoek").innerHTML;
        document.querySelector("#kulonbozoek").innerHTML = Number(regiErtek) + 1;
    }
}
//Extra OBJEKTUMBA VALÓ FELTÖTLÉS!
var dobasOsszegek = [];
function aktDobasokObjektuma(aktDobasok) {
    let aktDobas = {
        elsoKocka: aktDobasok[0],
        masodikKocka: aktDobasok[1],
        harmadikKocka: aktDobasok[2],
        dobasOsszege: aktDobasok[0] + aktDobasok[1] + aktDobasok[2]
    }
    dobasOsszegek.push(aktDobas);
}

//Adott indexen adott dobásmennyiség van... Ezt növelem majd mindig...
let dobasOsszegekMennyiseg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function aktDobasOsszeg(aktDobasok) {
    return aktDobasok[0] + aktDobasok[1] + aktDobasok[2];
}

function DobasElfordulasok(aktDobasOsszeg) {
    dobasOsszegekMennyiseg[aktDobasOsszeg]++;
}


let MinDobasOsszeg = null;
let MinDobasOsszegElofordulas = null;

function LegkisebbDobásMennyiseg() {
    if (MinDobasOsszeg === null) {
        for (let i = 3; i < dobasOsszegekMennyiseg.length; i++) {
            if (dobasOsszegekMennyiseg[i] > 0) {
                MinDobasOsszeg = i;
                MinDobasOsszegElofordulas = dobasOsszegekMennyiseg[i];
            }
        }
    } else {
        for (let i = 3; i < MinDobasOsszeg; i++) {
            if (dobasOsszegekMennyiseg[i] > 0) {
                MinDobasOsszeg = i;
                MinDobasOsszegElofordulas = dobasOsszegekMennyiseg[i];
            }
        }
    }
    if (MinDobasOsszeg !== null) {
        document.querySelector("#legkisebbMennyisege").innerHTML = `${MinDobasOsszeg} (${MinDobasOsszegElofordulas} alkalommal)`;
    }
}


let MaxDobasOsszeg = null;
let MaxDobasOsszegElofordulas = null;



function LegnagyobbDobásMennyiseg() {
    if (MaxDobasOsszeg === null) {
        for (let i = dobasOsszegekMennyiseg.length - 1; i >= 3; i--) {
            if (dobasOsszegekMennyiseg[i] > 0) {
                MaxDobasOsszeg = i;
                MaxDobasOsszegElofordulas = dobasOsszegekMennyiseg[i];
            }
        }
    } else {
        for (let i = dobasOsszegekMennyiseg.length - 1; i > MaxDobasOsszeg; i--) {
            if (dobasOsszegekMennyiseg[i] > 0) {
                MaxDobasOsszeg = i;
                MaxDobasOsszegElofordulas = dobasOsszegekMennyiseg[i];
            }
        }
    }
    if (MaxDobasOsszeg !== null) {
        document.querySelector("#legnagyobbMennyisege").innerHTML = `${MaxDobasOsszeg} (${MaxDobasOsszegElofordulas} alkalommal)`;
    }
}
/*
function kettosNegyesHatosSzazalek() {
    let osszesKocka = dobasok.length * 3;
    let kettosNegyesHatosDobasok = 0;


    for (let i = 0; i < dobasok.length; i++) {
        for (let j = 0; j < 3; j++) {
            let kockaErtek = dobasok[i][j];
            if (kockaErtek === 2 || kockaErtek === 4 || kockaErtek === 6) {
                kettosNegyesHatosDobasok++;
            }
        }
    }

    let szazalek = (kettosNegyesHatosDobasok / osszesKocka) * 100;

    document.querySelector("#kettoNegyHat").innerHTML = szazalek.toFixed(2) + "%";
}*/