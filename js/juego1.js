const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonPlanta = document.getElementById("boton-planta");
const botonReiniciar = document.getElementById("boton-reiniciar");


const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");

const inputHipoge = document.getElementById("hipoge");
const inputCapichu = document.getElementById("capichu");
const inputRatigueya = document.getElementById("ratigueya");
const inputLangostelvis = document.getElementById("langostelvis");
const inputTucalmat = document.getElementById("tucalmat");
const inputCucarachon = document.getElementById("cucarachon");
const spanMascotaJugador = document.getElementById("mascota-jugador");



const spanMascotaRival = document.getElementById("mascota-rival");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasRival = document.getElementById("vidas-rival");

const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataqueDelJugador");
const ataqueDelRival = document.getElementById("ataqueDelRival");
const contenedorAtaques = document.querySelector(".contenedor-ataques");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");

let kopemones = [];
let opcionDeKopemon;

let ataqueJugador;
let ataqueRival;
let vidasJugador = 3;
let vidasRival = 3;


class Kopemon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];

  }
}

let langostelvis = new Kopemon("Langostelvis", "./images/langostelvis.png", 3);
let tucalmat = new Kopemon("Tucalmat", "./images/tucalmat.png", 3);
let cucarachon = new Kopemon("Cucarachon", "./images/cucarachon.png", 3);

kopemones.push(langostelvis, tucalmat, cucarachon);


langostelvis.ataques.push(
  { nombre: "Fuego 🔥", id: "boton-fuego" },
  { nombre: "Agua 💦", id: "boton-agua" },
  { nombre: "Planta 🌱", id: "boton-planta" },
  { nombre: "Agua 💦", id: "boton-agua" }
)
tucalmat.ataques.push(
  { nombre: "Fuego 🔥", id: "boton-fuego" },
  { nombre: "Fuego 🔥", id: "boton-fuego" },
  { nombre: "Agua 💦", id: "boton-agua" },
  { nombre: "Planta 🌱", id: "boton-planta" }
)
cucarachon.ataques.push(
  { nombre: "Fuego 🔥", id: "boton-fuego" },
  { nombre: "Agua 💦", id: "boton-agua" },
  { nombre: "Planta 🌱", id: "boton-planta" },
  { nombre: "Planta 🌱", id: "boton-planta" }
)


function iniciarJuego() {

  sectionSeleccionarAtaque.style.display = "none";

  kopemones.forEach((kopemon) => {
    opcionDeKopemon = `
        <input type="radio" name="mascota" id=${kopemon.nombre} />
        <label class="tarjeta-de-mokepon" for=${kopemon.nombre}>
            <p>${kopemon.nombre}</p>
            <img src=${kopemon.foto} alt=${kopemon.nombre}>
        </label>
    `;

    contenedorTarjetas.innerHTML += opcionDeKopemon;


  },)

  sectionReiniciar.style.display = "none";

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  botonFuego.addEventListener("click", ataqueFuego);

  botonAgua.addEventListener("click", ataqueAgua);

  botonPlanta.addEventListener("click", ataquePlanta);



  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {

  sectionSeleccionarMascota.style.display = "none";

  sectionSeleccionarAtaque.style.display = "block";

  if (inputLangostelvis.checked) {
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

  sectionReiniciar.style.display = "block";
}




function reiniciarJuego() {
  location.reload();
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);

