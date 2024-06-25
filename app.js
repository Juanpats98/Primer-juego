//variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*100)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "intento";
let maximosIntentos = 10;
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("me indicas un número entre 1 y 100 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue la verdadera condición
        alert(`acertaste, el número es: ${numeroUsuario}  Lo Adivinaste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert("el numero secreto es menor")
        } else{
            alert("El numero secreto es mayor")
        }
        // incrementamos el contador cunado no acierte

        intentos++; 
        palabraVeces = "intentos";
        if (intentos > maximosIntentos) {
            alert(`llegaste al máximo de ${maximosIntentos} intentos`);
           break;
        }
            
        // la condición no se cumplió
        //alert("Lo siento no acertaste el número");
    }
}