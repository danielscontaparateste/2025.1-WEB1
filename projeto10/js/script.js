function somar(){
    var ipt_X;
    ipt_X = document.getElementById("iptX");
    var x = parseFloat(ipt_X.value);

    var y = parseFloat(document.getElementById("iptY").value);

    var spnRes = document.getElementById("spnRes");

    var res = x + y;

    // alert(res);

    spnRes.innerHTML = "O resultado é: "+res;
    
}


function mudarBackgroundVerde(){
    var bd = document.querySelector("body");
    bd.style.backgroundColor = "green";
    bd.style.color = "white";

    var bttVerde = document.querySelector("#bttVerde");
    bttVerde.style.backgroundColor = "white";
}

function mudarBackgroundBranco(){
    var bd = document.querySelector("body");
    bd.style.backgroundColor = "white";
    bd.style.color = "black";

    var bttVerde = document.querySelector("#bttVerde");
    bttVerde.style.backgroundColor = "green";
}