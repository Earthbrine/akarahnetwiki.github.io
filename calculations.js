function terCalc() {
    var hpT = parseInt(document.getElementById("hpT").value);
    var defT = parseInt(document.getElementById("defT").value);
    var redT = parseInt(document.getElementById("redT").value);
    var redSBT = parseInt(document.getElementById("redSBT").value);
    var redPT = parseInt(document.getElementById("redPT").value);
    var gameModeT = document.getElementById("gamemodeT").value;
    var resulT = document.getElementById("result");
    
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
    
    var ehpT = Math.floor((hpT * (1 + (redPT * 0.01)) * (1 + (redSBT * 0.01)) * (1 + (redT * 0.01))) + (defT * factor));
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


function wynnClassAr() {
    document.getElementById("archer").style.border-width = "thick";
    document.getElementById("warrior").style.border-width = "thin";
    document.getElementById("mage").style.border-width = "thin";
    document.getElementById("assassin").style.border-width = "thin";
    document.getElementById("shaman").style.border-width = "thin";
}
function wynnClassWar() {
    document.getElementById("warrior").style.border-width = "thick";
    document.getElementById("archer").style.border-width = "thin";
    document.getElementById("mage").style.border-width = "thin";
    document.getElementById("assassin").style.border-width = "thin";
    document.getElementById("shaman").style.border-width = "thin";
}
function wynnClassMag() {
    document.getElementById("mage").style.border-width = "thick";
    document.getElementById("archer").style.border-width = "thin";
    document.getElementById("warrior").style.border-width = "thin";
    document.getElementById("assassin").style.border-width = "thin";
    document.getElementById("shaman").style.border-width = "thin";
}
function wynnClassAs() {
    document.getElementById("assassin").style.border-width = "thick";
    document.getElementById("archer").style.border-width = "thin";
    document.getElementById("warrior").style.border-width = "thin";
    document.getElementById("mage").style.border-width = "thin";
    document.getElementById("shaman").style.border-width = "thin";
}
function wynnClassSha() {
    document.getElementById("shaman").style.border-width = "thick";
    document.getElementById("archer").style.border-width = "thin";
    document.getElementById("warrior").style.border-width = "thin";
    document.getElementById("mage").style.border-width = "thin";
    document.getElementById("assassin").style.border-width = "thin";
}

function wynnMIDdh() {
    var dh = document.getElementById("divineHonor");
    if (dh.style.border-width == "thin") {
        dh.style.border-width = "thick";
    }
    else if (dh.style.border-width == "thick") {
        dh.style.border-width = "thin";
    }
    else {
        dh.style.border-width = "thick";
    }
}
function wynnMIDg() {
    var g = document.getElementById("guardian").style.border-width;
    if (g.style.border-width == "thin") {
        g.style.border-width = "thick";
    }
    else if (g.style.border-width == "thick") {
        g.style.border-width = "thin";
    }
    else {
        g.style.border-width = "thick";
    }
}
function wynnMIDss() {
    var ss = document.getElementById("savioursSacrifice").style.border-width;
    if (ss.style.border-width == "thin") {
        ss.style.border-width = "thick";
    }
    else if (ss.style.border-width == "thick") {
        ss.style.border-width = "thin";
    }
    else {
        ss.style.border-width = "thick";
    }
}

function wynnAbilR() {}
function wynnAbilWS() {}
function wynnAbilMOTB() {}
function wynnAbilBOM() {}
function wynnAbilM() {}
function wynnAbilMI() {}
function wynnAbilD() {}
function wynnAbilS() {}
function wynnAbilMOTL() {}
function wynnAbilMOTF() {}
function wynnAbilCOTF() {}

function

function wynnCalc() {
    var hpW = parseInt(document.getElementById("hpW").value);
}
