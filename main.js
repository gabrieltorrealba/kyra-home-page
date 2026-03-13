const imagenes = [
    "./assets/img/kyra1.jpg",
    "./assets/img/kyra2.jpg",
    "./assets/img/kyra3.jpg",
    "./assets/img/kyra4.jpg",
    "./assets/img/kyra5.jpg",
    "./assets/img/kyra7.jpg",
    "./assets/img/kyra8.jpg",
    "./assets/img/kyra10.jpg",
    "./assets/img/kyra11.jpg",
    "./assets/img/kyra12.jpg",
    "./assets/img/kyra15.jpg",
    "./assets/img/kyra16.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
    cargarFotoPrincipal();
    cargarMiniGaleria();
});

const cargarFotoPrincipal = () => {
    const mainPhoto = document.getElementById("main-photo");
    const randomImg = imagenes[Math.floor(Math.random() * imagenes.length)];
    mainPhoto.src = randomImg;
};

const cargarMiniGaleria = () => {
    const gallery = document.getElementById("mini-gallery");
    const shuffled = [...imagenes].sort(() => 0.5 - Math.random());
    const select = shuffled.slice(0, 6);
    
    select.forEach((imgSrc, index) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `Foto ${index + 1} de Kyra`;
        img.onclick = () => {
            document.getElementById("main-photo").src = imgSrc;
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        img.onload = () => {
            setTimeout(() => {
                img.classList.add("loaded");
            }, index * 100);
        };
        gallery.appendChild(img);
    });
};
