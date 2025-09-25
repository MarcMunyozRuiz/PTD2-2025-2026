let llista = [];

function afegir() {
    let jugador = document.getElementById("name").value;
    llista.push(jugador);
    pintarLlista();
    //Creo una función para escribir la lista actualizada fácilmente
}

function seguent() {
    document.getElementById("juga").innerHTML = llista[0];
    let first = llista.shift();
    llista.push(first);
    pintarLlista();
}

function pintarLlista(){
    document.getElementById("jugadors").innerHTML = llista.join("<br>");
    //Uso join para unir los elementos del array en un solo string (no me acuerdo si hemos usado esta nomenclaterura pero yo la aprendi haciendo mi TRB)
}   
