function validar(){
	//let re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/; // Expressao regular

	// let re = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);
	// let re = new RegExp(/^[0-9A]{3}\.[0-9]{3}\.[0-9]{3}\-\d{2}$/);
	// let re = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/);

	// let re = new RegExp(/\d/);
	// let re = new RegExp(/^\d{3}\.\d{2}_\d-\d\/[ab]{2}.{1,3}$/);
	// let re = new RegExp(/^[a-z]{3}\.\d{2}_\d-[xy]\/[AB]{2}.+$/);
	// let re = new RegExp(/^[a-z]{3}\.\d{2}_\d-[xy]\/[AB]{2}.*$/);
	let re = new RegExp(/^[a-z]{3}\.\d{2}_\d-[xy]-[^0-9](web|WEB)\/[AB]{2}d?$/);

	
	
	
	// let re = new RegExp(/^[^a-z]{2,5}\.[\d]{1}.*$/);
	
	
	// let re = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/);

	// let re = new RegExp(/^[^aeiouAEIOU]$/); //lista negada
	// let re = new RegExp(/^[aeiouAEOU]{2}.[0-9]{1,3}\.(doc|docx|pdf)$/); 
	// let re = new RegExp(/^[aeiouAEOU]{1,2}$/); 
	// let re = new RegExp(/^D-[0-9]{2}-[a-zA-Z]{3}\/[^aeiouAEIOU]{2}\.[0-9]{2}$/); 
	// let re = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/); 

	// let re = new RegExp(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/);
	
	// let re = new RegExp(/^[a-z]?[0-9]$/);

	// let re = new RegExp(/^[a-z][0-9]*$/);
	
	// let re = new RegExp(/^[a-z][0-9]+$/);

	// let re = new RegExp(/^[a-z][0-9].*$/);

	// let re = new RegExp(/^[^aAbBcC]{2}\.[0-9]{3}$/);
	

	//Obter a string digitada
	const str = document.querySelector("#iptDado").value;
	const lbl = document.querySelector("#lblmsg");

	// console.log(`String: ${str}`);

	if (re.test(str)){
		lbl.textContent = "Validado";
	}else{
		lbl.textContent = "Não Validado";
	}

	// console.log(re.exec(str));

}

