function mudar(){
	const sel = document.querySelector("#idselectcor");
	const escolha = sel[sel.selectedIndex].value;
	console.log(`Value: ${escolha}`);

	localStorage.setItem('indexColor',sel.selectedIndex);

	switch(escolha){
		case "1":
			localStorage.setItem('bgcolor',"red");
			console.log("Configurando para vermelho");
		break;
		case "2":
			localStorage.setItem('bgcolor',"green");
			console.log("Configurando para verde");
		break;
		case "3":
			localStorage.setItem('bgcolor',"blue");
			console.log("Configurando para azul");
		break;	
	}

	mudarCor();

}

function mudarCor(){
	const bod = document.querySelector("body");
	
	let cor = localStorage.getItem('bgcolor');

	bod.style.backgroundColor = cor;
}

function limpar(){
	localStorage.clear();
	document.querySelector("body").style.backgroundColor = "";
}

if (!localStorage.getItem('bgcolor')){
	console.log("Primeiro acesso");
	var cor = document.querySelector('body').style.backgroundColor;
	localStorage.setItem('bgcolor', cor);
}else{
	console.log("Cor disponível no localStorage");
	console.log(`Cor: ${localStorage.getItem('bgcolor')}`);
	
	const sel = document.querySelector('#idselectcor');
	sel[localStorage.getItem('indexColor')].selected = true;

	mudarCor();
}



