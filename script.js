/*
let variable1 = prompt("Ingrese usuario")
let resultado
do{
    switch(variable1){
        case "ana":
          resultado =  "hola ana"
            break
        case "jose":
            resultado =  "hola jose"
            break
        case "maxi":
            resultado = "hola maxi"
            break
        default:
            resultado = "hola"
            break

    }
    console.log(resultado)
    variable1 = prompt("ingrese nombre de un usuario registrado")

}while(variable1 != "esc")
*/

variable2 = 12

// function suma(p1,p2){
//     let resultado = p1 + p2
//     return resultado
// }

// function resta(val1,val2){
//     let resultado = val1 - val2
//     return resultado 
// }

//  let resultado = 12 + resta(12,45)
// console.log(resultado)

function calculadora(par1,par2,operacion){
    let resultado
    switch (operacion){
        case "suma":
            resultado = par1 + par2
            break
        case "resta":
            resultado = par1 - par2
            break
        case "multi":
            resultado = par1 * par2
            break
        case "divi":
            resultado = par1 / par2
            break
        case "cuadrado":
            resultado = par1 * par1
            break
        default:
            resultado= "error"
    }
    return resultado
       
}

console.log(calculadora(12,12,"suma"))
console.log(calculadora(3,12,"cuadrado"))
console.log(calculadora(12,56,"resta"))







