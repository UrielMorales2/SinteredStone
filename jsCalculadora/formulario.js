 // Obtener los elementos de entrada
 const numero1 = document.getElementById('numero1');
 const numero2 = document.getElementById('numero2');
 const resultado = document.getElementById('resultado');
 const resultado2 = document.getElementById('resultado2');
 const resultado3 = document.getElementById('resultado3');

let tamanoLoza = 0; 
let area = 0;
let res = 0;
let res2 = 0;

 // Agregar un manejador de evento para el evento input de los elementos de entrada
 numero1.addEventListener('input', calcularResultado);
 numero2.addEventListener('input', calcularResultado);

 function calcularResultado() {
    // Convertir los valores de los elementos de entrada a números
    tamanoLoza = Number(numero1.value);
    area = Number(numero2.value);

    // Calcular el resultado de la multiplicación
     res = area / tamanoLoza;
    
    //  res2 = (tamanoLoza * res);
    
    
    
    // Actualizar el valor del elemento de resultado
    resultado2.value = Math.ceil(res) ;
   
     res2 = (resultado2.value * tamanoLoza);
    resultado.value = res2  + " M2";
    resultado3.value = ("*Comunicate con nustros asesores de ventas para continuar con tu proyecto");
 }
