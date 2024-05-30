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