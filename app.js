// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
    let nombresDeAmigos = document.getElementById("amigo").value;
    let lista = document.getElementById("listaAmigos");
    let nombreYaEnLista = nombres.find((x) => x === nombresDeAmigos)
    console.log(nombreYaEnLista);
    if(nombresDeAmigos === "" || nombresDeAmigos === Number || nombresDeAmigos === " ") {
        alert("El Nombre no puede estar vacío o contener números.")
    } else {
        if(nombresDeAmigos === nombreYaEnLista){
            alert("El nombre ya está en la lista.");
            limpiar();
        } else if (nombresDeAmigos) {
            nombres.push(nombresDeAmigos);
            let createLi = document.createElement("li");
            createLi.innerText = nombresDeAmigos;
            lista.appendChild(createLi);
        }
    }
    limpiar();
}



let limpiar = () => {
    document.getElementById("amigo").value = "";
}