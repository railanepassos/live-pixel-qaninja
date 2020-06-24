
//  Aqui estamos ultilizado propriedade/ método onload para que o javascript seja carregado após a pagina HTML.
//  Ao criar a pagina HTML o javascript foi linkado em seu Header, com isso os elementos da pagina 
//      estavam sendo carregados após o JavaScript, retornando erro. Para correção do incidente foi 
//      ultilizado a propriedade/ método onload que carrega após o processo de carregamento do documento. 
//      https://pt.stackoverflow.com/questions/207822/cannot-read-property-addeventlistener-of-null/207824?noredirect=1#comment872899_207824
//  Uma outra dúvida que surgiu nessa parte é em relação a "Qual a melhor prosição de "inserir" o JavaScritp?". 
//  Podemos colocar um <script> no cabeçalho ou corpo do html (<head> ou <body>) a depender do que ele faz. Ao colocar
//      no cabeçalho ele será carregado antes do carregamento do documento, para que isso não aconteça
//      basta fazer uso da propriedade onload. Ao colocar o <script> ao fim do <body> ou até mesmo fazendo o uso do método onload, 
//      pode passar a impressão de uma pagina mais "rápida" porem se a mesma for muito dependente do script em seu design
//      a mesma parecerá "desconfigurada".
//      https://pt.stackoverflow.com/questions/1109/onde-devo-colocar-um-c%C3%B3digo-javascript-em-um-documento-html

window.onload = function(){
    //  Usando Seletor CSS para identificar/ buscar o elemento.
    //  No caso abaixo estamos buscando o elemento "carastrar-id" que corresponde ao botão "Cadastar".
    var btCadastrar = document.querySelector("#cadastrar-id");

    //  Criando um evento para que seja executado quando clicar-mos em "Cadastar".
    btCadastrar.addEventListener("click", function(event){
        //  O metodo preventDefault() irá cancelar a ação padrão do evento que seria "Enviar" 
        //      afim de executar as regras correspondentes a preenchimento dos campos.
        //      https://www.w3schools.com/jsref/event_preventdefault.asp
        event.preventDefault()
        var name = document.querySelector("#gameId");
        var modal = document.querySelector("#modal");
        var message = document.querySelector(".message-show");

        //  Abaixo temos uma regra onde compara se o campo "nome" está vazio, caso esteja então ele deverá exibir 
        //      uma mensagem informando que o campo deverá ser preenchido.
        if (name.value == ""){
            //  A propriedade inerHTML permite trocar completamente o conteúdo de um elemento. 
            //  Na linha 28 deste documento é selecionado ".message-show" e atribuido a variavel message, ela pertence
            //      a uma caixa de diálogo, onde seu conteúdo será modificado.
            //  https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML
            message.innerHTML = "Nome do Jogo deve ser Preenchido!"

            //  Após alterar a mensagem a ser exibido na caixa de diálogo, ultilizamos o método "showModal()"
            //      para exibir a caixa de diálogo em cima de qualquer outra que possa estar presente.
            //      https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal
            modal.showModal();

        //  Caso o campo nome tenha sido preenchido, então o modal deverá exibir mensagem de sucesso. 
        }else{
            message.innerHTML = "Os dados do jogo foram enviados com sucesso!"
            modal.showModal();
        }

    })

}

