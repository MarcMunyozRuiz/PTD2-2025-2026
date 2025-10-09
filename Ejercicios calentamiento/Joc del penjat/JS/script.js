let diccionario = ["JUEGO", "PROGRAMACION", "DESARROLLO", "JAVASCRIPT"];

function Inicialitzar() {
    //Elegir palabra aleatoria del diccionario
    let palabra_adivinar = diccionario[Math.floor(Math.random() * diccionario.length)];
    //Convertir en array
    Array.from(palabra_adivinar); 
    //Borrar la palabra para partida nueva
    document.getElementById("palabra").innerHTML = "";
}

function Adivinar() {
    let letra = document.getElementById("letra").value.toUpperCase();
    
     for(let i = 0; i < letra.length; i++){

        if(palabra[i] === letra ){
            //añadir a la lista de letras
            //añadir a la palabra para adivinar
        }

        else {
            //cambiar imagen 
            //añadir a lista de letras
        }
    }
}

//1 array = Letras usadas
//1 array = Diccionario de palabras
//1 variable = palabra a adivinar ----> convertir en array
//1 variable = numero de intentos
//1 variable = letras falladas
