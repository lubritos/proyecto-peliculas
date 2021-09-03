const noticiasRecientes = [
    {
        imagen:'./imagenes/noticias-1.jpg',
        titulo:'"Better Call Saul" Writer Offers Advice',
        fecha:'December 26, 2018',
        descripcion:'Better Call Saul” writer Gennifer Hutchison offered some advice to Jason Blum after the Blumhouse Productions chief said in an interview that he’s “trying” to hire a woman..'


    },
    {
        imagen:'./imagenes/noticias-2.jpg',
        titulo:'"Single Parents" Lands Full-Season Order From ABC',
        fecha:'December 26, 2018',
        descripcion:'ABC has given a full-season order to the freshman comedy “Single Parents.” Three episodes into its run, the comedy created..'
    },

    {
        imagen:'./imagenes/noticias-3.jpg',
        titulo:'"Animals" canceled After Three Seasons at HBO',
        fecha:'December 26, 2018',
        descripcion:'HBO has canceled the animated series “Animals” after three seasons, Variety has confirmed. The series was created by executive producers Phil Matarese and Mike Luciano..'
    }

]

const contenedorNoticias = document.getElementById('noticias');

const cardNoticias = (noticias) => {
    return `<div class="card m-3" style="width: 18rem;">
                <img src="${noticias.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${noticias.titulo}</h5>
                    <span class="card-text">${noticias.fecha}</span>
                    <p>${noticias.descripcion}</p>
                </div>
            </div>`;
}
let html3 = '';
for (let i = 0; i < noticiasRecientes.length; i++) {
    html3 +=  cardNoticias(noticiasRecientes[i]);
}
contenedorNoticias.innerHTML = html3;