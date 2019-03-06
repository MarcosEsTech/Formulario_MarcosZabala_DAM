let user = document.getElementById('user');
let password = document.getElementById('password');
let name = document.getElementById('name');
let zipCode = document.getElementById('zipCode');
let email = document.getElementById('email');
let language1 = document.getElementById('language1');
let language2 = document.getElementById('language2');
let submit = document.getElementById('submit');
let checkUser=false;
let checkPass=false;
let checkName=false;
let checkZipCode=false;
let checkMail=false;


let validateUser = function(e){
	if(user.value==""){
		alert("Introduzca un nombre de usuario");
	}else{
		if(user.value.length>=5 && user.value.length<=12){
			checkUser=true;
		}else{
			alert("El usuario debe tener entre 5 y 12 carácteres");
		}
	}
};


let validatePassword = function(e){
	if(password.value==""){
		alert("Introduzca una constraseña");
	}else{
		if(password.value.length>=7 && password.value.length<=12){
			checkPass=true;
		}else{
			alert("La contraseña debe tener entre 7 y 12 carácteres");
		}
	}
};


let validateName = function(e){
	if(name.value==""){
		alert("Introduzca un nombre");
	}else{
		let alphabet = /^[a-zA-Z\s]*$/;
		if(name.value.search(alphabet)){
			alert("Introduzca solo vocales.");
		}else{
			checkName=true;
		}
	}
};


let validateZipCode = function(e){
	if(zipCode.value==""){
		alert("Introduzca un ZipCode");
	}else{
		let numbers =  /^([0-9])*$/;
		if(zipCode.value.search(numbers)){
			alert("Introduzca solo números.");
		}else{
			checkZipCode=true;
		}
	}
	
};


let validateEmail = function(e){
	if(email.value==""){
		alert("Introduzca un email");
	}else{
		let mail =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
		if(email.value.search(mail)){
			alert("Introduzca un email válido.");
		}else{
			checkMail=true;
		}
	}
	
};

submit.onclick = function(e){
	let language=false;
	if(language1.checked==true || language2.checked==true){
		language=true;
	}else{
		alert("Seleccione un idioma.")
	}

	if(language==true && checkUser==true && checkZipCode==true && checkName==true && checkMail==true && checkPass==true){
		alert("Formulario aceptado.");
	}else{
		alert("Error en la solicitud");
	}
}

user.addEventListener("blur", validateUser);
password.addEventListener("blur", validatePassword);
name.addEventListener("blur", validateName);
zipCode.addEventListener("blur", validateZipCode);
email.addEventListener("blur", validateEmail);
