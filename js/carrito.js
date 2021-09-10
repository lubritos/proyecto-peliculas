let peliculasGuardadas = localStorage.getItem('carrito');
    peliculasGuardadas = JSON.parse(peliculasGuardadas);
let carrito = peliculasGuardadas || [];

const agregarCarrito = (pelicula) => {
    carrito.push(pelicula);
    actualizarCarrito(carrito);
    saveStorage(carrito);
    showToast('Pelicula Agregada');
    cargarProductos(document.getElementById('peliculas'));
    console.log('Pelicula agregada al carrito', pelicula);
};


function actualizarCarrito(listado) {
    const divCarrito = document.getElementsByClassName('carrito')[0];
    document.getElementById('carrito-contador').innerHTML = listado.length;
    let html2 = '';
    for (let i = 0; i < listado.length; i++) {
        html2 +=  `<div class="d-flex m-2 p-2 w-100 h-100 align-items-center justify-content-center">
                        <img src="${carrito[i].portada}" class="rounded mx-auto d-block" alt="" width="60">
                        <div class="d-flex flex-column m-3 descripcion-carrito">
                            <h5>${carrito[i].nombre}</h5>
                            <span>${carrito[i].precio}</span>
                            <span>${carrito[i].genero}</span>
                        </div>
                        <button onClick="vaciarCarrito('${i}')" class="btn btn-danger">Eliminar</button>
                    </div>
                    `;
    }
    divCarrito.innerHTML = `
    <div class="d-flex flex-column overflow-scroll">
        ${html2}
        <div class="acciones d-flex justify-content-between m-3">
            <button class="btn btn-warning text-white">Comprar</button>
            <button onClick="vaciarCarrito()" class="btn btn-danger">Vaciar</button>
        </div>
    </div>`;
}

const saveStorage = (loqueguardo) => {
    localStorage.setItem('carrito', JSON.stringify(loqueguardo));
}
const vaciarCarrito = (id) => {
    if (id){
        console.log('Eliminar', id);
        const carritoNuevo = carrito.filter((c,index) => index !== parseInt(id, 10) );
        saveStorage(carritoNuevo);
        carrito = carritoNuevo;
        actualizarCarrito(carritoNuevo);
    } else {
        const divCarrito = document.getElementsByClassName('carrito')[0];
        divCarrito.innerHTML = '';
        localStorage.removeItem('carrito');
        carrito = [];
        actualizarCarrito(carrito);
    }
    cargarProductos(document.getElementById('peliculas'));

}

const stockActual = (stock, nombre) => {
    const listado = carrito.filter(pelicula => pelicula.nombre === nombre);
    return stock - listado.length;
}
actualizarCarrito(carrito);
