
function factorizar(num){
    if(num == 0 || num == 1){
        return(1);
    }
    else if(num > 1){
        for(let i = num - 1; i > 1; i--){
            resul = i * num
        }
        
    }else if(!num){
        alert("No es un numero");
    }
}
factorizar

/*Solicitar al usuario un numero*/
console.log(factorizar(parseInt(prompt())));
