//selector de exercicio que vem o numero do button do index
export function callExc(number){
    number = parseInt(number)
    
    switch (number){
        case 1:
        exercise1(number);
        break;
        case 2:
        exercise2(number);
        break;
        default:
        console.log("error")
    }
}

//funcao validacao de idade se foi digitado numero e inteiro
var validationAge = function(age){
    if(Number.isNaN(age)){
        return false;
    }if((parseInt(age)<0 || parseInt(age) > 150)){
        return false;
    }else{
        return true;
    }
}

//funcao validar nome se foi digitado somente letras
var validationName = function(name){
    if(name == null || name == ""){
        return false;
    }
    if(!(/^[A-Za-z -]*$/.test(name))){
        return false;
    }
    else{
        return true;
    }
}

var exercise1 = function(number){
    var age
    var name
    alert("Bem vindo! A seguir pediremos que informe alguns dados")
    
    //solicita nome ate ter um nome e valida
    do{
        name = ""
        name = prompt("Digite o seu nome")
    }while(!validationName(name))
    
    //solicita idade ate ter uma idade valida
    do{
        age = 0
        age = parseInt(prompt("Digite a sua idade"))
    }while(!validationAge(age))
    
    //confirmacao da idade
    if( age > 1 ){
        var confirmAge = confirm("Confirme sua idade. "+age+" anos?")
        age = age + " anos"
    }else if( age == 1 ){
        var confirmAge = confirm("Confirme sua idade. "+age+" ano?")
        age = age + " ano"
    }
    if (confirmAge == true){
        confirmAge = "Confirmado"
    }else{
        confirmAge = "Não confirmado"
    }
    alert("Seu nome: "+name+"\nIdade: "+age+"\nConfirmação da idade: "+confirmAge) //mostra alert com as informacoes
}



var exercise2 = function(number){
    alert("Chamado "+number )
}