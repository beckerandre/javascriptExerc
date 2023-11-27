import * as exercise from './exercises.js';

//pegar todos os button do index e identifica qual foi clicado e envia para exercises.js
document.addEventListener("DOMContentLoaded", function () {
    // pega todos os btn com class de nome excButtons
    var buttons = document.querySelectorAll(".excButtons");

    // funcao quando pega um dos btn clicados
    function callJSExc(event) {
        var btnClicked = event.target.textContent; //Pega o texto do btn
        btnClicked = btnClicked.charAt(btnClicked.length - 1); // Pega o numero que esta no texto do btn
        exercise.callExc(btnClicked);
    }

    // Adiciona o event em todos os btn
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", callJSExc);
    }
});