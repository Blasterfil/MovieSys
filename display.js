/*
<-----MCS----->
Contém funções de formatação dos resultados a apresentar.
Exibe os resultados na consola.
*/

//Nota de bem vindo ao utilizador
function msgInicial(inicio){
    //Nota de bem vindo ao utilizador
    console.log("\n      <--------------- MCS --------------->")
    console.log("\n    Bem vindo ao Movie Classification System!\n")
}

function numToStar(classnumber){
    if(classnumber == 1){
        classnumber = "*"
    }else if(classnumber == 2){
        classnumber = "**"
    }else if(classnumber == 3){
        classnumber = "***"
    }else if(classnumber == 4){
        classnumber = "****"
    }else if(classnumber == 5){
        classnumber = "*****"
    }else{
        console.log("ERRO NA CLASSIFICAÇÃO DO FILME!")
    }
    return classnumber

}
module.exports = {msgInicial, numToStar}