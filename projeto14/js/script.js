function mostrarElementos(){
    const qtd = parseInt(document.getElementById("iptQtd").value);

    var container = document.createElement("div");
    container.setAttribute("id","container");
    container.style.width = "80%";
    container.style.height = "500px";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.border = "2px solid black";
    
    
    var k;
    for(k=0; k<qtd; k++){

        var box = document.createElement("div");

        box.style.width = "100px";
        box.style.height = "100px";
        box.style.backgroundColor = (k%2==0)?"green":"red";
        box.style.border = "1px solid black";
        box.style.margin = "10px";
        box.style.fontSize = "300%";
        box.style.fontWeight = "bold";
        box.style.display = "flex";
        box.style.alignItems = "center";
        box.style.justifyContent = "center";

        box.textContent = k;

        box.setAttribute("id","elem"+k);

        console.log("id do elemento: ",box.getAttribute("id"));

        container.appendChild(box);


        // var p = document.createElement("p");
        
        // p.style.color = (k%2==0)?"green":"red";

        // p.textContent = "Olá Mundo";

        // document.querySelector("body").appendChild(p);
    
    } 
    
    document.querySelector("body").appendChild(container);
    

}

function apagarElemento(){

    var infoElem = parseInt(document.getElementById("iptElemDel").value);

    var idElem = "elem"+infoElem;

    var elem = document.getElementById(idElem);

    // alert(elem.style.backgroundColor);

    elem.remove();


}


function apagar(){
    var container = document.getElementById("container");
    container.remove();

}
