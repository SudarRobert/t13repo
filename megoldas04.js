<script>
let eletkor = Number(prompt("Add meg az illető életkorát (1-120 között):"));

if (eletkor <= 0 || eletkor > 120) {
        document.write("Hiba: Érvénytelen életkor!");
    } else if (eletkor <= 6) {
        document.write("A megadott életkor: "  + eletkor + " - Kisgyermekkornak számít");
    } else if (eletkor <= 12) {
        document.write("A megadott életkor: "  + eletkor + " - Gyermekkornak számít");
    } else if (eletkor <= 16) {
        document.write("A megadott életkor: "  + eletkor + " - Serdülőkornak számít");
    } else if (eletkor <= 20) {
        document.write("A megadott életkor: "  + eletkor + " - Ifjúkornak számít");
    } else if (eletkor <= 30) {
        document.write("A megadott életkor: "  + eletkor + " - Fiatal felnőtt kornak számít");
    } else if (eletkor <= 60) {
        document.write("A megadott életkor: "  + eletkor + " - Felnőtt kornak számít");
    } else {
        document.write("A megadott életkor: "  + eletkor + " - Aggkornak számít");
    }
</script>