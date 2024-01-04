<script>
let alsoHatar = Number(prompt("Add meg az intervallum alsó határát:"));
let felsoHatar = Number(prompt("Add meg az intervallum felső határát:"));

let veletlenSzam = Math.round(Math.random() * (felsoHatar - alsoHatar + 1)) + alsoHatar;

if (veletlenSzam % 2 !== 0) {
        veletlenSzam += 1;
    }

if (veletlenSzam > felsoHatar) {
        veletlenSzam -= 2;
    }


document.write("A generált páros szám: " + veletlenSzam);
</script>