document.addEventListener('DOMContentLoaded', function() {
    // Verificar que el botón existe
    const botonReserva = document.querySelector('[data-bs-target="#reservaModal"]');
    if (botonReserva) {
        console.log('encontrado');
    if(confirmarReserva){
        console.log('sirve')
    }
    }

    // Manejar la confirmación de reserva
    document.getElementById('confirmarReserva').addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const fecha = document.getElementById('fecha').value;
        const personas = document.getElementById('personas').value;
        
        if(nombre && email && fecha && personas) {
            const numeroReserva = Math.floor(100000 + Math.random() * 900000);
            
            const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            const detallesHTML = `
                <p><strong>Número de Reserva:</strong> #${numeroReserva}</p>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Fecha:</strong> ${fechaFormateada}</p>
                <p><strong>Número de personas:</strong> ${personas}</p>
                <hr>
                <p class="mb-0">Te hemos enviado un correo con los detalles de tu reserva.</p>
            `;
            
            document.getElementById('detallesReserva').innerHTML = detallesHTML;
            
            const modalReserva = bootstrap.Modal.getInstance(document.getElementById('reservaModal'));
            modalReserva.hide();
            
            const modalConfirmacion = new bootstrap.Modal(document.getElementById('confirmacionModal'));
            modalConfirmacion.show();
            
            document.getElementById('reservaForm').reset();
        } else {
            alert('Por favor, completa todos los campos');
        }
    });
});

