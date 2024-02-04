// Sudár Róbert - Team13//

<script>
//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

	const csapatAdat = [
    "Anglia;4;0;1662", 
    "Argentína;10;0;1614", 
    "Belgium;1;0;1752", 
    "Brazília;3;-1;1719", 
    "Chile;17;-3;1576", 
    "Dánia;14;-1;1584", 
    "Franciaország;2;1;1725", 
    "Hollandia;13;3;1586", 
    "Horvátország;8;-1;1625", 
    "Kolumbia;9;-1;1622", 
    "Mexikó;12;0;1603", 
    "Németország;16;-1;1580", 
    "Olaszország;15;1;1583", 
    "Peru;19;0;1551", 
    "Portugália;5;1;1643", 
    "Spanyolország;7;2;1631", 
    "Svájc;11;0;1604", 
    "Svédország;18;0;1560", 
    "Szenegál;20;0;1546", 
    "Uruguay;6;-1;1639"
    ];
    

    /* Objektum tömbösítés*/
    const csapatObjektumTomb=csapatAdat.map((sor)=> {
        const [nev,helyezes,valtozas,pont]=sor.split(';');
        return {
            nev,
            helyezes: parseInt(helyezes),
            valtozas: parseInt(valtozas),
            pont: parseInt(pont)
        };
    });
    
    /* 1. feladat*/
    function csapatokSzamolasa(csapatAdat) {
        let CsapatSzam=0;
        for (let i=0;i<csapatAdat.length;i++) {
            CsapatSzam++;
        }
        return CsapatSzam;
    }
    
    let csapatokSzama=csapatokSzamolasa(csapatAdat);
    
    document.write("A ranglistán aktuálisan szereplő csapatok száma: ");
    document.write("<b>" +csapatokSzama+ "</b>");
    document.write("<hr>")
    
    /* 2. feladat*/
    function atlagPontszamSzamitas(csapatok) {
        let osszPontszam=0;
        for (let i=0;i<csapatok.length;i++) {
            osszPontszam+=csapatok[i].pont;
        }
        return osszPontszam/csapatok.length;
    }
    
    let atlagPontszam=atlagPontszamSzamitas(csapatObjektumTomb);
    document.write("A ranglistán aktuálisan szereplő csapatok átlagpontszáma: ")
    document.write("<b>" +atlagPontszam+ "</b>")
    document.write("<hr>")
    
    /* 3. feladat*/
    function atlagFelettiCsapatok(csapatok, atlagPontszam) {
        document.write("A ranglistán aktuálisan szereplő átlagpontszám feletti csapatok: <br><br>")
        let tablazat="<table border='1'><tr><th>Csapat neve</th><th>Csapat pontszáma</th></tr>";
        let vanAtlagFeletti=false;
    
        for (let i=0; i<csapatok.length;i++) {
            if (csapatok[i].pont>atlagPontszam) {
                tablazat+="<tr><td>"+csapatok[i].nev+"</td><td>"+csapatok[i].pont+"</td></tr>";
                vanAtlagFeletti=true;
            }
        }
    
        tablazat+="</table>";
        return tablazat;
    }
    document.write(atlagFelettiCsapatok(csapatObjektumTomb, atlagPontszam));
    document.write("<hr>")
    
    /* 4. feladat*/
    function legtobbetJavitoCsapat(csapatok) {
        let legtobbetJavito = csapatok[0];
        for (let i=1;i<csapatok.length;i++) {
            if (csapatok[i].valtozas>legtobbetJavito.valtozas) {
                legtobbetJavito=csapatok[i];
            }
        }
    
        document.write("A legtöbbet javító csapat adatai:<br>");
        document.write("Helyezés: "+legtobbetJavito.helyezes+"<br>");
        document.write("Csapat neve: "+legtobbetJavito.nev+"<br>");
        document.write("Pontszáma: "+legtobbetJavito.pont+"<br>");
        document.write("<hr>")
    }
    
    legtobbetJavitoCsapat(csapatObjektumTomb);
    
    /* 5. feladat*/
    function csapatSzerepelE(csapatok, keresettCsapatNev) {
        for (let i = 0; i < csapatok.length; i++) {
            if (csapatok[i].nev.toLowerCase() === keresettCsapatNev.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
    let keresettCsapat = prompt("Add meg a keresett csapatot: ");
    if (keresettCsapat) {
        let szerepel = csapatSzerepelE(csapatObjektumTomb, keresettCsapat);
    
        if (szerepel) {
            document.write(keresettCsapat + " szerepel a listán.");
             document.write("<hr>")
        }
        else {
            document.write(keresettCsapat + " nem szerepel a listán.");
            document.write("<hr>")
        }
    }
    
    /* 6. feladat
    function helyezesValtozas(csapatok) {
        let valtozasStatisztika = {};
        for (let i=0;i<csapatok.length;i++) {
            let valtozas=csapatok[i].valtozas;
            if () {
                ;
            } else {
            
            }
        }
*/
</script>