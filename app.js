let nombres = [];

//Agregar nombres y validar que se introduzca texto.
function introduccionDeNombres() {

    let nombresDeAmigos = document.getElementById('amigo').value;

    if(nombresDeAmigos === '') {
        alert('Por favor inserte un nombre válido.');
    } else {
         nombres.push(nombresDeAmigos);
         limpiarCaja();
        verificarNombres();
    }
 
    console.log(nombresDeAmigos);
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

//Visualizar la lista.
function verificarNombres() {

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < nombres.length; i++) {
        let nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = nombres[i];
        lista.appendChild(nuevoNombre);
    }
}

//Sortear el amigo secreto.
function sortearAmigo() {
    if (nombres.length === 0) {
        return 'No hay nombres para sortear.';
        } else {
        let indiceAleatorio = Math.floor(Math.random()*nombres.length);
        return nombres[indiceAleatorio];
        }
}

function asignarTextoElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarResultados() {
    let amigoSecreto = sortearAmigo();
    let listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = '';

    let resultado = document.createElement('li');
    resultado.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    listaResultados.appendChild(resultado);

}