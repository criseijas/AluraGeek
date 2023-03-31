const getProducts = (fileImagen, categoria, nombre_prod, precio_prod, id) => {
    const card = document.createElement("div");
  
    const contenido = `
    <div class="productos_all">
    <a class="link_producto" href="./descripcion_productos.html?id=${id}&categoria=${categoria}">
    <div class="bng_box">
    <img class="img" src="${fileImagen}" alt="${nombre_prod}">
    </div>
    <div>
      <ul>
        <li class="nombre_producto">${nombre_prod}</li>
        <li class="precio_producto">${precio_prod}</li>
        <li>Ver producto</li>
      </ul>   
    </div>
    </a>
 </div>
      `;
    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
  };
  
  const productos = document.querySelector("[data-allProducts]");
  
  productos.addEventListener("click", async (evento) => {
    let deleteButton = evento.target.className === "deleteImage";
    if (deleteButton) {
      const producto = evento.target.closest("[data-id]");
      let id = producto.dataset.id;
      productoServices
        .deleteProducto(id)
        .then((res) => {
          producto.remove();
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  });
  
  const render = async () => {
    try {
      const listaProductos = await productoServices.listaProductos();
  
      listaProductos.forEach((producto) => {
        productos.appendChild(
          getProducts(
            producto.name,
            producto.price,
            producto.imageUrl,
            producto.id
          )
        );
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  render();