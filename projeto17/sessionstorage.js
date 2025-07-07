function mudar(){
	const sel = document.querySelector("#idselectcor");
	const escolha = sel[sel.selectedIndex].value;
	console.log(`Value: ${escolha}`);

	sessionStorage.setItem('indexColor',sel.selectedIndex);

	switch(escolha){
		case "1":
			sessionStorage.setItem('bgcolor',"red");
			console.log("Configurando para vermelho");
		break;
		case "2":
			sessionStorage.setItem('bgcolor',"green");
			console.log("Configurando para verde");
		break;
		case "3":
			sessionStorage.setItem('bgcolor',"blue");
			console.log("Configurando para azul");
		break;	
	}

	mudarCor();

}

function mudarCor(){
	const bod = document.querySelector("body");
	
	let cor = sessionStorage.getItem('bgcolor');

	bod.style.backgroundColor = cor;
}

function limpar(){
	sessionStorage.clear();
	document.querySelector("body").style.backgroundColor = "";
}

if (!sessionStorage.getItem('bgcolor')){
	console.log("Primeiro acesso");
	mudar();
	// cor = document.querySelector('body').style.backgroundColor;
	// sessionStorage.setItem('bgcolor', cor);
}else{
	console.log("Cor disponível no sessionStorage");
	console.log(`Cor: ${sessionStorage.getItem('bgcolor')}`);
	
	const sel = document.querySelector('#idselectcor');
	sel[sessionStorage.getItem('indexColor')].selected = true;

	mudarCor();
}



