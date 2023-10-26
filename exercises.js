
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

var exercise1 = function(number){
    alert("Chamado "+number )
}

var exercise2 = function(number){
    alert("Chamado "+number )
}