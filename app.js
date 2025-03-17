// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    let nombres = [];

    function agregarAmigo() {
        let input = document.getElementById("amigo");
        let nombre = input.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresar un nombre válido para continuar.");
            return;
        }

        nombres.push(nombre);
        mostrarLista();
        input.value = "";
    }

    function mostrarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        for (let i = 0; i < nombres.length; i++) {
            let li = document.createElement("li");
            li.textContent = nombres[i];
            lista.appendChild(li);
        }
    }

    function sortearAmigo() {
        if (nombres.length === 0) {
            alert("La lista está vacía. Por favor agregue los nombres antes de sortear.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        let amigoSecreto = nombres[indiceAleatorio];

        document.getElementById("resultado").innerHTML = "Amigo Secreto: " + amigoSecreto;
    }

    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});