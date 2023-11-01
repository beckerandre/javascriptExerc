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
        case 3:
        exercise3(number);
        break;
        case 4:
        exercise4(number);
        break;
        case 5:
        exercise5(number);
        break;
        case 6:
        exercise6(number);
        break;
        case 7:
        exercise7(number);
        break;
        default:
        console.log("btn error")
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

var exercise3 = function(number){
    let name
    let velocity = 0
    let confirmation
    let verifyVelocity
    
    do{
        name = ""
        name = prompt("Digite o nome piloto.")
    }while(!validationName(name))
    
    do{
        verifyVelocity = 0
        verifyVelocity = parseFloat(prompt("A nave está a "+velocity+" km/h.\n\nDigite um valor de velocidade para mover a nave.\nPara finalizar o programa digite 0 para parar a nave."))
        if(verifyVelocity != NaN && verifyVelocity > 0){
            confirmation = confirm("Confirma alteração da velocidade para "+verifyVelocity+" km/h?")
            confirmation ? velocity=verifyVelocity : alert("Confirmação de velocidade negada. Mantendo velocidade a "+velocity+" km/h")
        }
        else if(verifyVelocity == 0){
            alert("Nave parada. Navegação sendo finalizada")
        }
    }while(verifyVelocity != 0)
    
}

var exercise4 = function(number){
    let distance
    do{
        distance = 0
        distance = parseFloat(prompt("Favor digitar a distância em anos luz que deseja converter a medida."))
        if(isNaN(distance)){
            alert("Digite um número válido")
        }
    }while(isNaN(distance))

    let option = parseInt(prompt("Digite a opção para ser feita a conversão do valor:\n1 - Parsec (pc)\n2 - Unidade Astronômica\n3 - Quilometros"))
    switch(option){
        case 1:
        alert("Valor em anos luz: "+distance+"\nDistância calculada para Parsec: "+(distance * 0.306601)+" pc")
        break;
        case 2:
        alert("Valor em anos luz: "+distance+"\nDistância calculada para Unidade Astronômica: "+(distance * 63241.1)+" ua")
        break;
        case 3:
        alert("Valor em anos luz: "+distance+"\nDistância calculada para Quilometros: "+(distance * 9.5 * Math.pow(10, 12)).toExponential()+" km")
        break;
        default:
            alert("Opção inválida.")
    }
}

var exercise5 = function(number){
    let shipName = prompt("Qual o nome da sua nave?")
    let option
    let warpTimes = 0

    do{
        option = parseInt(prompt("Deseja realizar a próxima dobra?\n(digite o número da opção)\n1 - Sim\n2 - Não"))
        if(isNaN(option) || option >2 || option < 1){
            alert("Digite 1 ou 2")
        }else if(option == 1){
            alert("Fazendo uma dobra")
            warpTimes += 1
        }

    }while(option != 2 )

    alert("A sua nave "+shipName+" fez "+warpTimes+" dobras espaciais.")
}

var exercise6 = function(number){
    let shipName = prompt("Qual o nome da nave que deseja ocultar?")
    let charToReplace = prompt("Qual caractere deseja alterar?")
    let charReplacement = prompt("Para qual caractere deseja alterar?")
    let newName = ""

    for(let i=0; i<shipName.length; i++){
        shipName[i] == charToReplace ? newName += charReplacement : newName += shipName[i]
    }

    shipName == newName ? alert("Caractere não alterado. Nome não alterado") : alert("Novo nome da Nave: "+newName)
}

var exercise7 = function(number){
    let shipName = prompt("Qual o nome da nave?")
    let invertedName = ""

    for(let i = shipName.length - 1; i >= 0; i--){
        if(shipName[i] == "e"){
            break
        }
        invertedName += shipName[i]
        console.log(invertedName);
    }
    
    alert("Nome original da nave: "+shipName+"\nNome ocultado: "+invertedName)
}