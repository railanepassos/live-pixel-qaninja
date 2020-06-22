
//  Aqui é ultilizado propriedade onload para que o javascript seja carregado após a pagina HTML.
//  Ao criar a pagina HTML o javascript foi linkado em seu Header, com isso os elementos da pagina 
//      estavam sendo carregados após o JavaScript, retornando erro. Para correção do incidente foi 
//      ultilizado a propriedade onload que carrega após o processo de carregamento do documento. 
//      https://pt.stackoverflow.com/questions/207822/cannot-read-property-addeventlistener-of-null/207824?noredirect=1#comment872899_207824
//  Uma outra dúvida que surgiu nessa parte é em relação a "Onde colocar o link para o fim do Js?". 
//  Podemos colocar um <script> no cabeçalho ou corpo do html (<head> ou <body>) a depender do que ele faz. Ao colocar
//      no cabeçalho ele será carregado antes do carregamento do documento, para que isso não aconteça
//      basta fazer uso da propriedade onload. Ao colocar o <script> ao fim do <body> pode passar a 
//      impressão de uma pagina mais "rápida" porem se a mesma for muito dependente do script em seu design
//      a mesma parecerá "desconfigurada".
//      https://pt.stackoverflow.com/questions/1109/onde-devo-colocar-um-c%C3%B3digo-javascript-em-um-documento-html

window.onload = function(){
    //  Usando Seletor CSS para identificar/ buscar o elemento.
    var btCadastrar = document.querySelector("#cadastrar-id");

    //  Criando um evento
    btCadastrar.addEventListener("click", function(event){
        //  Executar de forma procedural
        event.preventDefault()
        var form =  document.querySelector("#new-game");

        var name = document.querySelector("#gameId");

        var modal = document.querySelector("#modal");
        var message = document.querySelector(".message-show");

        if (name.value == ""){
            message.innerHTML = "Nome do Jogo deve ser Preenchido!"
            modal.showModal();

        }else{
            console.log()
        }




        console.log(form)
        console.log("Clicou no botão!")
    })

}

