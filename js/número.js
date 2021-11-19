const numero = document.getElementById('num1');
const boton = document.getElementById('btn');
const resultadoRandom = document.getElementById('resultado'); 
const historial = document.getElementById('historial');

boton.addEventListener('click', comparar);

var miarray = []
var numeroRandom = 0; 

aleatorio();

function aleatorio() {
   var num = Math.random() * (20 - 1);
   numeroRandom = Math.round(num + 0);
   console.log("Numero Ganador",numeroRandom);
}

function comparar() {
    if ( Number(numero.value) === numeroRandom ) {
        alert(` Ganaste!! cantidad de intentos ${miarray.length + 1} `);
        numero.value = ''; 
        resultado.innerHTML = '';
        historial.innerHTML = '';
        console.clear();
        aleatorio();

    } else {
        resultadoRandom.innerHTML = 'Seguir participando';
        miarray.push(numero.value);
        recorrerArray();
    }
}

function recorrerArray() {
    historial.innerHTML = '';
  for (let index = 0; index < miarray.length; index++) {
    var element = miarray[index];
    historial.innerHTML += ` Intento: ${index} - ${element} <br> `;
    
  }
}



//console.log(numeroRandom);