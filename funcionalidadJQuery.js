let user = $("#user");
let password = $("#password");
let name = $("#name");
let zipCode = $("#zipCode");
let email = $("#email");
let language1 = $("#language1");
let language2 = $("#language2");
let submit = $("#submit");
let checkUser=false;
let checkPass=false;
let checkName=false;
let checkZipCode=false;
let checkMail=false;

$(document).ready(function(){
	$("#submit").click(function(){
		if(user.val()==""){
		alert("Introduzca un nombre de usuario");
	}else{
		if(user.val().length>=5 && user.val().length<=12){
			checkUser=true;
		}else{
			alert("El usuario debe tener entre 5 y 12 carácteres");
		}
	}

	if(password.val()==""){
		alert("Introduzca una constraseña");
	}else{
		if(password.val().length>=7 && password.val().length<=12){
			checkPass=true;
		}else{
			alert("La contraseña debe tener entre 7 y 12 carácteres");
		}
	}
	if(name.val()==""){
		alert("Introduzca un nombre");
	}else{
		let alphabet = /^[a-zA-Z\s]*$/;
		if(name.val().search(alphabet)){
			alert("Introduzca solo vocales.");
		}else{
			checkName=true;
		}
	}
	if(zipCode.val()==""){
		alert("Introduzca un ZipCode");
	}else{
		let numbers =  /^([0-9])*$/;
		if(zipCode.val().search(numbers)){
			alert("Introduzca solo números.");
		}else{
			checkZipCode=true;
		}
	}
	if(email.val()==""){
		alert("Introduzca un email");
	}else{
		let mail =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
		if(email.val().search(mail)){
			alert("Introduzca un email válido.");
		}else{
			checkMail=true;
		}
	}
	let language=false;
	if( $('#language1').is(':checked') ||  $('#language2').is(':checked')){
		language=true;
	}else{
		alert("Seleccione un idioma.")
	}
	if(checkUser==true && checkZipCode==true && checkName==true && checkMail==true && checkPass==true && language==true){
			alert("Formulario aceptado.");
		}else{
			alert("Error en la solicitud");
		}
	});
});