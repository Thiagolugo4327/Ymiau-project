
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
        nombre: "TikTok de Ymiau",
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

// Crear enlaces
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

document.querySelector("main").appendChild(seccion);


// ===================================
// CURSOR PERSONALIZADO DE MINECRAFT
// ===================================

// Espada pixelada
const espadaSVG = `
<svg xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 16 16"
shape-rendering="crispEdges">

    <path fill="#202020"
    d="M10 0h3v3h-2v2H9V3h1z
    M8 5h2v2H8z
    M6 7h2v2H6z
    M4 9h2v2H4z
    M2 11h2v2H2z
    M1 13h3v2H1z"/>

    <path fill="#d9f4ff"
    d="M11 1h1v2h-1z
    M9 4h2v2H9z
    M7 6h2v2H7z
    M5 8h2v2H5z
    M3 10h2v2H3z"/>

    <path fill="#8b5a2b"
    d="M4 11h2v2H4z
    M3 12h2v2H3z
    M2 13h2v2H2z"/>
</svg>
`;

const espada = "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(espadaSVG);

// Cabeza de la skin de yMiau
const cabezaYmiau = "https://mc-heads.net/avatar/yMiau/64";

// Crear cursor
const cursor = document.createElement("img");

cursor.className = "cursor-minecraft";
cursor.src = espada;
cursor.alt = "";

document.body.appendChild(cursor);

// Detectar dispositivos con mouse
const tieneMouse = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
).matches;

if (tieneMouse) {

    document.body.classList.add("cursor-personalizado");

    // Mover cursor
    window.addEventListener("pointermove", (evento) => {
        cursor.style.left = evento.clientX + "px";
        cursor.style.top = evento.clientY + "px";
    });

    // Al presionar: aparece la cabeza de yMiau
    window.addEventListener("pointerdown", () => {
        cursor.src = cabezaYmiau;
        cursor.classList.add("cursor-cabeza");
    });

    // Al soltar: vuelve la espada
    function restaurarEspada() {
        cursor.src = espada;
        cursor.classList.remove("cursor-cabeza");
    }

    window.addEventListener("pointerup", restaurarEspada);
    window.addEventListener("pointercancel", restaurarEspada);
    window.addEventListener("blur", restaurarEspada);
}
