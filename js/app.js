
console.log("Isso é um codigo Js dentro da página!");

//function Cadastrar(){
    //  Buscando elemento por Id
//    var gameName = document.getElementById("gameId");

    //  Imprime no console o valor dentro do campo "Nome do Jogo" ao clicar no botão "Cadastrar"
//    console.log(gameName.value);

    //  Regra de Negócio:  Não deve ser cadastrado jogos com mesmas informações
    //  Regra de Negocio:  Todos os campos são obrigatórios e devem ser preenchidos
//    if(gameName.value == "") {
//        alert("Nome do jogo deve ser preenchido !")
//    } else {
//        alert("Os dados foram encaminhados com sucesso !")
//    }
//}///



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

