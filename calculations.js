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
    if (r.style.border == "dotted") {
        r.style.border = "solid";
    }
    else if (r.style.border == "solid") {
        r.style.border = "dotted";
    }
    else {
        r.style.border = "solid";
    }
}
function wynnAbilWS() {
    var ws = document.getElementById("warScream");
    if (ws.style.border == "dotted") {
        ws.style.border = "solid";
    }
    else if (ws.style.border == "solid") {
        ws.style.border = "dotted";
    }
    else {
        ws.style.border = "solid";
    }
}
function wynnAbilMOTB() {
    var motb = document.getElementById("mantleOfTheBovimist");
    if (motb.style.border == "dotted") {
        motb.style.border = "solid";
    }
    else if (motb.style.border == "solid") {
        motb.style.border = "dotted";
    }
    else {
        motb.style.border = "solid";
    }
}
function wynnAbilBOM() {
    var bom = document.getElementById("brinkOfMadness");
    if (bom.style.border == "dotted") {
        bom.style.border = "solid";
    }
    else if (bom.style.border == "solid") {
        bom.style.border = "dotted";
    }
    else {
        bom.style.border = "solid";
    }
}
function wynnAbilM() {
    var m = document.getElementById("martyr");
    if (m.style.border == "dotted") {
        m.style.border = "solid";
    }
    else if (m.style.border == "solid") {
        m.style.border = "dotted";
    }
    else {
        m.style.border = "solid";
    }
}
function wynnAbilMI() {
    var mi = document.getElementById("mirrorImage");
    if (mi.style.border == "dotted") {
        mi.style.border = "solid";
    }
    else if (mi.style.border == "solid") {
        mi.style.border = "dotted";
    }
    else {
        mi.style.border = "solid";
    }
}
function wynnAbilD() {
    var d = document.getElementById("dissolution");
    if (d.style.border == "dotted") {
        d.style.border = "solid";
    }
    else if (d.style.border == "solid") {
        d.style.border = "dotted";
    }
    else {
        d.style.border = "solid";
    }
}
function wynnAbilS() {
        var r = document.getElementById("radiance");
    if (r.style.border == "dotted") {
        r.style.border = "solid";
    }
    else if (r.style.border == "solid") {
        r.style.border = "dotted";
    }
    else {
        r.style.border = "solid";
    }
}
function wynnAbilMOTL() {
        var r = document.getElementById("radiance");
    if (r.style.border == "dotted") {
        r.style.border = "solid";
    }
    else if (r.style.border == "solid") {
        r.style.border = "dotted";
    }
    else {
        r.style.border = "solid";
    }
}
function wynnAbilMOTF() {
        var r = document.getElementById("radiance");
    if (r.style.border == "dotted") {
        r.style.border = "solid";
    }
    else if (r.style.border == "solid") {
        r.style.border = "dotted";
    }
    else {
        r.style.border = "solid";
    }
}
function wynnAbilCOTF() {
        var r = document.getElementById("radiance");
    if (r.style.border == "dotted") {
        r.style.border = "solid";
    }
    else if (r.style.border == "solid") {
        r.style.border = "dotted";
    }
    else {
        r.style.border = "solid";
    }
}

function wynnNodeTS() {
        var r = document.getElementById("radiance");
    if (r.style.border == "dotted") {
        r.style.border = "solid";
    }
    else if (r.style.border == "solid") {
        r.style.border = "dotted";
    }
    else {
        r.style.border = "solid";
    }
}
function wynnNodeMS() {
        var r = document.getElementById("radiance");
    if (r.style.border == "dotted") {
        r.style.border = "solid";
    }
    else if (r.style.border == "solid") {
        r.style.border = "dotted";
    }
    else {
        r.style.border = "solid";
    }
}

function wynnCalc() {
    var hpW = parseInt(document.getElementById("hpW").value);
}
