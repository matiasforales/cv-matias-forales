document.getElementById("boton").addEventListener("click",function(){
    console.log("hola mundo desde EventListener");
    document.getElementById("texto aclaratorio").innerHTML = "Por favor, se tolerante con los errores. ;)"
})

document.getElementById("boton_color").addEventListener("click",function(){
    document.body.style.backgroundColor = "#eff5f2";
})

document.getElementById("boton_default").addEventListener("click",function(){
    document.body.style.backgroundColor = "rgb(252, 247, 241)";
})

document.getElementById("boton_ocultar").addEventListener("click",function(){
    document.getElementById("texto aclaratorio").style.display = "none";
})

document.getElementById("boton_revelar").addEventListener("click",function(){
    document.getElementById("texto aclaratorio").style.display = "block";
})