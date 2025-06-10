function imprimirMensagem(){
    const qtd = parseInt(document.getElementById("iptQtd").value);

    var s = 0;

    var k;
    // for(k=0; k<qtd; k++){
    //     console.log("k = ",k);
    //     s +=  k; // s = s + k; 
    // } 
    
    var m = "";
    for(k=0; k<qtd; k++){
        m += "k: "+k+"<br>";
        s +=  k; // s = s + k; 
    } 

    m += "somatório: "+s;

    // var k = 0;
    // while(k < qtd){
    //     console.log("k = ",k);
    //     s +=  k; // s = s + k; 
    //     k++;
    // }

    // var k = 0;
    // do{
    //     console.log("k = ",k);
    //     s +=  k; // s = s + k; 
    //     k++;
    // }while(k < qtd);

    // Laços infinitos
    // var k;
    // for (k=0;;k++){
    //     console.log("k = ",k);
    // }

    // for (;;){
    //     console.log("OI");
    // }

    // while(1){
    //     console.log("OLA");
    // }

    var res = document.getElementById("spnRes");

    res.innerHTML = m;

    console.log("somatório : ",s);

}