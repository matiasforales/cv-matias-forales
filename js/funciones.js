document.getElementById("boton").addEventListener("click",function(){
    document.getElementById("texto aclaratorio").innerHTML = "Por favor, se tolerante con los errores. ;)"
})

document.getElementById("boton_volver").addEventListener("click",function(){
    document.getElementById("texto aclaratorio").innerHTML = "Hola, estoy aprendiendo JavaScript."
})

document.getElementById("boton_ocultar").addEventListener("click",function(){
    document.getElementById("texto aclaratorio").style.display = "none";
})

document.getElementById("boton_revelar").addEventListener("click",function(){
    document.getElementById("texto aclaratorio").style.display = "block";
})

document.getElementById("boton_color").addEventListener("click",function(){
    document.body.style.backgroundColor = "#eff5f2";
})

document.getElementById("boton_default").addEventListener("click",function(){
    document.body.style.backgroundColor = "rgb(252, 247, 241)";
})

document.getElementById("boton_fecha").addEventListener("click",function(){
    document.getElementById("fecha_en_vivo").innerHTML=Date()
})