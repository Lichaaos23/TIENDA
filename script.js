function buscarProducto(){

let input = document.getElementById("buscador").value.toLowerCase();
let productos = document.getElementsByClassName("producto");

for(let i=0;i<productos.length;i++){

let titulo = productos[i].getElementsByTagName("h2")[0].innerText.toLowerCase();

if(titulo.includes(input)){
productos[i].style.display="";
}else{
productos[i].style.display="none";
}

}

}
let index = 0;
let slides = document.querySelectorAll(".slide");

function mostrarSlide(){

slides.forEach(slide=>{
slide.classList.remove("active");
});

index++;

if(index > slides.length-1){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(mostrarSlide,3000);
