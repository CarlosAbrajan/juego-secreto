let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSortedos = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  
    if(numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento("p" , `acertaste el numero en: ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acerto 
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p" , "El numero secreto es mayor");
        } else {
            asignarTextoElemento("p" , "el numero secreto es menor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector("#valorUsuario").value = "";
   
}

function  generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
   // Si ya sorteamos todos los numeros
  if (listaNumerosSortedos.length == numeroMaximo) {
    asignarTextoElemento("p" , "Ya se sortearon todos los numeros posibles");
  } else {
  
    // si el numero generado esta incluido en la lista
    if(listaNumerosSortedos.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSortedos.push(numeroGenerado);
        return numeroGenerado;
    }
 } 
}

function condiconesIniciales (){
    asignarTextoElemento ("h1" , "Juego del numero secreto");
    asignarTextoElemento ("p" , `Indica un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalos de numero
    // generar el numero aleatorio
    // inicializar el numero de intentos
    condiconesIniciales();
    // Deshabilitar el boton de "nuevo juego"
    document.querySelector("#reiniciar").setAttribute("disabled" , "true");
    
}

condiconesIniciales();