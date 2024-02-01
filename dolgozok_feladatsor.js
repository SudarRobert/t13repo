<script>
const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 25,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]


let osszeg=0;

for (let i=0; i<Dolgozok.length;i++){
    osszeg+=Dolgozok[i].fizetes;
}
document.write("<br>A dolgozók bérének havi összege: "+osszeg.toLocaleString()+" Ft");
document.write("<hr>")

let legtobbetKereso = Dolgozok[0];

for (let i=1; i<Dolgozok.length;i++){
    if (Dolgozok[i].fizetes>legtobbetKereso.fizetes) {
        legtobbetKereso=Dolgozok[i];
    }
}

document.write("A legtöbbet kereső dolgozó a cégnél:");
document.write("<br>")
document.write(`Név: ${legtobbetKereso.nev}`);
document.write("<br>")
document.write(`Kor: ${legtobbetKereso.kor}`);
document.write("<br>")
document.write(`Fizetés: ${legtobbetKereso.fizetes.toLocaleString()} Ft`);
document.write("<br>")
document.write(`Beosztás: ${legtobbetKereso.beosztas}`);
document.write("<hr>")


let legfiatalabb=Dolgozok[0];

for (let i=1;i<Dolgozok.length;i++) {
    if (Dolgozok[i].kor<legfiatalabb.kor) {
        legfiatalabb=Dolgozok[i];
    }
}
document.write(`Név: ${legfiatalabb.nev}`);
document.write("<hr>")

legfiatalabb.fizetes+=30000;
document.write(`${legfiatalabb.nev} emelt fizetése: ${legfiatalabb.fizetes.toLocaleString()} Ft`);
document.write("<hr>")

let osszesFizetes = 0;

for (let i=0;i<Dolgozok.length;i++) {
    osszesFizetes+=Dolgozok[i].fizetes;
}

let atlagFizetes=osszesFizetes/Dolgozok.length;

document.write(`A céges dolgozók átlag fizetése: ${atlagFizetes.toLocaleString()} Ft`);
document.write("<hr>")

for (let i=0;i<Dolgozok.length;i++) {
    if (Dolgozok[i].fizetes<atlagFizetes) {
        let regiFizetes=Dolgozok[i].fizetes;
        Dolgozok[i].fizetes *= 1.10;
            document.write(Dolgozok[i].nev + " fizetése emelkedett: " + regiFizetes.toLocaleString() + " Ft-ról - " + Dolgozok[i].fizetes.toLocaleString() + " Ft-ra.<br>");
    }
}
document.write("<hr>")

let legidosebb=Dolgozok[0];
for (let i=1;i<Dolgozok.length;i++) {
    if (Dolgozok[i].kor>legidosebb.kor) {
        legidosebb=Dolgozok[i];
    }
}

document.write("A legidősebb dolgozó a cégnél: " +legidosebb.nev+ " , " +legidosebb.kor+ " éves, beosztása: " +legidosebb.beosztas);
document.write("<hr>")

let nyugdijKorhatar=65;
let nyugdijigHatra=nyugdijKorhatar-legidosebb.kor;

document.write(`${legidosebb.nev}, aki ${legidosebb.kor} éves, még ${nyugdijigHatra} évig dolgozhat a nyugdíjig.`);
document.write("<hr>")

</script>