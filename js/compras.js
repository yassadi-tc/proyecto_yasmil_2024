const compras = [
    { categoria: 'Ropa', producto: 'Camiseta', cantidad: 2, precio: 25.00 },
    { categoria: 'Ropa', producto: 'Jeans', cantidad: 1, precio: 40.00 },
    { categoria: 'Tecnología', producto: 'Smartphone', cantidad: 1, precio: 300.00 },
    { categoria: 'Artefactos', producto: 'Aspiradora', cantidad: 1, precio: 150.00 },
    { categoria: 'Tecnología', producto: 'Laptop', cantidad: 1, precio: 700.00 },
];

localStorage.setItem('compras', JSON.stringify(compras));
window.onload = function() {
    const compras = JSON.parse(localStorage.getItem('compras'));

    if (compras && compras.length > 0) {
        const comprasList = document.getElementById('comprasList');

        compras.forEach(compra => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${compra.categoria}</strong>: ${compra.producto} (Cantidad: ${compra.cantidad}) - $${compra.precio.toFixed(2)}
            `;
            comprasList.appendChild(li);
        });
    } else {
        const comprasList = document.getElementById('comprasList');
        const mensaje = document.createElement('li');
        mensaje.textContent = 'No has realizado compras aún.';
        comprasList.appendChild(mensaje);
    }
};