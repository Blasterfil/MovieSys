/*
<-----MCS----->
Contém os Títulos e Sinopses dos filmes, as suas avaliações e quantas vezes foram classificados.
*/
const prompt = require("prompt-sync")()

//Lista de filmes organizado por: Título, Sinopse e Classificações atribuídas pelos utilizadores
const filmes = [
    [
        "Mal Passado Sabe Melhor",
        "O pequeno talho de Sophie (Marina Foïs) e Vincent (Fabrice Eboué) está à beira da falência. Após matar acidentalmente um ativista vegano, Vincent desfaz-se do corpo e transforma a carne em fiambre. Quando Sophie começa a vender inadvertidamente esta iguaria, o negócio dispara e o casal vê-se forçado a procurar mais vítimas para satisfazer o apetite insaciável dos seus clientes...",
        []
    ],
    [
        "O Passageiro Oculto",
        "Em plena Segunda Grande Guerra, a jovem piloto Maude Gardner entra de rompante no The Fool's Errand, um grande bombardeiro prestes a levantar voo. Levando consigo uma mala com um conteúdo misterioso que se recusa a revelar, a sua presença deixa desconfortável o resto da tripulação, totalmente constituída por homens. Mas ela vai provar o seu valor quando a aeronave é atacada por uma estranha criatura que ninguém sabe de onde veio e que parece determinada em fazê-los despenhar-se.",
        []
    ],
    [
        "Sinister - Entidade do Mal",
        "Ellison Oswalt (Ethan Hawke) é um escritor de romances policiais decidido a escrever a história da sua vida. Para isso resolve ir viver para o cenário propício: a casa onde, nove meses antes, quatro pessoas foram brutalmente assassinadas. Já instalado com a mulher e filha, descobre uma caixa com filmes caseiros de famílias inteiras a serem mortas. Decidido a compreender o alcance do achado, decide investigar os casos com ajuda da polícia local, descobrindo que todas as filmagens têm em comum um símbolo que retrata uma entidade pagã conhecida como Bughuull, que consome almas de crianças.",
        []
    ]
]

module.exports = filmes