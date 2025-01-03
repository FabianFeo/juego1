function iniciarJuego() {
  alert("Bienvenido a la primera versión del juego");

  let botonMascotaJugagor = document.getElementById("boton-mascota");
  botonMascotaJugagor.addEventListener("click", seleccionarMascotaJugador);
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
  let ataqueRival = random(1, 6);
  let spanMascotaRival = document.getElementById("mascota-rival");
  let mascotaRivalNombre;

  if (ataqueRival == 1) {
    mascotaRivalNombre = "Hipoge";
    alert("El rival ha seleccionado a Hipoge");
  } else if (ataqueRival == 2) {
    mascotaRivalNombre = "Capichu";
    alert("El rival ha seleccionado a Capichu");
  } else if (ataqueRival == 3) {
    mascotaRivalNombre = "Ratigueya";
    alert("El rival ha seleccionado a Ratigueya");
  } else if (ataqueRival == 4) {
    mascotaRivalNombre = "Langostelvis";
    alert("El rival ha seleccionado a Langostelvis");
  } else if (ataqueRival == 5) {
    mascotaRivalNombre = "Tucalmat";
    alert("El rival ha seleccionado a Tucalmat");
  } else if (ataqueRival == 6) {
    mascotaRivalNombre = "Cucarachon";
    alert("El rival ha seleccionado a Cucarachon");
  }

  spanMascotaRival.innerHTML = mascotaRivalNombre;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
