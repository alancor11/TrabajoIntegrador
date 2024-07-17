const nombre = document.getElementById("nombre")
const correo_electronico = document.getElementById("correo_electronico")
const genero = document.getElementById("genero")
const documental = document.getElementById("documental")
const comentario = document.getElementById("comentario")
const terminos = document.getElementById("terminos")

form.addEventListener("sumbit", e=>{
    e.preventDefault()
    if(nombre.value.length <3){
        alert("Nombre muy corto")
    }
})

const inputFile = document.getElementById('inputFile');
const selccionDeImagen = document.getElementById('selccionDeImagen');
const fileNameSpan = document.getElementById('fileName');

selccionDeImagen.addEventListener('click', () => {
  inputFile.click();
});

inputFile.addEventListener('change', function() {
  const fileName = this.value.split('\\').pop(); // Extract filename
  fileNameSpan.textContent = fileName ? fileName : 'Ningún archivo seleccionado'; // Handle empty selection
});

function validarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('correo_electronico').value;
  var genero = document.getElementById('genero').value;
  var documental = document.getElementById('documental').value;
  var comentario = document.getElementById('comentario').value;
  var terminos = document.getElementById('terminos').checked;

  
// Expresión regular para validar el formato de correo electrónico
var expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
// Verificar si los campos obligatorios están completos y el formato del correo electrónico es válido
if (nombreValor === '' || correoValor === '' || generoValor === '' || documentalValor === '' || comentarioValor === '' || !terminosAceptados) {
    alert('Por favor, complete todos los campos obligatorios y acepte los términos y condiciones.');
    return false;
} else if (!expresionCorreo.test(correoValor)) {
    alert('Por favor, ingrese una dirección de correo electrónico válida.');
    return false;
}

return true;
}

function validarFormulario() {
  // Para obtener los valores de los campos del formulario:
  var nombreValor = nombre.value;
  var correoValor = correo_electronico.value;
  var generoValor = genero.value;
  var documentalValor = documental.value;
  var comentarioValor = comentario.value;
  var terminosAceptados = terminos.checked;
}

document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Esto sirve para evitar que se recargue la página

  // Así es como podemos obtener los datos del formulario
  const formData = new FormData(event.target);

  // Y ahora, realizamos la solicitud POST usando Fetch
  fetch('https://ejemplo.com/api/endpoint', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('No se pudo procesar la solicitud');
      }
      return response.json(); 
  })
  .then(data => {
      console.log('Ésta es la respuesta del servidor', data);
      // Acá es donde se puede procesar la respuesta del servidor
  })
  .catch(error => {
      console.error('Lo sentimos, ha habido un error en la solicitud:', error);
      // Desde acá se maneja el error
  });
});

document.addEventListener('DOMContentLoaded', function() {
  cargarDatosUsuario(5); 
  function cargarDatosUsuario(nombre) {
      const usuario = {
          id: nombre,
          nombre: 'Claudio Juárez',
          email: 'claudio.juarez@yahoo.com'
      };

      document.getElementById('nombre').value = usuario.nombre;
      document.getElementById('correo_electronico').value = usuario.correo_electronico;
      document.getElementById('genero').value = usuario.genero;
      document.getElementById('documental').value = usuario.documental;
      document.getElementById('comentario').value = usuario.comentario;
  }

  document.getElementById('formModificarUsuario').addEventListener('submit', function(event) {
      event.preventDefault(); 

      const formData = new FormData(event.target);

      fetch('https://ejemplo.com/api/usuarios/modificar', {
          method: 'POST',
          body: formData
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Lo sentimos, ha habido un error al modificar el usuario');
          }
          return response.json(); 
      })
      .then(data => {
          console.log('Inserte su usuario modificado:', data);
          alert('El usuario ha sido modificado correctamente.');
      })
      .catch(error => {
          console.error('Lo sentimos, ha habido un error al modificar el usuario:', error);
          alert('Lo sentimos, ha habido un error al modificar el usuario.');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  cargarUsuarios();
});

function cargarUsuarios() {
  fetch('https://ejemplo.com/api/usuarios')
  .then(response => {
      if (!response.ok) {
          throw new Error('Ha ocurrido un error al obtener los usuarios');
      }
      return response.json();
  })
  .then(data => {
      console.log('Éstos son los usuarios obtenidos:', data);
      mostrarUsuarios(data); 
  })
  .catch(error => {
      console.error('Ha ocurrido un error al obtener los usuarios:', error);

  });
}

function mostrarUsuarios(usuarios) {
  const listaUsuarios = document.getElementById('listaDeUsuarios');


  listaUsuarios.innerHTML = '';


  usuarios.forEach(usuario => {
      const li = document.createElement('li');
      li.textContent = `${usuario.nombre} - ${usuario.correo_electronico}`;
      listaUsuarios.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  cargarUsuarios();
});

function cargarUsuarios() {
  fetch('https://ejemplo.com/api/usuarios')
  .then(response => {
      if (!response.ok) {
          throw new Error('Ha ocurrido un error al obtener los usuarios');
      }
      return response.json(); 
  })
  .then(data => {
      console.log('Éstos son los usuarios obtenidos:', data);
      mostrarUsuarios(data); 
  })
  .catch(error => {
      console.error('Ha ocurrido un error al obtener los usuarios:', error);
     
  });
}

function mostrarUsuarios(usuarios) {
  const listaUsuarios = document.getElementById('listaDeUsuarios');

  listaUsuarios.innerHTML = '';

  usuarios.forEach(usuario => {
      const li = document.createElement('li');
      li.textContent = `${usuario.nombre} - ${usuario.email}`;
      
      const botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.addEventListener('click', function() {
          eliminarUsuario(usuario.nombre);
      });
      
      li.appendChild(botonEliminar);
      listaUsuarios.appendChild(li);
  });
}

function eliminarUsuario(idUsuario) {
  fetch(`https://ejemplo.com/api/usuarios/${idUsuario}`, {
      method: 'DELETE'
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al eliminar el usuario');
      }
      return response.json(); 
  })
  .then(data => {
      console.log('Usuario eliminado:', data);
      
      alert('Usuario eliminado correctamente.');
      cargarUsuarios(); 
  })
  .catch(error => {
      console.error('Error al eliminar el usuario:', error);
      
      alert('Hubo un error al intentar eliminar el usuario.');
  });
}










