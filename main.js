
//section album
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
let delay = 200; // Retraso inicial en milisegundos

imagenes.forEach((imagen, index) => {
    setTimeout(() => {
        const div = document.createElement("div");
        div.innerHTML = `<img src="${imagen}" alt="Kyra" 
            class="h-auto max-w-full rounded-lg opacity-0 scale-90 transition-all duration-500 ease-in-out"
            style="animation: fadeIn 0.8s ease-out forwards;">`;
        albumContainer.appendChild(div);
    }, delay);
    delay += 400; // Incrementa el retraso para la siguiente imagen
});

//animacion del nombre 
document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector(".span-name");
    const nameText = nameElement.textContent;
    nameElement.textContent = ""; // Limpiar el contenido original
  
    nameText.split("").forEach((letter, index) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      span.style.display = "inline-block";
  
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * 200); // Retraso progresivo para cada letra
  
      nameElement.appendChild(span);
    });
  });