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
    }if((parseInt(age)<=0 || parseInt(age) > 150)){
        return false;
    }else{
        return true;
    }
}

//funcao validar nome se foi digitado somente letras
var validationName = function(name){
    if(name == null || name == ""){
        alert("Nome em branco. Digite novamente.")
        return false;
    }
    if(!(/^[A-Za-z -]*$/.test(name))){
        alert("Nome com caracteres especiais ou numeros. Digite novamente.")
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
    var oldestName
    var oldestAge
    var youngestName
    var youngestAge
    
    //coleta nome da pessoa mais velha e faz verificacao se é nome valido
    do{
        oldestName = ""
        oldestName = prompt("Digite o nome da pessoa mais velha.")
    }while(!validationName(oldestName))
    
    //coleta idade da pessoa mais velha e faz verificacao se é idade valida
    do{
        oldestAge = 0
        oldestAge = parseInt(prompt("Digite a idade da pessoa mais velha."))
    }while(!validationAge(oldestAge))
    
    //coleta nome da pessoa mais nova e faz verificacao se é nome valido
    do{
        youngestName = ""
        youngestName = prompt("Digite o nome da pessoa mais nova.")
    }while(!validationName(youngestName))
    
    //coleta idade da pessoa mais nova e faz verificacao se é idade valida
    do{
        youngestAge = 0
        youngestAge = parseInt(prompt("Digite a idade da pessoa mais nova."))
    }while(!validationAge(youngestAge))
    
    var differenceAge = oldestAge - youngestAge //calcula diferenca de idade
    
    
    if(differenceAge >0){ //se a diferenca for positiva, as idades estao corretas
        oldestAge > 1 && differenceAge > 0 ? alert(oldestName+" é a pessoa mais velha com "+oldestAge+" anos.") : alert(oldestName+" é a pessoa mais velha com "+oldestAge+" ano.") //verifica para texto plural ou singular
        youngestAge > 1 && differenceAge > 0 ? alert(youngestName+" é a pessoa mais nova com "+youngestAge+" anos.") : alert(youngestName+" é a pessoa mais nova com "+youngestAge+" ano.") //verifica para texto plural ou singular
        differenceAge == 1 ? alert("A diferença de idade entre os dois é de "+differenceAge+" ano.") : alert("A diferença de idade entre os dois é de "+differenceAge+" anos.") //verifica para texto plural ou singular
    }
    else if(differenceAge==0){
        alert("Idades iguais.") //caso idades forem iguais
    }
    else if (differenceAge<0){
        alert("Idades foram inseridas erradas. Pessoa mais nova não é a mais nova") //foi inserido idade errada para cada um (sobre mais velho e mais novo)
    }
}