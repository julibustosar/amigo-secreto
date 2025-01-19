/* - Visualizar la lista.
- Sorteo de los valores ingresados. */

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