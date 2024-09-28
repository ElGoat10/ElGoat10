document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensaje-error');
  
    formulario.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value.trim();
      const direccion = document.getElementById('direccion').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const soloNumeros = /^[0-9]+$/;
      const correo = document.getElementById('correo').value.trim();
      const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
      const imagen = document.getElementById('imagen').value.trim();
  
      mensajeError.textContent = '';
  
      if (!nombre && !direccion && !telefono && !correo && !fechaNacimiento && !imagen) {
        mensajeError.textContent = 'Debe llenar todos los campos.';
        return;
      }
  
      if (!nombre) {
        mensajeError.textContent = 'Debe ingresar su nombre.';
        return;
      }
  
      if (!direccion) {
        mensajeError.textContent = 'Debe ingresar su dirección.';
        return;
      }
  
      if (!telefono) {
        mensajeError.textContent = 'Debe ingresar su teléfono.';
        return;
      }

      if (!soloNumeros.test(telefono)) {
        mensajeError.textContent = 'El teléfono solo debe contener números.';
        return;
      }
  
      if (!correo) {
        mensajeError.textContent = 'Debe ingresar su correo electrónico.';
        return;
      }

      if (!formatoCorreo.test(correo)) {
        mensajeError.textContent = 'Por favor, ingrese un correo electrónico válido.';
        return;
      }
  
      if (!fechaNacimiento) {
        mensajeError.textContent = 'Debe ingresar su fecha de nacimiento.';
        return;
      }
  
      mensajeError.textContent = ''; 
      alert('Formulario enviado correctamente.');
    });
  });




document.getElementById('botonAgregar').addEventListener('click', function () {
    var contenedorFormulario = document.getElementById('contenedorFormulario');

    if (contenedorFormulario.style.display === 'none' || contenedorFormulario.style.display === '') {
        contenedorFormulario.style.display = 'block';
        setTimeout(() => {
            contenedorFormulario.classList.add('visible');
        }, 10);
    } else {
        contenedorFormulario.classList.remove('visible');
        setTimeout(() => {
            contenedorFormulario.style.display = 'none';
        }, 300); 
    }
}); 



document.addEventListener('DOMContentLoaded', function() {
    const ventanaFlotante = document.getElementById('ventanaFlotante');
    const iconosOjo = document.querySelectorAll('.icono-ojo');


    const contactos = {
        1: {
            nombre: "John Doe",
            direccion: "123 Calle Principal, Ciudad",
            telefono: "+1 234 567 890",
            correo: "john.doe@example.com",
            fechaNacimiento: "17/04/1980",
            foto: "img/perfil.jpg"
        },
        2: {
            nombre: "Jane Smith",
            direccion: "123 Calle Principal, Ciudad",
            telefono: "+1 234 567 890",
            correo: "john.doe@example.com",
            fechaNacimiento: "24/12/1999",
            foto: "img/perfil2.jpg"
        },
        3: {
            nombre: "Alice Johnson",
            direccion: "123 Calle Principal, Ciudad",
            telefono: "+1 234 567 890",
            correo: "john.doe@example.com",
            fechaNacimiento: "24/12/1999",
            foto: "img/perfil3.jpg"
        },
        4: {
            nombre: "Bob Williams",
            direccion: "123 Calle Principal, Ciudad",
            telefono: "+1 234 567 890",
            correo: "john.doe@example.com",
            fechaNacimiento: "24/12/1999",
            foto: "img/perfil4.jpg"
        },
        5: {
            nombre: "Emma Brown",
            direccion: "123 Calle Principal, Ciudad",
            telefono: "+1 234 567 890",
            correo: "john.doe@example.com",
            fechaNacimiento: "24/12/1999",
            foto: "img/perfil5.jpg"
        },
        6: {
            nombre: "Michael Davis",
            direccion: "123 Calle Principal, Ciudad",
            telefono: "+1 234 567 890",
            correo: "john.doe@example.com",
            fechaNacimiento: "24/12/1999",
            foto: "img/perfil6.jpg"
        },
        7: {
            nombre: "Olivia Wilson",
            direccion: "123 Calle Principal, Ciudad",
            telefono: "+1 234 567 890",
            correo: "john.doe@example.com",
            fechaNacimiento: "24/12/1999",
            foto: "img/perfil7.jpg"
        },
        8: {
            nombre: "Natanael Perez",
            direccion: "123 Calle Principal, Ciudad",
            telefono: "+1 234 567 890",
            correo: "john.doe@example.com",
            fechaNacimiento: "24/12/1999",
            foto: "img/perfil8.jpg"
        },
        9: {
            nombre: "Sophia Anderson",
            direccion: "123 Calle Principal, Ciudad",
            telefono: "+1 234 567 890",
            correo: "john.doe@example.com",
            fechaNacimiento: "24/12/1999",
            foto: "img/perfil9.jpg"
        },
        10: {
            nombre: "James Martinez",
            direccion: "123 Calle Principal, Ciudad",
            telefono: "+1 234 567 890",
            correo: "john.doe@example.com",
            fechaNacimiento: "24/12/1999",
            foto: "img/perfil10.jpg"
        },
   
    };

    iconosOjo.forEach(icono => {
        icono.addEventListener('click', function(e) {
            e.stopPropagation();
            const contactoId = this.getAttribute('data-contacto-id');
            mostrarDetallesContacto(contactoId);
        });
    });

    document.addEventListener('click', function() {
        ventanaFlotante.classList.remove('visible');
    });

    ventanaFlotante.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    function mostrarDetallesContacto(id) {
        const contacto = contactos[id];
        if (contacto) {
            document.getElementById('nombreContacto').textContent = contacto.nombre;
            document.getElementById('direccionContacto').textContent = contacto.direccion;
            document.getElementById('telefonoContacto').textContent = contacto.telefono;
            document.getElementById('correoContacto').textContent = contacto.correo;
            document.getElementById('fechaNacimientoContacto').textContent = contacto.fechaNacimiento;
            ventanaFlotante.querySelector('.foto-perfil-grande').src = contacto.foto;
            ventanaFlotante.classList.add('visible');
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const inputBusqueda = document.getElementById('inputBusqueda');
    const tarjetasContacto = document.querySelectorAll('.tarjeta-contacto');

    function buscarContactos() {
        const terminoBusqueda = inputBusqueda.value.toLowerCase();

        tarjetasContacto.forEach(tarjeta => {
            const nombreContacto = tarjeta.querySelector('.nombre-contacto').textContent.toLowerCase();
            if (nombreContacto.includes(terminoBusqueda)) {
                tarjeta.style.display = 'flex';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    }

    inputBusqueda.addEventListener('input', buscarContactos);
});
