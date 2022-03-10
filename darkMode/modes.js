const dark = dark => {

	let fondo = document.getElementById('fondo-imagen');
	let botones = document.getElementById('container');
	let fondoTitulo = document.getElementById('mode');

	fondo.style.background = '#202020';
	fondo.style.width = '100%';
	fondo.style.height = '90vh';

	botones.style.background = '#313131';
	botones.style.width = '100%';
	botones.style.height = '100px';

	fondoTitulo.style.background = '#313131';
	fondoTitulo.style.width = '100%';
	fondoTitulo.style.height = '50px';
	fondoTitulo.style.color = 'white';

	let titulo = document.getElementById('titulo');
	titulo.innerHTML = 'Dark mode';


	let imagen = document.getElementById('imagen');
	

	imagen.setAttribute('src','https://i.pinimg.com/736x/41/6f/ec/416fecedf2dd2894c3260bdd1d680d10.jpg');


}

const light = light => {

	let fondo = document.getElementById('fondo-imagen');
	let botones = document.getElementById('container');
	let fondoTitulo = document.getElementById('mode');

	fondo.style.background = '#effff2';
	fondo.style.width = '100%';
	fondo.style.height = '90vh';

	botones.style.background = '#64ff7e';
	botones.style.width = '100%';
	botones.style.height = '100px';

	fondoTitulo.style.background = '#64ff7e';
	fondoTitulo.style.width = '100%';
	fondoTitulo.style.height = '50px';
	fondoTitulo.style.color = 'white';

	let titulo = document.getElementById('titulo');
	titulo.innerHTML = 'Light mode';

	let imagen = document.getElementById('imagen');


	imagen.setAttribute('src','http://4.bp.blogspot.com/-MGozDAPuzYI/UokiytTwYrI/AAAAAAAAC9Y/iZMf10VrX4s/s1600/bombilla.png');

}

const ninja = ninja => {

	let fondo = document.getElementById('fondo-imagen');
	let botones = document.getElementById('container');
	let fondoTitulo = document.getElementById('mode');

	fondo.style.background = '#03163b';
	fondo.style.width = '100%';
	fondo.style.height = '90vh';

	botones.style.background = '#0a2d71';
	botones.style.width = '100%';
	botones.style.height = '100px';

	fondoTitulo.style.background = '#0a2d71';
	fondoTitulo.style.width = '100%';
	fondoTitulo.style.height = '50px';
	fondoTitulo.style.color = 'white';

	let titulo = document.getElementById('titulo');
	titulo.innerHTML = 'Ninja mode';

	let imagen = document.getElementById('imagen');


	imagen.setAttribute('src','https://image.freepik.com/vector-gratis/mascota-ninja-e-sport_96628-70.jpg');

}