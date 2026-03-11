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
