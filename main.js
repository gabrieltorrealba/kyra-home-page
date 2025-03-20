
const imagenes = [
    "./assets/img/kyra1.jpg",
    "./assets/img/kyra2.jpg",
    "./assets/img/kyra4.jpg",
    "./assets/img/kyra5.jpg",
    "./assets/img/kyra3.jpg",
    "./assets/img/kyra11.jpg",
    "./assets/img/kyra16.jpg",
    "./assets/img/kyra15.jpg",
    "./assets/img/kyra12.jpg",
    "./assets/img/kyra10.jpg",
    "./assets/img/kyra7.jpg",
    "./assets/img/kyra8.jpg",
];

const albumContainer = document.getElementById("album-container");
const NUM_IMAGENES_INICIALES = 8;

// Función para obtener imágenes aleatorias sin repetir
const obtenerImagenesAleatorias = () => {
    let seleccionadas = [];
    let copiaArray = [...imagenes];

    for (let i = 0; i < NUM_IMAGENES_INICIALES; i++) {
        let indice = Math.floor(Math.random() * copiaArray.length);
        seleccionadas.push(copiaArray.splice(indice, 1)[0]);
    }
    return seleccionadas;
};

// Función para cargar imágenes con animación inicial
const cargarImagenes = () => {
    albumContainer.innerHTML = "";
    const imagenesMostradas = obtenerImagenesAleatorias();

    imagenesMostradas.forEach((imagen, index) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = imagen;
        img.alt = "Kyra";

        div.appendChild(img);
        albumContainer.appendChild(div);

        // Aplicar animación de entrada con delay progresivo
        setTimeout(() => {
            img.classList.add("fade-in-initial");
        }, index * 300); // Cada imagen entra con un delay de 300ms

        // Iniciar cambios aleatorios de imágenes en tiempos diferentes
        cambiarImagenDinamicamente(img);
    });
};

// Función para cambiar cada imagen individualmente con animación suave
const cambiarImagenDinamicamente = (img) => {
    setInterval(() => {
        img.classList.add("fade-out"); // Aplica el efecto de desvanecimiento

        setTimeout(() => {
            let nuevaImagen;
            do {
                nuevaImagen = imagenes[Math.floor(Math.random() * imagenes.length)];
            } while (nuevaImagen === img.src); // Asegurar que la nueva imagen sea diferente

            img.src = nuevaImagen;

            setTimeout(() => {
                img.classList.remove("fade-out");
                img.classList.add("fade-in"); // Aparece suavemente
            }, 300);

        }, 700); // Tiempo total de la transición

    }, Math.floor(Math.random() * (6000 - 3000) + 3000)); // Cambia cada imagen entre 3 y 6 segundos
};

// Cargar imágenes con animación inicial
cargarImagenes();


//animacion del nombre 
document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector(".span-name");
    const nameText = nameElement.textContent;
    nameElement.textContent = ""; // Limpiar el contenido original

    nameText.split("").forEach((letter, index) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.classList.add("letter-animation"); // Se agrega una clase para los estilos

      setTimeout(() => {
        span.classList.add("visible"); // Se activa la animación
      }, index * 200);

      nameElement.appendChild(span);
    });
  });
  