import * as exercise from './exercises.js';

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões com a classe "botoes-iguais"
    var buttons = document.querySelectorAll(".excButtons");

    // Função para chamar quando um botão é clicado
    function callJSExc(event) {
        //console.log("clicked")
        var btnClicked = event.target.textContent; //get text of button
        btnClicked = btnClicked.charAt(btnClicked.length - 1); //get the number of button
        //alert("Botão " + btnClicked + " foi clicado!");
        exercise.callExc(btnClicked);
    }

    // Adiciona o evento onclick a todos os botões
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", callJSExc);
    }
});