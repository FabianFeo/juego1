let ataqueJugador;
let ataqueRival; // Variable global para almacenar el ataque del rival
let vidasJugador = 3;
let vidasRival = 3;

function iniciarJuego() {


  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "none";

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "none";

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonPlanta = document.getElementById("boton-planta");
  botonPlanta.addEventListener("click", ataquePlanta);


  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {

  let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
  sectionSeleccionarMascota.style.display = "none";


  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "block";





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

  ataqueEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "Agua 💦";

  ataqueEnemigo();
}

function ataquePlanta() {
  ataqueJugador = "Planta 🌱";

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


  combate(); // Llamar a combate después de definir ambos ataques
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasRival = document.getElementById("vidas-rival");
  let resultado;

  if (ataqueJugador === "Fuego 🔥" && ataqueRival === "Agua 💦") {
    resultado = "Has perdido";
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  } else if (ataqueJugador === "Fuego 🔥" && ataqueRival === "Planta 🌱") {
    resultado = "Has ganado";
    vidasRival--;
    spanVidasRival.innerHTML = vidasRival;
  } else if (ataqueJugador === "Agua 💦" && ataqueRival === "Fuego 🔥") {
    resultado = "Has ganado";
    vidasRival--;
    spanVidasRival.innerHTML = vidasRival;
  } else if (ataqueJugador === "Agua 💦" && ataqueRival === "Planta 🌱") {
    resultado = "Has perdido";
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  } else if (ataqueJugador === "Planta 🌱" && ataqueRival === "Fuego 🔥") {
    resultado = "Has perdido";
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  } else if (ataqueJugador === "Planta 🌱" && ataqueRival === "Agua 💦") {
    resultado = "Has ganado";
    vidasRival--;
    spanVidasRival.innerHTML = vidasRival;
  } else {
    resultado = "Empate";
  }

  crearMensaje(resultado);

  revisarVidas();


}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("resultado");
  let ataqueDelJugador = document.getElementById("ataqueDelJugador");
  let ataqueDelRival = document.getElementById("ataqueDelRival");
  let contenedorAtaques = document.querySelector(".contenedor-ataques");

  // Asegúrate de que las columnas estén visibles al seleccionar un ataque
  contenedorAtaques.style.display = "grid";

  // Actualiza el resultado del combate
  sectionMensajes.innerHTML = resultado;

  // Crea mensajes para el jugador y el rival
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelRival = document.createElement("p");

  nuevoAtaqueDelJugador.innerHTML = "Has atacado con " + ataqueJugador;
  nuevoAtaqueDelRival.innerHTML = "El rival ha atacado con " + ataqueRival;

  // Agrega los mensajes a las respectivas columnas
  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataqueDelRival.appendChild(nuevoAtaqueDelRival);
}



function revisarVidas() {
  if (vidasJugador === 0) {
    crearMensajeFinal("Has perdido el juego");
    deshabilitarBotones(); // Deshabilita los botones de ataque
  } else if (vidasRival === 0) {
    crearMensajeFinal("Has ganado el juego");
    deshabilitarBotones(); // Deshabilita los botones de ataque
  }
}


function deshabilitarBotones() {
  document.getElementById("boton-fuego").disabled = true;
  document.getElementById("boton-agua").disabled = true;
  document.getElementById("boton-planta").disabled = true;
}


function crearMensajeFinal(resultadoFinal) {
  // Limpia los mensajes anteriores
  let sectionMensajes = document.getElementById("resultado");
  let ataqueDelJugador = document.getElementById("ataqueDelJugador");
  let ataqueDelRival = document.getElementById("ataqueDelRival");

  sectionMensajes.innerHTML = ""; // Borra cualquier mensaje previo
  ataqueDelJugador.innerHTML = ""; // Limpia el ataque del jugador
  ataqueDelRival.innerHTML = ""; // Limpia el ataque del rival

  // Crea y muestra el mensaje final
  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;
  parrafo.style.fontWeight = "bold";
  parrafo.style.color = "red";
  sectionMensajes.appendChild(parrafo);

  // Muestra el botón de reiniciar
  let botonReiniciar = document.getElementById("reiniciar");
  botonReiniciar.style.display = "block";
}




function reiniciarJuego() {
  location.reload();
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);

