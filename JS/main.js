/*prijavi gresku */

function prijaviGresku() {
    var tmp = prompt("Molimo unesite grešku: ");
    if (tmp != null) {
        alert("Vaša poruka je poslata administratorima!");
    }
}

function fCountdown() {
    nova = new Date('2021/01/01 00:00:00');
    var t = Math.abs((new Date() - nova));

    function dhm(ms) {
        dani = Math.floor(ms / (24 * 60 * 60 * 1000));
        danims = ms % (24 * 60 * 60 * 1000);
        sati = Math.floor((danims) / (60 * 60 * 1000));
        satims = ms % (60 * 60 * 1000);
        minuti = Math.floor((satims) / (60 * 1000));
        minutims = ms % (60 * 1000);
        sec = Math.floor((minutims) / (1000));
        return dani + " dan(a) " + sati + " sat(i) " + minuti + " minut(a) " + sec + " sekundi ";
    }

    alert("Nova godina je za   " + dhm(t));

}

function izazov() {
    confirm("Upiši >>BUDIHUMAN<< i pošalji SMS na 3030! Hvala :) ");
}

function share() {
  window.open("https://www.instagram.com");
}

















