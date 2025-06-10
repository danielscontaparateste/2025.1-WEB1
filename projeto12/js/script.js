const y = 3; // Variavel Global

function executar(){
    let x = 10;

    {
        var y = 20;
        let x = 5;
        console.log("x : ", x, "y : ", y);
    }
    
    var z = somar(x, y);
    // alert(z);

    console.log("z :", z);
}

function somar(a, b){
    console.log("y dentro do somar :", y);
    return a+b;
}


function operadores(){
    var x = '7';
    var y = 7;

    {
        let x = 7;
    }

    // if (x === y){
    //     console.log("x é igual a y");
    // }else{
    //     console.log("x é dif. de y");
    // }

    (x === y)?console.log("x é igual a y"):console.log("x é diferente de y");

    var z;
    // if (x===y){
    //     z = 10;
    // }else{
    //     z = 'A';
    // }

    z = (x===y)?10:'A';

    console.log("z : ", z, " tipo : ", typeof z);


    var idade = 20;
    var cnh = false;

    if (idade < 16){
        console.log("idade de ", idade, "não votar e não dirigir");
    }else if(idade < 18){
        console.log("idade de ", idade, "votar e não dirigir");
    }else{
        
        if (cnh){
            console.log("idade de ", idade, "votar e dirigir");
        }else{
            console.log("idade de ", idade, "votar e não dirigir (sem cnh)");
        }

    }

}