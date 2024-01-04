<script>
let szam = Number(prompt("Add meg a számot:"));
let oszto = Number(prompt("Add meg az osztót:"));

if(szam % oszto === 0) {
        document.write(szam + " osztható " + oszto + "-val/-vel maradék nélkül.");
}
else {
        document.write(szam + " nem osztható " + oszto + "-val/-vel maradék nélkül, maradék: " + (szam % oszto) + ".");
    }
</script>