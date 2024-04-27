function terCalc() {
    var hpT = parseInt(document.getElementById("hpT").value);
    var defT = parseInt(document.getElementById("defT").value);
    var redT = parseInt(document.getElementById("redT").value);
    var redSBT = parseInt(document.getElementById("redSBT").value);
    var redPT = parseInt(document.getElementById("redPT").value);
    var gameModeT = document.getElementById("gamemodeT").value;
    var resulT = document.getElementById("result");
    document.getElementById("debugHP").innerText = hpT;

    if (gameModeT == "classic") {
        var factor = 0.5;
    }
    else if (gameModeT == "expert") {
        var factor = 0.75;
    }
    else if (gameModeT == "master") {
        var factor = 1;
    }
    else {
        var factor = 0.5;
    }
    console.log(hpT);
    console.log(defT);
    console.log(redT);
    console.log(redSBT);
    console.log(redPT);
    console.log(factor);
    var ehpT = Math.floor((hpT * (1 + (redPT * 0.01)) * (1 + (redSBT * 0.01)) * (1 + (redT * 0.01))) + (defT * factor));
    console.log(ehpT);
    resulT.innerText = ehpT;
}
function mineCalc() {
    var hpM = parseInt(document.getElementById("hpM").value);
    var absM = parseInt(document.getElementById("absM").value);
    var defM = parseInt(document.getElementById("defM").value);
    var tougM = parseInt(document.getElementById("tougM").value);
    var protM = parseInt(document.getElementById("protM").value);
    var resM = parseInt(document.getElementById("resM").value);

    var absCal = absM * 4;

    if (resM >= 5) {
        document.getElementById("resultM").innerText = "infinite";
    }
    else {
        var resCal = 1 + (resM * 0.2);
    }

    var defCal = 1 + ((Math.min(20, Math.max((defM/5), (defM - ((4 * (hpM + absCal)) / (tougM + 8))))))/25);
    var protCal = 1 + ((Math.min(20, protM)) / 25);

    var ehpM = Math.floor((hpM + absCal) * (resCal) * (defCal) * (protCal));
    document.getElementById("resultM").innerText = ehpM;
}