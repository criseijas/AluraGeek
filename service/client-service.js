//GET
const listaProductos = () =>
  fetch("http://localhost:3000/producto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUnProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => {
    return respuesta.json();
  });
};