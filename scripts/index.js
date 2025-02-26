<script>
document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const images = [
        "https://via.placeholder.com/1200x400?text=Promoção+1",
        "https://via.placeholder.com/1200x400?text=Promoção+2",
        "https://via.placeholder.com/1200x400?text=Promoção+3"
    ];
    const carouselImage = document.getElementById("carousel-image");
    
    function changeImage() {
        index = (index + 1) % images.length;
        carouselImage.src = images[index];
    }
    setInterval(changeImage, 3000);

    // Preencher o grid de pedidos
    const pedidos = [
        { nome: "Painel Tema Infantil", tamanho: "2x1,5m", imagem: "https://via.placeholder.com/200" },
        { nome: "Painel Tema Casamento", tamanho: "3x2m", imagem: "https://via.placeholder.com/200" },
        { nome: "Painel Temático", tamanho: "2,5x1,8m", imagem: "https://via.placeholder.com/200" }
    ];

    const grid = document.getElementById("grid-pedidos");
    pedidos.forEach(pedido => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded-xl shadow-lg border-2 border-purple-500 transform hover:scale-105 transition duration-300";
        card.innerHTML = `
            <img src="${pedido.imagem}" alt="${pedido.nome}" class="w-full rounded-lg mb-4">
            <h2 class="text-lg font-bold text-purple-700">${pedido.nome}</h2>
            <p class="text-gray-700">Tamanho: ${pedido.tamanho}</p>
            <button class="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition duration-300">Ver Detalhes</button>
            <a href="https://wa.me/seunumerowhatsapp" class="mt-2 block bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-400 transition duration-300">Pedir pelo WhatsApp</a>
        `;
        grid.appendChild(card);
    });
});
</script>