/*
<-----MCS----->
Arquivo principal a ser executado.
Contém a lógica do programa e chama as funções de outros arquivos.
*/
const prompt = require("prompt-sync")()

//Vai chamar outros ficheiros
var filmes = require("./data")
const media = require("./calculations")
const {msgInicial, numToStar} = require("./display")

//Corre todo o programa
while(true){
    //Nota de bem vindo ao utilizador
    msgInicial()

    //Imprime as opções de navegação e valida as respostas    
    //Imprime as opções de navegação e valida as respostas  
      
    do{
        console.log("\n\t1) Classificar um filme.\n\t2) Ver todas as classificações.\n\t3) Sair do programa.\n\n\tEscolha a opção 1, 2, ou 3:\n")
        var resposta = prompt(" ")

        if(resposta != "1" && resposta != "2" && resposta != "3"){
            console.log("ERRO! Deverá escolher 1, 2 ou 3.\n")
        }
    }while(resposta != "1" && resposta != "2" && resposta != "3")

    //Menu principal
    switch(resposta){

        //Menu 1  - Aqui pode classificar os filmes
        case "1": 

        // Vai imprimir os valores de classificação
        for( var i = 0; i < filmes.length; i++){

            //Variável auxiliar para simplificar o código 
            var r = filmes[i]

            //Vai imprimir o Título do Filme e a Sinopse    
            console.log(`\n${r[0]}\n-------------------------\nSinopse:\n${r[1]}\n`)

            //Vamos validar as respostas
            do{

                var classFilme = prompt("Como classifica este filme de 1 a 5? --> ")
                
                if (classFilme != "1" && classFilme != "2" && classFilme != "3" && classFilme != "4" && classFilme != "5"){
                    console.log("\nUps! Tem de classificar de 1 a 5\n")
                }
            }while(classFilme != "1" && classFilme != "2" && classFilme != "3" && classFilme != "4" && classFilme != "5")

            //Guardamos as classificações do utilizador
            filmes[i][2].push(classFilme)
            }
            
            //Imprime o agradecimento
            console.log("\nMuito obrigado!\n")

            //Vamos saber se pretendemos classificar novamente
            do{
                var continuar = prompt("Prima 1 para voltar ao menu inicial ou 2 para sair --> ")
                }while(continuar != "1" && continuar != "2")
                        if(continuar=="2"){
                        process.exit(1);
                }
            break

        case "2":
            //Mostrar as classificações dos Filmes
            console.log("\n<--- Classificações --->\n")

           //Vai retornar os Títulos e Calcular a média da classificação dos filmes
            for(var i = 0; i<filmes.length;i++){

                //Retorna os Títulos
                console.log(`${filmes[i][0]}\n`)

               //Vai guardar os somatórios e o número total de classificações para poder calcular as médias.
                var sum=0
                var count = filmes[i][2].length
                
                //Vai somar as classificações totais por cada filme
                for (var k=0; k < filmes[i][2].length; k++){
                    sum += parseInt(filmes[i][2][k])   
                }

                //Vai imprimir as médias por filme
                var numClass = media(sum, count)
                console.log(`Classificação: ${numToStar(numClass)}\n`)
                console.log("---------------------------------------\n")
                          
            }
            //Vamos voltar ao menu inicial ou sair do programa
            do{
                var continuar = prompt("Prima 1 para voltar ao menu inicial ou 2 para sair --> ")
                }while(continuar != "1" && continuar != "2")
                        if(continuar=="2"){
                        process.exit(1);
                }
            break
        //Fecho do programa    
        default:
            process.exit(1)
        
    }

}
