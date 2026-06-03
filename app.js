const btnMostrar = document.getElementById("btnMostrar");
const contenedor = document.getElementById("contenedor");
const estado     = document.getElementById("estado");
const subtitulo  = document.getElementById("subtitulo");
const log        = document.getElementById("log");

const recetas = [
    { nombre: "Arepas",        dificultad: "facil",   tiempo: "15 min", foto: "https://www.goya.com/wp-content/uploads/2023/10/arepas-cornmeal-patties.jpg" },
    { nombre: "Bandeja Paisa", dificultad: "dificil", tiempo: "60 min", foto: "https://recetasdecocina.elmundo.es/wp-content/uploads/2025/05/bandeja-paisa.jpg" },
    { nombre: "Sancocho",      dificultad: "media",   tiempo: "40 min", foto: "https://cdn7.kiwilimon.com/recetaimagen/38182/1200x600/48809.jpg.webp" },
    { nombre: "Empanadas",     dificultad: "facil",   tiempo: "20 min", foto: "https://images.cookforyourlife.org/wp-content/uploads/2018/01/Mushroom_empanadas-scaled.jpg" },
];

function mostrarLog(mensaje) {
    log.textContent = mensaje + " | " + new Date().toLocaleTimeString();
}

// Mostrar recetas
btnMostrar.addEventListener("click", function() {
    contenedor.innerHTML = "";
    estado.textContent = "Mostrando recetas...";

    recetas.forEach(function(receta) {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";

        tarjeta.innerHTML = `
            <img src="${receta.foto}" alt="${receta.nombre}">
            <h3>${receta.nombre}</h3>
            <p class="${receta.dificultad}">Dificultad: ${receta.dificultad}</p>
            <p>⏱️ Tiempo: ${receta.tiempo}</p>
        `;

        contenedor.appendChild(tarjeta);
    });

    estado.textContent = "¡" + recetas.length + " recetas cargadas!";
    mostrarLog("forEach + createElement + appendChild");
});

// getElementById — cambia el color del título
document.getElementById("demo-getId").addEventListener("click", function() {
    const titulo = document.getElementById("titulo");
    titulo.style.color = "#c0392b";
    mostrarLog("getElementById → cambié el color del título");
});

// querySelectorAll — destaca las recetas fáciles
document.getElementById("demo-queryAll").addEventListener("click", function() {
    const faciles = document.querySelectorAll(".facil");
    faciles.forEach(function(el) {
        el.closest(".tarjeta").classList.add("destacado");
    });
    mostrarLog("querySelectorAll → " + faciles.length + " recetas fáciles destacadas");
});