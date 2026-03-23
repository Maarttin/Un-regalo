const imagenes = [
    {
        img: "pictures/Ramodetulipanes.png",
        mensaje:"Un ramo de tulipanes para ti, pequeña y hermosa criatura"
    },
    {
        img: "pictures/Ramoderosas.png",
        mensaje:"Un regalo adecuado para una persona tan especial como tú"
    },
    {
        img: "pictures/Ramodegirasoles.png",
        mensaje:"Pensé que te gustarían porque son bonitos y tú eres bonita"
    },
    {
        img: "pictures/Ramodeazucenas.png",
        mensaje:"Flores para alegrar tu día, espero que te gusten estas azucenas"
    },
    {
        img: "pictures/Ramodemargaritas.png",
        mensaje:"Tal vez tu día hoy fue largo, descansa un poco y disfruta de estas margaritas"
    },
    {
        img: "pictures/Ramodeorquideas.png",
        mensaje:"Un pequeño regalo para alegrar tu día, espero que te guste"
    }
     

];

let florActual = null;

document.getElementById("flower").addEventListener("click", function() {
    const numeroAleatorio = Math.floor(Math.random() * imagenes.length);
    florActual = imagenes[numeroAleatorio];

    const img = document.getElementById("flower-image");
    img.src = florActual.img;
    img.style.display = "block";

    const sobre = document.getElementById("btnsobre");
    sobre.style.display = "block";

    const mensaje =  document.getElementById("mensaje");
    mensaje.innerText="";
});

document.getElementById("btnsobre").addEventListener("click", function() {
    if (florActual) {
        document.getElementById("mensaje").innerText = florActual.mensaje;

        this.style.display = "none";
    }
});
