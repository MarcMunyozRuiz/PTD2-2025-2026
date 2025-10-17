const diccionario = ["JUEGO", "PROGRAMACION", "DESARROLLO", "JAVASCRIPT"];
let palabra_adivinar = [];
const arraylistaletras = [];
let num_fallos = 0;
let num_aciertos = 0;

//Al incializar resetear la imagen y lista de letras tambien
function Inicialitzar() {
    //Elegir palabra aleatoria del diccionario
    palabra_adivinar = diccionario[Math.floor(Math.random() * diccionario.length)];
    //Convertir en array divido por letras --> Spread operator
    palabra_adivinar=[...palabra_adivinar];
    alert(palabra_adivinar)
    //Borrar la palabra para partida nueva
    for(let i = 0; i < palabra_adivinar.length; i++){
        palabra_adivinar[i] = "_"
        document.getElementById("palabra").innerHTML = palabra_adivinar; //hacer que la palabra se muestre como guines bajos
    }

    document.getElementById("imagen").src = "IMG/A0.png";
    //Resetear imagen
}

function Adivinar() {
    let letra = document.getElementById("letra").value.toUpperCase();
    for(let i = 0; i < palabra_adivinar.length; i++){

        if(palabra_adivinar[i] === letra ){
            num_aciertos ++;
            //añadir a la lista de letras
            arraylistaletras.push(letra)
            document.getElementById("lista_letras").innerHTML += `${letra} <br>`
            alert("hello world");
            //añadir a la palabra para adivinar
        }

        else {
            num_fallos ++;
            alert("no world :(");
            //cambiar imagen 
            arraylistaletras.push(letra)
            //añadir a lista de letras
            //variable numero de fallos ++
        }
    }
}

//1 array = Letras usadas
//1 array = Diccionario de palabras
//1 variable = palabra a adivinar ----> convertir en array
//1 variable = numero de intentos
//1 variable = letras falladas

//Enseñar la palabra con guions ---> palabra_guiones []

//Benja ha hecho un funcion dibujar >>> switch num fallos 0 --> 0 etc.
