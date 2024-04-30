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
    document.getElementById("archer").style.border = "solid";
    document.getElementById("warrior").style.border = "dotted";
    document.getElementById("mage").style.border = "dotted";
    document.getElementById("assassin").style.border = "dotted";
    document.getElementById("shaman").style.border = "dotted";
}
function wynnClassWar() {
    document.getElementById("warrior").style.border = "solid";
    document.getElementById("archer").style.border = "dotted";
    document.getElementById("mage").style.border = "dotted";
    document.getElementById("assassin").style.border = "dotted";
    document.getElementById("shaman").style.border = "dotted";
}
function wynnClassMag() {
    document.getElementById("mage").style.border = "solid";
    document.getElementById("archer").style.border = "dotted";
    document.getElementById("warrior").style.border = "dotted";
    document.getElementById("assassin").style.border = "dotted";
    document.getElementById("shaman").style.border = "dotted";
}
function wynnClassAs() {
    document.getElementById("assassin").style.border = "solid";
    document.getElementById("archer").style.border = "dotted";
    document.getElementById("warrior").style.border = "dotted";
    document.getElementById("mage").style.border = "dotted";
    document.getElementById("shaman").style.border = "dotted";
}
function wynnClassSha() {
    document.getElementById("shaman").style.border = "solid";
    document.getElementById("archer").style.border = "dotted";
    document.getElementById("warrior").style.border = "dotted";
    document.getElementById("mage").style.border = "dotted";
    document.getElementById("assassin").style.border = "dotted";
}

function wynnMIDdh() {
    var dh = document.getElementById("divineHonor");
    if (dh.style.border == "dotted") {
        dh.style.border = "solid";
    }
    else if (dh.style.border == "solid") {
        dh.style.border = "dotted";
    }
    else {
        dh.style.border = "solid";
    }
}
function wynnMIDg() {
    var g = document.getElementById("guardian");
    if (g.style.border == "dotted") {
        g.style.border = "solid";
    }
    else if (g.style.border == "solid") {
        g.style.border = "dotted";
    }
    else {
        g.style.border = "solid";
    }
}
function wynnMIDss() {
    var ss = document.getElementById("savioursSacrifice");
    if (ss.style.border == "dotted") {
        ss.style.border = "solid";
    }
    else if (ss.style.border == "solid") {
        ss.style.border = "dotted";
    }
    else {
        ss.style.border = "solid";
    }
}

function wynnAbilR() {
    var r = document.getElementById("radiance");
}
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

function wynnNodeTS() {}
function wynnNodeMS() {}

function wynnCalc() {
    var hpW = parseInt(document.getElementById("hpW").value);
}
