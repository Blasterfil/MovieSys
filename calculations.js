/*
<-----MCS----->
Contém as funções de cálculo da média das avaliaçõs dos filmes.
*/
const filmes = require("./data")

function media(somatorio,quantidade){
    mediaFix = (somatorio/quantidade).toFixed(0)
    return mediaFix
}

module.exports = media