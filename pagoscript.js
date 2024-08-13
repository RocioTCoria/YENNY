
document.addEventListener("DOMContentLoaded", () => {
    const paymentForm = document.getElementById("payment-form");

    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const precio = document.getElementById("precio").value;
        const descuento = document.getElementById("descuento").value;
        const paymentMethod = document.getElementById("metodopago").value;

        if (!precio || !descuento || !paymentMethod) {
            alert("Por favor, complete todos los campos.");
        }
    });
});
