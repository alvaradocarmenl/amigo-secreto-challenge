// Lista de nombres de amigos
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); // Cambiado el ID
    let nombreAmigo = inputAmigo.value.trim();

    inputAmigo.value = "";

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (listaAmigos.includes(nombreAmigo)) {
        alert(`${nombreAmigo} ya está en la lista.`);
        return;
    }

    // Agregar el nombre a la lista de amigos
    listaAmigos.push(nombreAmigo);

    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en pantalla
function actualizarListaAmigos() {
    let listaVisual = document.getElementById('listaAmigos'); // Cambiado el ID
    listaVisual.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = listaAmigos[i];
        listaVisual.appendChild(elementoLista);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos disponibles para el sorteo. Agrega uno.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado'); // Manteniendo el mismo ID
    resultado.innerHTML = `Amigo/a sorteado/a: <strong>${amigoSorteado}</strong>`;
}
