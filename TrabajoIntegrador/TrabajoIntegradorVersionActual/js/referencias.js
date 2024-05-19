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
