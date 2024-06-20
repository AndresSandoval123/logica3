const resultado = document.getElementById("resultado");
let validar = document.getElementById("validar"),
    info = document.getElementById("info");

/* Funcion factorizar, se encargara de devolver el factorial del numero ingresado */
function factorizar(num){
    /* El if valida si el numero ingresado es 0 o 1 y retornara como resultado 1 */
    if(num == 0 || num == 1){ 
        return("El factorial de tu numero es: " +  1);
    }
    /* En caso de que el numero ingresado sea mayor a 1, ingresa a un ciclo for, que se encargara de hacer el siguiente proceso. */
    else if(num > 1){
        for(let i = num - 1; i > 1; i--){ /* i valdra el numero ingresado menos 1 y cada vez que itere ira en decremento*/
            num = num * i /* Ahora num dentro de este ciclo va a ser igual a el numero ingresado * i  */
        }
        return ( "El factorial de tu numero es: " + num); /* Lo que nos retorara el resultado obtenido por el ciclo for como num */
    }else if(num < 0 ){/* Validacion en caso de ser un numero negativo */
        return("Digita un numero positivo")
    }else{ /* En caso de que lo ingresado NO sea un numero retornara un mensaje indicandole al usuario */
        return("Ingresa un valor valido (Numero entero), intentado nuevamente 😔");
    }
}
factorizar
/* Evento para mostrar en el HTML */
validar.addEventListener("click", ()=> {
    /* La informacion del input diligenciada se toma en una variable para facilitar su uso y se lo aplicamos en el parametro que recibe la funcion*/
    dato = parseInt(info.value)
    result = factorizar(dato)
    resultado.innerHTML = `<h2>${result}</h2>`;
})
