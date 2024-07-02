// List of flags and correct options
let banderas = ["pa.svg", "bo.svg", "ad.svg", "gb.svg", "na.svg", "bw.svg", "cv.svg", "ml.svg", "tr.svg", "do.svg", "gy.svg", "py.svg", "tt.svg", "kz.svg", "th.svg"];
let correcta = [2, 2, 1, 1, 0, 1, 0, 2, 1, 0, 1, 2, 0, 2, 1];
let opciones = [
    ["SUDAFRICA", "SINGAPUR", "PANAMA"],
    ["PERU", "ITALIA", "BOLIVIA"],
    ["TUNEZ", "ANDORRA", "ANTIGUA Y BARBUDA"],
    ["UCRANIA", "REINO UNIDO", "MADAGASCAR"],
    ["NAMIBIA", "OMAN", "ETIOPIA"],
    ["BURUNDI", "BOTSUANA", "BURKINA FASO"],
    ["CABO VERDE", "CHAD", "COMORAS"],
    ["MAURITANIA", "MOZAMBIQUE", "MALI"],
    ["TURKMINISTAN", "TURQUIA", "UZBEKISTAN"],
    ["REPUBLICA DOMINICANA", "GRANADA", "DOMINICA"],
    ["SAN CRISTOBAL Y NIEVES", "GUYANA", "JAMAICA"],
    ["SURINAM", "SANTA LUCIA", "PARAGUAY"],
    ["TRINIDAD Y TOBAGO", "BAREIN", "AZERBAIYAN"],
    ["KUWAIT", "KIRGUISTAN", "KAZAJISTAN"],
    ["UZBEKISTAN", "TAILANDIA", "VIETNAM"]
];

// Current position and correct answers count
let posActual = 0;
let cantidadAcertadas = 0;

// Shuffle arrays function
function shuffleArrays() {
    for (let i = banderas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [banderas[i], banderas[j]] = [banderas[j], banderas[i]];
        [correcta[i], correcta[j]] = [correcta[j], correcta[i]];
        [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
    }
}

function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    shuffleArrays(); // Shuffle flags and options before starting the game
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();
}

function cargarBandera() {
    if (banderas.length <= posActual) {
        terminarJuego();
    } else {
        limpiarOpciones();
        document.getElementById("imgBandera").src = "imgs/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones() {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) {
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarBandera, 2000);
}

function terminarJuego() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio() {
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}

function volverAlMenu() {
    window.location.href = "https://juegos-5to-baco.onrender.com";
}
