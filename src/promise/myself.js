import fetch from "node-fetch";

const API = 'https://pokeapi.co/api/v2/';

function fetchData (apiUrl) {
    return fetch(apiUrl);
}

fetchData(`${API}/products`)
    .then(res => res.json())
    .then(pokemon => {
        console.log(pokemon)
        return fetchData(`${API}/pokemon/${pokemon[0].id}`)
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