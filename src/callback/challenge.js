const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // llamado al metodo XMLHTTPRquest

const API = "https://api.escuelajs.co/api/v1"; // instanciando la api en una constante

function fetchData(urlApi, callback) {
  // la funcion recibe dos parametros, la url y el callback
  let xhttp = new XMLHttpRequest(); //

  xhttp.open("GET", urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readystate === 4) {
      // si el estado es "4. completado" ha completado la llamada
      if (xhttp.status === 200) {
        // pregunta si el servidor repsonde de manera correcta
        callback(null, JSON.parse(xhttp.responseText)); // recibimos lo que entrega el servidor en texto y se hace la transformacion a JSON
      } else {
        // en caso de que haya algun error
        const error = new Error("Error" + urlApi); // crea un nuevo erro r
        return callback(error, null); // regresara nulo porque no esta dando ningun dato
      }
    }
  }
  xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(
      `${API}/categories/${data2?.category.id}`,
      function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});

// 5 estados en un llamado XMLHttpRequest
// 0 → Se ha inicializado.
// 1 → Loading (cargando).
// 2 → Se ha cargado.
// 3 → Procesamiento si existe alguna descarga.
// 4 → Completado.

// metodos y propiedades
// xmlhttp.open() prepara la peticion para ser enviada tomando como parametros: protocolo, url, asincronismo (true, false).
// xmlhttp.readyState retorna el estadod e una peticion.
// xmlhttp.onreadystatechange es un manejador de eventos que se llama cuando la propiedad readystate cambia.
// xmlhttp.status retorna el estado http de la respuesta de la peticion 200,400,500
// xmlhttp.send() envia una peticion al servidor
