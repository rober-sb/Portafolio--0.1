document.querySelector('#barra-busqueda').addEvenListener('input', (evento) => {
	const busqueda = evento.target.velue;
	grid.filter((item) => item.getElement().dateset.etiquetas.includes(busqueda));
});