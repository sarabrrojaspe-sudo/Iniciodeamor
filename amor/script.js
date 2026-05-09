
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container-low": "#1d1b20",
                    "on-tertiary-fixed-variant": "#594400",
                    "primary-fixed-dim": "#cfbcff",
                    "on-primary-fixed": "#22005d",
                    "on-secondary": "#342b4b",
                    "on-secondary-container": "#bfb2da",
                    "surface-container": "#211f24",
                    "on-primary": "#381e72",
                    "tertiary-fixed": "#ffdf93",
                    "surface-variant": "#36343a",
                    "secondary-container": "#4d4465",
                    "on-background": "#e6e0e9",
                    "on-primary-fixed-variant": "#4f378a",
                    "surface-container-highest": "#36343a",
                    "on-secondary-fixed-variant": "#4b4263",
                    "tertiary": "#e7c365",
                    "primary-fixed": "#e9ddff",
                    "secondary": "#cdc0e9",
                    "error": "#ffb4ab",
                    "on-tertiary-container": "#503d00",
                    "on-surface": "#e6e0e9",
                    "surface-tint": "#cfbcff",
                    "inverse-surface": "#e6e0e9",
                    "outline-variant": "#494551",
                    "on-error": "#690005",
                    "primary-container": "#6750a4",
                    "secondary-fixed": "#e9ddff",
                    "surface": "#141218",
                    "error-container": "#93000a",
                    "secondary-fixed-dim": "#cdc0e9",
                    "background": "#141218",
                    "on-tertiary": "#3e2e00",
                    "surface-bright": "#3b383e",
                    "surface-container-high": "#2b292f",
                    "outline": "#948e9c",
                    "surface-container-lowest": "#0f0d13",
                    "on-secondary-fixed": "#1f1635",
                    "on-primary-container": "#e0d2ff",
                    "on-error-container": "#ffdad6",
                    "primary": "#cfbcff",
                    "inverse-primary": "#6750a4",
                    "surface-dim": "#141218",
                    "on-surface-variant": "#cbc4d2",
                    "inverse-on-surface": "#322f35",
                    "on-tertiary-fixed": "#241a00",
                    "tertiary-container": "#c9a74d",
                    "tertiary-fixed-dim": "#e7c365"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "margin-mobile": "20px",
                    "margin-desktop": "64px",
                    "gutter": "24px",
                    "container-max-width": "800px",
                    "unit": "8px"
            },
            "fontFamily": {
                    "display-lg-mobile": ["ebGaramond"],
                    "body-md": ["plusJakartaSans"],
                    "headline-md": ["ebGaramond"],
                    "label-sm": ["plusJakartaSans"],
                    "body-lg": ["plusJakartaSans"],
                    "display-lg": ["ebGaramond"]
            },
            "fontSize": {
                    "display-lg-mobile": ["40px", {"lineHeight": "1.2", "fontWeight": "500"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "400"}],
                    "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "1.8", "letterSpacing": "0.01em", "fontWeight": "300"}],
                    "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "500"}]
            }
          },
        },
      }
  // ==========================
// BOTON "ABRIR SORPRESA"
// ==========================

const botonSorpresa = document.querySelector('a[href="#letter"]');

botonSorpresa.addEventListener("click", () => {
    alert("Prepárate para leer algo muy especial ❤️");
});


// ==========================
// ICONO FAVORITO
// ==========================

const corazon = document.querySelector('[data-icon="favorite"]');

corazon.addEventListener("click", () => {
    alert("Te amo muchísimo ❤️");
});


// ==========================
// ICONO MUSICA
// ==========================

const musica = document.querySelector('[data-icon="music_note"]');

musica.addEventListener("click", () => {
    alert("Aquí puedes agregar una canción romántica 🎵");
});


// ==========================
// GALERIA POLAROID
// ==========================

const fotos = document.querySelectorAll(".polaroid");

fotos.forEach((foto, index) => {
    foto.addEventListener("click", () => {

        const mensajes = [
            "Nuestro momento favorito ❤️",
            "Ese día fue mágico ✨",
            "Quiero repetir ese momento contigo 💕"
        ];

        alert(mensajes[index]);
    });
});


// ==========================
// QUIZ INTERACTIVO
// ==========================

const respuestas = document.querySelectorAll(".space-y-4 button");

respuestas.forEach((boton, index) => {

    boton.addEventListener("click", () => {

        respuestas.forEach(btn => {
            btn.classList.remove(
                "bg-green-500",
                "border-green-500",
                "bg-red-500",
                "border-red-500"
            );
        });

        // RESPUESTA CORRECTA
        if (index === 1) {

            boton.classList.add(
                "bg-green-500",
                "border-green-500"
            );

            alert("Correcto ❤️ ¡Sí recuerdas nuestra cita!");

        } else {

            boton.classList.add(
                "bg-red-500",
                "border-red-500"
            );

            alert("Ups 😅 esa no era");
        }

    });

});


// ==========================
// BOTON SHARE
// ==========================

const share = document.querySelector('[data-icon="share"]');

share.addEventListener("click", () => {

    navigator.clipboard.writeText(window.location.href);

    alert("Link copiado ❤️");
});


// ==========================
// BOTON DOWNLOAD
// ==========================

const download = document.querySelector('[data-icon="download"]');

download.addEventListener("click", () => {

    alert("Aquí puedes agregar descarga de fotos o carta 💌");

});


// ==========================
// BOTTOM NAVIGATION
// ==========================

const navItems = document.querySelectorAll("nav.fixed.bottom-8 div");

navItems[0].addEventListener("click", () => {
    document.querySelector("#letter").scrollIntoView({
        behavior: "smooth"
    });
});

navItems[1].addEventListener("click", () => {
    document.querySelector(".polaroid").scrollIntoView({
        behavior: "smooth"
    });
});

navItems[2].addEventListener("click", () => {
    document.querySelector(".space-y-24").scrollIntoView({
        behavior: "smooth"
    });
});

navItems[3].addEventListener("click", () => {
    document.querySelector(".bg-surface-container-high\\/30").scrollIntoView({
        behavior: "smooth"
    });
});


// ==========================
// EFECTO DE ENTRADA
// ==========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1.5s";
        document.body.style.opacity = "1";
    }, 100);

});