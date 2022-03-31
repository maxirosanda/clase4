let variable1 = prompt("Ingrese algo")
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
    variable1 = prompt("ingrese otro valor")

}while(variable1 != "esc")

if(variable1 == "ana"){
    console.log("hola na")
}else if(variable1 == "jose"){
    console.log("hola jose")
}else if(variable1 == "maxi"){
    console.log("hola maxi")
}else{
    console.log("hola")
}




