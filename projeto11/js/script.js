function somar(){
    var x = parseInt(document.getElementById("iptx").value);
    var y = parseInt(document.getElementById("ipty").value);

    var spnRes = document.getElementById("spnRes");

    var br = document.getElementById("boxRes");

    r = x + y;



    if (r % 2 == 0){
        br.style.backgroundColor = "green";
    }else{
        br.style.backgroundColor = "gray";
    }

    // br.style.bottom = r + "px";

    spnRes.innerHTML = r;

}