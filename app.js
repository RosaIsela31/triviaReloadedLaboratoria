
// Declarando la variable userName
let userName = localStorage.getItem("userName");

// Guardando el nombre del usuario
document.getElementById("saveName").addEventListener("click",function saveName() {
  /*Captura de datos escrito en los inputs*/   
 let nam = document.getElementById("name").value;
 /*Guardando los datos en el LocalStorage*/
 localStorage.setItem("userName",nam);
})


