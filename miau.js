const paginas = [
    {
        nombre: "YouTube de yMiau",
        url: "https://www.youtube.com/@yMiiau",
        clase: "youtube"
    },
    {
        nombre: "Discord de Ymiau",
        url: "https://discord.com/invite/vDUgZ5fGAm",
        clase: "discord"
    },
    {
        nombre: "Twitch de Ymiau",
        url: "https://www.twitch.tv/ymiaau",
        clase: "twitch"
    },
    {
        nombre: "X de Ymiau",
        url: "https://x.com/ymiaau",
        clase: "x"
    },
    {
        nombre: "Kick de Ymiau",
        url: "https://kick.com/ymiau",
        clase: "kick"
    },
    {
        nombre: "Tiktok de Ymiau",
        url: "https://www.tiktok.com/@ymiaau",
        clase: "tiktok"
    }
];

// Crear sección de redes sociales
const seccion = document.createElement("section");
seccion.className = "redes-sociales";

const titulo = document.createElement("h2");
titulo.textContent = "Redes donde Ymiau sube videos o hace directos";

const lista = document.createElement("div");
lista.className = "lista-redes";

// Crear enlaces dinámicamente
paginas.forEach((pagina) => {
    const enlace = document.createElement("a");

    enlace.textContent = pagina.nombre;
    enlace.href = pagina.url;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.className = `enlace-plataforma ${pagina.clase}`;

    lista.appendChild(enlace);
});

seccion.appendChild(titulo);
seccion.appendChild(lista);

document.body.appendChild(seccion);
