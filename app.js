/* Funcion factorizar, se encargara de devolver el factorial, del numero ingresado */

function factorizar(num){

    /* La funcion entra a directamente a un IF, es el que se encargara de hacer la validación  */
    if(num == 0 || num == 1){
        return(1);
    }
    else if(num > 1){
        for(let i = num - 1; i > 1; i--){
            num = num * i
        }
        return num
    }else if(!num){
        alert("No es un numero");
    }
}
factorizar

/*Solicitar al usuario un numero*/
console.log(factorizar(parseInt(prompt())));
