
const paginas = [
    {
        nombre: "YouTube",
        url: "https://www.youtube.com/",
        color: "#ff0000"
    },
    {
        nombre: "Twitch",
        url: "https://www.twitch.tv/",
        color: "#9146ff"
    },
    {
        nombre: "Kick",
        url: "https://kick.com/",
        color: "#53fc18"
    }
];

// Crear la sección de plataformas
const seccion = document.createElement("section");
seccion.className = "plataformas";

const titulo = document.createElement("h2");
titulo.textContent = "Plataformas de Ymiau";

const lista = document.createElement("div");
lista.className = "lista-plataformas";

// Crear los enlaces
paginas.forEach(pagina => {
    const enlace = document.createElement("a");

    enlace.textContent = pagina.nombre;
    enlace.href = pagina.url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";

    // Estilos básicos
    enlace.style.backgroundColor = pagina.color;
    enlace.style.color = "#ffffff";
    enlace.style.padding = "15px 25px";
    enlace.style.borderRadius = "12px";
    enlace.style.textDecoration = "none";
    enlace.style.fontWeight = "bold";

    lista.appendChild(enlace);
});

seccion.appendChild(titulo);
seccion.appendChild(lista);

// Añadir a la página
document.body.appendChild(seccion);
