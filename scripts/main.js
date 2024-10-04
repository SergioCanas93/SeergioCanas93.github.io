let miImage = document.querySelector('img');

miImage.onclick = function () {
	let miSrc =miImage.getAttribute('src');
	if (miSrc === 'images/Perrito.png') {
		miImage.setAttribute('src', 'images/Perro2.png');
	} else {
		miImage.setAttribute('src', 'images/Perrito.png')
	}
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
	let miNombre = prompt('Por favor ingresa tu nombre: ');
	if (!miNombre) {
		estableceNombreUsuario
	} else {
		localStorage.setItem('nombre', miNombre);
	    miTitulo.innerHTML = 'Los Perritos Son Geniales, ' + miNombre;
	}
	
}

if (!localStorage.getItem('nombre')) {
	estableceNombreUsuario();
} else {
	let nombreAlmacenado = localStorage.getItem('nombre');
	miTitulo.textContent = 'Los Perritos Son Geniales, ' + nombreAlmacenado;
}

miBoton.onclick = function () {
	estableceNombreUsuario();
}