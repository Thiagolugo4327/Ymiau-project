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

// CREAR REDES SOCIALES

const tituloRedes = [...document.querySelectorAll("main h2")]
    .find(titulo =>
        titulo.textContent.trim() ===
        "Redes donde Ymiau sube videos o hace directos"
    );

if (tituloRedes) {

    const seccion = document.createElement("section");
    seccion.className = "redes-sociales";

    seccion.setAttribute("aria-label", "Redes sociales");

    const lista = document.createElement("div");
    lista.className = "lista-redes";

    paginas.forEach((pagina) => {

        const enlace = document.createElement("a");

        enlace.textContent = pagina.nombre;
        enlace.href = pagina.url;

        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";

        enlace.className =
            `enlace-plataforma ${pagina.clase}`;

        lista.appendChild(enlace);

    });

    seccion.appendChild(lista);

    tituloRedes.replaceWith(seccion);

}

// ===================================
// CURSOR PERSONALIZADO DE MINECRAFT
// ===================================

const tieneMouse = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
).matches;

if (tieneMouse) {

    // ESPADA PIXELADA

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

    const espada =
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(espadaSVG);

    // CABEZA DE YMIAU

    const cabezaYmiau =
        "https://mc-heads.net/avatar/yMiau/64";

    // CREAR CURSOR

    const cursor = document.createElement("img");

    cursor.className = "cursor-minecraft";
    cursor.src = espada;
    cursor.alt = "";

    cursor.setAttribute("aria-hidden", "true");

    document.body.appendChild(cursor);

    document.body.classList.add("cursor-personalizado");

    // MOVER CURSOR

    window.addEventListener("pointermove", (evento) => {

        cursor.style.left = evento.clientX + "px";
        cursor.style.top = evento.clientY + "px";

    });

    // PRESIONAR: APARECE LA CABEZA

    window.addEventListener("pointerdown", () => {

        cursor.src = cabezaYmiau;

        cursor.classList.add("cursor-cabeza");

    });

    // RESTAURAR ESPADA

    function restaurarEspada() {

        cursor.src = espada;

        cursor.classList.remove("cursor-cabeza");

    }

    window.addEventListener("pointerup", restaurarEspada);

    window.addEventListener("pointercancel", restaurarEspada);

    window.addEventListener("blur", restaurarEspada);

}
