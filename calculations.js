//TERRARIA
function clssT() {
    var classic = document.getElementById("classic");
    var expert = document.getElementById("expert");
    var master = document.getElementById("master");
    if (classic.style.border == "dotted") {
        classic.style.border = "solid";
        expert.style.border = "dotted";
        master.style.border = "dotted";
    }
    else {
        classic.style.border = "solid";
        expert.style.border = "dotted";
        master.style.border = "dotted";
    }
}
function exprtT() {
    var classic = document.getElementById("classic");
    var expert = document.getElementById("expert");
    var master = document.getElementById("master");
    if (expert.style.border == "dotted") {
        expert.style.border = "solid";
        classic.style.border = "dotted";
        master.style.border = "dotted";
    }
    else {
        expert.style.border = "solid";
        classic.style.border = "dotted";
        master.style.border = "dotted";
    }
}
function mstrT() {
    var classic = document.getElementById("classic");
    var expert = document.getElementById("expert");
    var master = document.getElementById("master");
    if (master.style.border == "dotted") {
        master.style.border = "solid";
        expert.style.border = "dotted";
        classic.style.border = "dotted";
    }
    else {
        master.style.border = "solid";
        expert.style.border = "dotted";
        classic.style.border = "dotted";
    }
}
function terCalc() {
    var hpT = parseInt(document.getElementById("hpT").value);
    var defT = parseInt(document.getElementById("defT").value);
    var redT = parseInt(document.getElementById("redT").value);
    var redSBT = parseInt(document.getElementById("redSBT").value);
    var redPT = parseInt(document.getElementById("redPT").value);
    
    var classic = document.getElementById("classic");
    var expert = document.getElementById("expert");
    var master = document.getElementById("master");
    
    var resulT = document.getElementById("result");
    
    if (classic.style.border == "solid") {
        var factor = 0.5;
    }
    else if (expert.style.border == "solid") {
        var factor = 0.75;
    }
    else if (master.style.border == "solid") {
        var factor = 1;
    }
    else {
        resulT.innerText = "You must select a difficulty";
        return
    }
    
    var ehpT = Math.floor((hpT * (1 + (redPT * 0.01)) * (1 + (redSBT * 0.01)) * (1 + (redT * 0.01))) + (defT * factor));
    resulT.innerText = ehpT;
}

//MINECRAFT
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

//WYNNCRAFT

//class buttons
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

//Major ID buttons
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

//buff buttons
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
    var s = document.getElementById("sunflare");
    if (s.style.border == "dotted") {
        s.style.border = "solid";
    }
    else if (s.style.border == "solid") {
        s.style.border = "dotted";
    }
    else {
        s.style.border = "solid";
    }
}
function wynnAbilMOTL() {
    var motl = document.getElementById("maskOfTheLunatic");
    var motf = document.getElementById("maskOfTheFanatic");
    if (motl.style.border == "dotted") {
        motl.style.border = "solid";
        motf.style.border = "dotted";
    }
    else if (motl.style.border == "solid") {
        motl.style.border = "dotted";
    }
    else {
        motl.style.border = "solid";
        motf.style.border = "dotted";
    }
}
function wynnAbilMOTF() {
    var motl = document.getElementById("maskOfTheLunatic");
    var motf = document.getElementById("maskOfTheFanatic");
    if (motf.style.border == "dotted") {
        motf.style.border = "solid";
        motl.style.border = "dotted";
    }
    else if (motf.style.border == "solid") {
        motf.style.border = "dotted";
    }
    else {
        motf.style.border = "solid";
        motl.style.border = "dotted";
    }
}
function wynnAbilCOTF() {
    var cotf = document.getElementById("chantOfTheFanatic");
    if (cotf.style.border == "dotted") {
        cotf.style.border = "solid";
    }
    else if (cotf.style.border == "solid") {
        cotf.style.border = "dotted";
    }
    else {
        cotf.style.border = "solid";
    }
}

//node buttons
function wynnNodeTS() {
    var ts = document.getElementById("tougherSkin");
    if (ts.style.border == "dotted") {
        ts.style.border = "solid";
    }
    else if (ts.style.border == "solid") {
        ts.style.border = "dotted";
    }
    else {
        ts.style.border = "solid";
    }
}
function wynnNodeMS() {
    var ms = document.getElementById("mythrilSkin");
    if (ms.style.border == "dotted") {
        ms.style.border = "solid";
    }
    else if (ms.style.border == "solid") {
        ms.style.border = "dotted";
    }
    else {
        ms.style.border = "solid";
    }
}

function wynnCalc() {
    //taking values from inputs
    var hpW = parseInt(document.getElementById("hpW").value);
    var hpbW = parseInt(document.getElementById("hpbW").value);
    var ohpW = parseInt(document.getElementById("ohpW").value);
    var defW = parseInt(document.getElementById("defW").value);
    var agiW = parseInt(document.getElementById("agiW").value);
    var drW = parseInt(document.getElementById("drW").value);

    //defining classes
    var clAr = document.getElementById("archer");
    var clWar = document.getElementById("warrior");
    var clMag = document.getElementById("mage");
    var clAs = document.getElementById("assassin");
    var clSha = document.getElementById("shaman");

    //defining Major IDs
    var dh = document.getElementById("divineHonor");
    var g = document.getElementById("guardian");
    var ss = document.getElementById("savioursSacrifice");

    //defining buffs
    var r = document.getElementById("radiance");
    var ws = document.getElementById("warScream");
    var motb = document.getElementById("mantleOfTheBovimist");
    var bom = document.getElementById("brinkOfMadness");
    var m = document.getElementById("martyr");
    var mi = document.getElementById("mirrorImage");
    var d = document.getElementById("dissolution");
    var s = document.getElementById("sunflare");
    var motl = document.getElementById("maskOfTheLunatic");
    var motf = document.getElementById("maskOfTheFanatic");
    var cotf = document.getElementById("chantOfTheFanatic");

    //defining nodes
    var ts = document.getElementById("tougherSkin");
    var ms = document.getElementById("mythrilSkin");

    //converting defense value to actual damage reduction value, checking if there is any agility
    var dWef = defW * 0.0047;
    var aWgi = 0;
    if (agiW >= 1) {
        var aWgi = 0.9;
    }
    
    //preventing class-specific errors
    var hpMultiplir = 1;
    var motbW = 0;
    var bomW = 0;
    var dW = 0;
    var miW = 0;
    var maskMulti = 0;
    //checking which class is selected, and checking class-specific buffs
    if (clAr.style.border == "solid") {
        var clssW = -0.3;
    }
    else if (clWar.style.border == "solid") {
        var clssW = 0;
        //checking if Mantle is active
        if (motb.style.border == "solid") {
            var motbW = 0.7;
        }
        //checking nodes
        if (ts.style.border == "solid") {
            clssW += 0.05;
        }
        if (ms.style.border == "solid") {
            clssW += 0.05;
        }
        //checking if brink is active, and reducing health accordingly
        if (bom.style.border == "solid") {
            var bomW = 0.4;
            var hpMultiplir = 0.25;
        }
    }
    else if (clMag.style.border == "solid") {
        var clssW = -0.2;
    }
    else if (clAs.style.border == "solid") {
        var clssW = 0;
        //checking if dissolution and/or mirror image are active
        if (d.style.border == "solid") {
            var dW = 0.75;
        }
        if (mi.style.border == "solid") {
            var miW = 0.6;
        }
    }
    else if (clSha.style.border == "solid") {
        var clssW = -0.4;
        //checking which masks are active
        if (motl.style.border == "solid") {
            var maskMulti = -0.2;
        }
        if (motf.style.border == "solid") {
            var maskMulti = 0.35;
        }
    }
    else {
        //A class is necessary for the calculations
        document.getElementById("resultW").innerText = "You must select a class";
        return
    }
    //preventing MID errors
    var gW = 0;
    var ssW = 0;
    //checking which Major IDs are selected, but since Divine Honor affects radiance directly, it's not checked here
    if (g.style.border == "solid") {
        var gW = 0.2;
    }
    if (ss.style.border == "solid") {
        var ssW = 0.2
    }
    
    //preventing errors
    var rW = 0;
    var wsW = 0;
    var cotfW = 0;
    
    //checking which general buffs are selected
    if (r.style.border == "solid") {
        if (dh.style.border == "solid") {
            var rW = 0.25;
        }
        else {
            var rW = 0.2;
        }
    }
    if (ws.style.border == "solid") {
        var wsW = 0.2;
    }
    if (cotf.style.border == "solid") {
        var cotfW = 0.7;
    }
    
    //checking whether the player is invicible
    if (m.style.border == "solid") {
        document.getElementById("resultW").innerText = "infinite";
        return
    }
    if (s.style.border == "solid") {
        document.getElementById("resultW").innerText = "infinite";
        return
    }
    
    var hpWb = hpbW * (1 + rW);
    
    var ehpWynn = Math.floor((1+gW) * ((((hpW + hpWb) * hpMultiplir) * (1 + (ohpW * 0.01)))/((1-ssW) * (1-clssW) * (1-wsW) * (1-motbW) * (1-bomW) * (1-miW) * (1-dW) * (1-maskMulti) * (1-cotfW) * (1-dWef) * (1-aWgi) * (1-(drW*0.01)))));
    document.getElementById("resultW").innerText = ehpWynn;
}


//Stardew Valley
function yoba() {
    var yB = document.getElementById("yobaRing");
    if (yB.style.border == "dotted") {
        yB.style.border = "solid";
    }
    else if (yB.style.border == "solid") {
        yB.style.border = "dotted";
    }
    else {
        yB.style.border = "solid";
    }
}
function starCalc() {
    var hpS = parseInt(document.getElementById("hpS").value);
    var defS = parseInt(document.getElementById("defS").value);
    var yB = document.getElementById("yobaRing");

    if (yB.style.border == "solid") {
        document.getElementById("resultS").innerText = "infinite";
        return
    }

    var ehpStar = hpS + defS;
    document.getElementById("resultS").innerText = ehpStar;
}





