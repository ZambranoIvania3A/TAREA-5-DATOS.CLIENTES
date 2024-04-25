document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const Nombres = document.getElementById("nombres").value;
    const Apellidos = document.getElementById("apellidos").value;
    const cedula = document.getElementById("cedula").value;
    const telefono = document.getElementById("telefono").value;
    const Correo = document.getElementById("correo").value;


    // Limpia el formulario después de enviarlo
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("cedula").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";

    alert("Cliente guardado con éxito.");
});