const compras = $('#body-table');
const carrito = localStorage.getItem('carrito');
const pelisImprimidas = [];
let TotalCompra = 0;
JSON.parse(carrito).map(item => {
    const cant = JSON.parse(carrito).filter(peli => peli.title === item.title);
    const siExiste = pelisImprimidas.filter(peli => peli.title === item.title);
    if (!siExiste.length) {
        compras.append(`
            <tr class="d-flex align-items-center w-100 justify-content-center">
                <td class="d-flex align-items-center w-100 justify-content-left mx-3 my-2 p-2 producto">
                    <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="rounded mx-3 d-block" alt="" width="50"> 
                    ${item.title}
                </td>
                <td class="d-flex align-items-center w-100 justify-content-center mx-3 my-2 p-2">${item.precio}</td>
                <td class="d-flex align-items-center w-100 justify-content-center mx-3 my-2 p-2">${cant.length}</td>
                <td class="d-flex align-items-center w-100 justify-content-center mx-3 my-2 p-2">$${item.precio.replace('$','') * cant.length}</td>
            </tr>
        `);
        pelisImprimidas.push(item);
        TotalCompra +=item.precio.replace('$','') * cant.length;
    }
})

const total = $('#total-compra');
total.find('span').text('$'+TotalCompra);