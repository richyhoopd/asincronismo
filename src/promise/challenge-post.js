import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function sendData(urlApi, data) {
    const res = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return res;
}

const data = {
        "title": "Anus",
        "price": 999,
        "description": "A asdasdasdasd",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
}

sendData(`${API}/products`, data)
    .then(res => res.json())
    .then(data => console.log(data))