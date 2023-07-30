const pintarCarrito = () => {

modalContainer.innerHTML = "";
modalContainer.style.display = "flex";

const modalHeader = document.createElement("div");
modalHeader.className = "modal-header";
modalHeader.innerHTML = `
    <h1 class=".modal-header-title">Carrito</h1>
`;

modalContainer.append(modalHeader);
//crear boton
const modalBoton = document.createElement("H1");
modalBoton.innerText = "x";
modalBoton.className = "modal-header-button";
//salir del carrito
modalBoton.addEventListener("click", () => {
    modalContainer.style.display = "none";
})

modalHeader.append(modalBoton);

carrito.forEach((producto) => {
    let carritoContenido = document.createElement("div");
    carritoContenido.className = "modal-contenido";
    carritoContenido.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <span>${producto.categorias}</span>
    <p class="precio">${producto.precio} $</p>
    <p>Cantidad: ${producto.cantidad} </p>
    <p>Total: ${producto.cantidad * producto.precio}</p>
    <span class="borrar-producto">❌</span>
    `;

    modalContainer.append(carritoContenido);

    let eliminar = carritoContenido.querySelector(".borrar-producto")

    eliminar.addEventListener("click", () => {
        eliminarProducto(producto.id);
    })
});


const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const totalCompra = document.createElement("div");
totalCompra.className = "total-comprado";
totalCompra.innerHTML = `El total a pagar es: $${total}`;
modalContainer.append(totalCompra);

}


verCarrito.addEventListener("click",pintarCarrito);


const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);
    console.log(foundId);
    carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId

});
contador();
pintarCarrito();
saveLocal();
}

const contador = () => {
    cantidadCarrito.style.display ="block";
    const carritoLength = carrito.length
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};

contador();
