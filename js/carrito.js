let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
    let productosCarritoDiv = document.getElementById('productos-carrito');
    let total = 0;
    productosCarritoDiv.innerHTML = ''; 

    if (carrito.length === 0) {
        productosCarritoDiv.innerHTML = '<p>Tu carrito está vacío.</p>';
        document.getElementById('total-carrito').textContent = total;
        return;
    }

    carrito.forEach((producto, index) => {
        total += producto.precio * producto.cantidad;

        let productoDiv = document.createElement('div');
        productoDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-3');
        productoDiv.innerHTML = `
            <div>
                <h5>${producto.nombre}</h5>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio: $${producto.precio}</p>
            </div>
            <div>
                <button class="btn btn-danger" onclick="eliminarProducto(${index})">Eliminar</button>
            </div>
        `;

        productosCarritoDiv.appendChild(productoDiv);
    });

    document.getElementById('total-carrito').textContent = total.toFixed(2);
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    loadCart(); 
}

function loadCart() {
    const tableBody = document.querySelector("#cartTable tbody");
    let total = 0;

    tableBody.innerHTML = '';

    if (carrito.length === 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="6">Tu carrito está vacío.</td>`;
        tableBody.appendChild(row);
        document.querySelector("#totalAmount").textContent = "0.00";
        return;
    }

    carrito.forEach((product, index) => {
        const subtotal = product.precio * product.cantidad;
        total += subtotal;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td> <!-- Número secuencial -->
            <td>${product.cantidad}</td>
            <td>${product.nombre}</td>
            <td>$${product.precio}</td>
            <td>$${subtotal}</td>
            <td><button class="btn btn-danger" onclick="eliminarProducto(${index})">Eliminar</button></td> <!-- Botón de eliminar -->
        `;
        
        tableBody.appendChild(row);
    });

    document.querySelector("#totalAmount").textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    loadCart(); 
});

localStorage.setItem('carrito', JSON.stringify(ejemploProductos));
