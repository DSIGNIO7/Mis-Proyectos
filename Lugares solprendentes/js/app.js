const menu = document.querySelector(".IconoHamburg");
const navegacion = document.querySelector(".navegacion");

const fila = document.querySelector('.contenedor-carousel');
const paisajes = document.querySelectorAll('.paisajes');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

document.addEventListener("DOMContentLoaded",()=>{
    eventos();
});

     // Icono y contenido del Menú //
const eventos = () =>{
    menu.addEventListener("click",abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove("ocultar");
    botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement("p");
    const overlay = document.createElement("div");
    overlay.classList.add("pantalla-completa");
    const body = document.querySelector("body");
    if(document.querySelectorAll(".pantalla-completa").length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = "x";
    btnCerrar.classList.add("btn-cerrar");

    //while(navegacion.children [5]){
    //    navegacion.removeChild(navegacion.children[5]);
    //}

    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);
}

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener("click",()=>{
        navegacion.classList.add("ocultar");
        overlay.remover();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add("ocultar");
        boton.remove();
    }
}


// ? ----- ----- Event Listener para la flecha derecha. al dar clic----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. al dar clic----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion los indicadores----- -----
const numeroPaginas = Math.ceil(paisajes.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
paisajes.forEach((paisaje) => {
	paisaje.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			paisajess.forEach(paisaje => paisaje.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	paisaje.forEach(paisajes => paisaje.classList.remove('hover'));
});