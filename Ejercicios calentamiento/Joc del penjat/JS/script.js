let diccionario = ["JUEGO", "PROGRAMACION", "DESARROLLO", "JAVASCRIPT"];
let palabra_adivinar = [];


//Al incializar resetear la imagen y lista de letras tambien
function Inicialitzar() {
    //Elegir palabra aleatoria del diccionario
    palabra_adivinar = diccionario[Math.floor(Math.random() * diccionario.length)];
    //Convertir en array divido por letras --> Spread operator
    palabra_adivinar=[...palabra_adivinar];
    //Borrar la palabra para partida nueva
    document.getElementById("palabra").innerHTML = "";
    alert(palabra_adivinar)
}

function Adivinar() {
    let letra = document.getElementById("letra").value.toUpperCase();
    for(let i = 0; i < palabra_adivinar.length; i++){
    //añadir el boolean true? 
        if(palabra_adivinar[i] === letra ){
            //añadir a la lista de letras
            alert("hello world")
            //añadir a la palabra para adivinar
        }

        else {
            alert("no world :(")
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


//Enseñar la palabra con guions ---> palabra_guiones []

