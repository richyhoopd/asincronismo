import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

// fetchData(`${API}/products`) // le decimos que traiga los productos del api
//     .then(res => res.json()) // que la respuesta la ponga en formato json
//     .then(products => { // si hay productos los va a mostrar en consola
//         console.log(products);
//     })
//     .then(() => {
//         console.log('hola') // si hay exito muestra un hola
//     })
//     .catch(err => console.log(err)); // si sale algun error lo va a capturar

fetchData(`${API}/products`)
    .then(res => res.json())
    .then(products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(res => res.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(res => res.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('si se pudo perrillo'))