const diccionario = ["JUEGO", "PROGRAMACION", "DESARROLLO", "JAVASCRIPT"];
let palabra_secreta = [];      // Palabra original (no canvia)
let palabra_adivinar = [];     // Palabra que se ensaña (guiones)
const arraylistaletras = [];
let num_fallos = 0;
let num_aciertos = 0;

//Al incializar resetear la imagen y lista de letras tambien
function Inicialitzar() {
    //Elegir palabra aleatoria del diccionario
    let palabra_temp = diccionario[Math.floor(Math.random() * diccionario.length)];
    
    //Convertir en array divido por letras --> Spread operator
    palabra_secreta = [...palabra_temp];  // Conveierto en array
    alert(palabra_secreta)  // Enseño la palabra para testear
    
    //Creo la palabra con los guines
    palabra_adivinar = [];
    for(let i = 0; i < palabra_secreta.length; i++){
        palabra_adivinar.push("_"); 
    }
    
    //Enseño la palabra con guines
    document.getElementById("palabra").innerHTML = palabra_adivinar.join(" ");

    document.getElementById("imagen").src = "IMG/A0.png";
    //Resetear imagen
}

function Adivinar() {
    let letra = document.getElementById("letra").value.toUpperCase();
    let letra_encontrada = false;

    // Reviso la palabra original
    for(let i = 0; i < palabra_secreta.length; i++){
        if(palabra_secreta[i] === letra){
            letra_encontrada = true;
            num_aciertos++;
            // enseño la letra por pantalla
            palabra_adivinar[i] = letra;
        }
    }

    if(letra_encontrada){
        alert("hello world");
        arraylistaletras.push(letra);
        document.getElementById("lista_letras").innerHTML += `${letra} <br>`;
        // Añanado la palabra a la lista
        document.getElementById("palabra").innerHTML = palabra_adivinar.join(" ");
    }
    else{
        alert("no warudo");
        num_fallos++;
        arraylistaletras.push(letra);
        // Call Dibuixar to update the hangman image
        Dibuixar(num_fallos, num_aciertos);
    }
}

function Dibuixar(errades, encerts){
    let imatge = document.getElementById("imagen");

    switch(errades){
        case 0: 
            imatge.src = "./IMG/A0.png";
            break;

        case 1: 
            imatge.src = "./IMG/A1.png";
            break;
            
        case 2: 
            imatge.src = "./IMG/A2.png";
            break;    

        case 3: 
            imatge.src = "./IMG/A3.png";
            break; 
            
        case 4: 
            imatge.src = "./IMG/A4.png";
            break;
            
        case 5: 
            imatge.src = "./IMG/A5.png";
            break;
            
         case 6: 
            imatge.src = "./IMG/A6.png";
            break;   

        default:
            imatge.src = "./IMG/A6.png";
            break;
    }

}

//Enseñar la palabra con guions ---> palabra_guiones []


//If errores >= 6 enseñar div de Game Over

