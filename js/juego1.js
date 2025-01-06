let ataqueJugador;
let ataqueRival; // Variable global para almacenar el ataque del rival

function iniciarJuego() {
  alert("Bienvenido a la primera versión del juego");

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonPlanta = document.getElementById("boton-planta");
  botonPlanta.addEventListener("click", ataquePlanta);
}

function seleccionarMascotaJugador() {
  let inputHipoge = document.getElementById("hipoge");
  let inputCapichu = document.getElementById("capichu");
  let inputRatigueya = document.getElementById("ratigueya");
  let inputLangostelvis = document.getElementById("langostelvis");
  let inputTucalmat = document.getElementById("tucalmat");
  let inputCucarachon = document.getElementById("cucarachon");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipoge.checked) {
    spanMascotaJugador.innerHTML = "Hipoge";
    alert("Has seleccionado a Hipoge");
  } else if (inputCapichu.checked) {
    spanMascotaJugador.innerHTML = "Capichu";
    alert("Has seleccionado a Capichu");
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
    alert("Has seleccionado a Ratigueya");
  } else if (inputLangostelvis.checked) {
    spanMascotaJugador.innerHTML = "Langostelvis";
    alert("Has seleccionado a Langostelvis");
  } else if (inputTucalmat.checked) {
    spanMascotaJugador.innerHTML = "Tucalmat";
    alert("Has seleccionado a Tucalmat");
  } else if (inputCucarachon.checked) {
    spanMascotaJugador.innerHTML = "Cucarachon";
    alert("Has seleccionado a Cucarachon");
  } else {
    alert("Debes seleccionar una mascota");
  }

  seleccionarMascotaRival();
}

function seleccionarMascotaRival() {
  let numeroAleatorio = random(1, 6);
  let spanMascotaRival = document.getElementById("mascota-rival");

  if (numeroAleatorio == 1) {
    spanMascotaRival.innerHTML = "Hipoge";
    alert("El rival ha seleccionado a Hipoge");
  } else if (numeroAleatorio == 2) {
    spanMascotaRival.innerHTML = "Capichu";
    alert("El rival ha seleccionado a Capichu");
  } else if (numeroAleatorio == 3) {
    spanMascotaRival.innerHTML = "Ratigueya";
    alert("El rival ha seleccionado a Ratigueya");
  } else if (numeroAleatorio == 4) {
    spanMascotaRival.innerHTML = "Langostelvis";
    alert("El rival ha seleccionado a Langostelvis");
  } else if (numeroAleatorio == 5) {
    spanMascotaRival.innerHTML = "Tucalmat";
    alert("El rival ha seleccionado a Tucalmat");
  } else if (numeroAleatorio == 6) {
    spanMascotaRival.innerHTML = "Cucarachon";
    alert("El rival ha seleccionado a Cucarachon");
  }
}

function ataqueFuego() {
  ataqueJugador = "Fuego 🔥";
  alert("Has atacado con " + ataqueJugador);
  ataqueEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "Agua 💦";
  alert("Has atacado con " + ataqueJugador);
  ataqueEnemigo();
}

function ataquePlanta() {
  ataqueJugador = "Planta 🌱";
  alert("Has atacado con " + ataqueJugador);
  ataqueEnemigo();
}

function ataqueEnemigo() {
  let numeroAleatorio = random(1, 3);

  if (numeroAleatorio == 1) {
    ataqueRival = "Fuego 🔥";
  } else if (numeroAleatorio == 2) {
    ataqueRival = "Agua 💦";
  } else if (numeroAleatorio == 3) {
    ataqueRival = "Planta 🌱";
  }

  alert("El rival ha atacado con " + ataqueRival);
  combate(); // Llamar a combate después de definir ambos ataques
}

function combate() {
  let resultado;

  if (ataqueJugador === "Fuego 🔥" && ataqueRival === "Agua 💦") {
    resultado = "Has perdido";
  } else if (ataqueJugador === "Fuego 🔥" && ataqueRival === "Planta 🌱") {
    resultado = "Has ganado";
  } else if (ataqueJugador === "Agua 💦" && ataqueRival === "Fuego 🔥") {
    resultado = "Has ganado";
  } else if (ataqueJugador === "Agua 💦" && ataqueRival === "Planta 🌱") {
    resultado = "Has perdido";
  } else if (ataqueJugador === "Planta 🌱" && ataqueRival === "Fuego 🔥") {
    resultado = "Has perdido";
  } else if (ataqueJugador === "Planta 🌱" && ataqueRival === "Agua 💦") {
    resultado = "Has ganado";
  } else {
    resultado = "Empate";
  }

  crearMensaje(resultado);
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let mensaje = document.createElement("p");
  mensaje.innerHTML = "Has atacado con " +
    ataqueJugador +
    " y el rival ha atacado con " +
    ataqueRival +
    ". " +
    resultado;

  sectionMensajes.appendChild(mensaje);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);


