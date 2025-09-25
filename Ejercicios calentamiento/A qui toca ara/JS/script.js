let llista = [];

function afegir() {
    let jugador = document.getElementById("name").value;

    document.getElementById("jugadors").innerHTML += `${jugador}<br>`;
    
    llista.push(jugador)
}

function seguent() {

    document.getElementById("juga").innerHTML = llista[0]
    let first = llista.shift();
    llista.push(first)

}
