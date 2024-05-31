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















