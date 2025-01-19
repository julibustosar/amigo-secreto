/* -Agregar nombres
- Validar que se introduzca texto.
- Visualizar la lista.
- Sorteo de los valores ingresados. */

let nombres = [];

function introduccionDeNombres() {

    let nombresDeAmigos = document.getElementById('amigo').value;

    if(nombresDeAmigos == '') {
        alert('Por favor inserte un nombre válido.');
    } else {
        nombres.push(nombresDeAmigos);
        limpiarCaja();
    }
    
    console.log(nombresDeAmigos);
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';

}
