
const artes = [
    { nome: "Painel Redondo 1", imagem: "images/image_2.jpeg", tamanhos: ["158x158", "100x100", "90x90", "60x60"], tecidos: ["Tactel", "Malha"] },
    { nome: "Painel Redondo 1", imagem: "images/image_3.jpeg", tamanhos: ["158x158", "100x100", "90x90", "60x60"], tecidos: ["Tactel", "Malha"] },
    { nome: "Painel Redondo 1", imagem: "images/image_4.jpeg", tamanhos: ["158x158", "100x100", "90x90", "60x60"], tecidos: ["Tactel", "Malha"] },
    { nome: "Painel Redondo 1", imagem: "images/image_5.jpeg", tamanhos: ["158x158", "100x100", "90x90", "60x60"], tecidos: ["Tactel", "Malha"] },
    { nome: "Painel Redondo 1", imagem: "images/image_6.jpeg", tamanhos: ["158x158", "100x100", "90x90", "60x60"], tecidos: ["Tactel", "Malha"] },
    { nome: "Painel Redondo 1", imagem: "images/image_7.jpeg", tamanhos: ["158x158", "100x100", "90x90", "60x60"], tecidos: ["Tactel", "Malha"] },
    { nome: "Painel Redondo 1", imagem: "images/image_8.jpeg", tamanhos: ["158x158", "100x100", "90x90", "60x60"], tecidos: ["Tactel", "Malha"] },
    { nome: "Painel Redondo 1", imagem: "images/image_9.jpeg", tamanhos: ["158x158", "100x100", "90x90", "60x60"], tecidos: ["Tactel", "Malha"] },
    { nome: "Painel Redondo 1", imagem: "images/image_10.jpeg", tamanhos: ["158x158", "100x100", "90x90", "60x60"], tecidos: ["Tactel", "Malha"] },
    { nome: "Painel Redondo 1", imagem: "images/image_11.jpeg", tamanhos: ["158x158", "100x100", "90x90", "60x60"], tecidos: ["Tactel", "Malha"] },
]

document.addEventListener("DOMContentLoaded", function () {

    const grid = document.getElementById("grid-pedidos");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.getElementById("close-modal");

    artes.forEach((pedido, index) => {

        let card = document.createElement("div");
        card.className = "bg-white p-4 rounded-xl shadow-lg border-2 border-purple-500 sm:w-full transform hover:scale-105 transition duration-300";
        card.innerHTML = `
            <img src="${pedido.imagem}" alt="${pedido.nome}" class="w-full rounded-lg mb-4">
            <h2 class="text-lg font-bold text-purple-700">${pedido.nome}</h2>
            <div class="grid ">
            <button class="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg h- hover:bg-orange-400 transition duration-300" onclick="openModal(${index})" >Ver Detalhes</button>
            
            </div>
         `;
        grid.appendChild(card);
    });


    window.openModal = function (index) {
        let arte = artes[index]
        let selectOptionsTamanho = arte.tamanhos.map(t => `<option value="${t}">${t}</option>`).join('');
        let selectOptionsTecido = arte.tecidos.map(t => `<option value="${t}">${t}</option>`).join('');
        modalContent.innerHTML = `
            <img src="${arte.imagem}" alt="${arte.nome}" class="w-1/2 block center rounded-lg mb-4">
            <h2 class="text-2xl font-bold text-purple-700">${arte.nome}</h2>
            <label class="block text-gray-700 mt-4">Escolha o Tecido:</label>
            <select id="select-tecido" class="mt-2 p-2 border rounded-lg w-full">${selectOptionsTecido}</select>
            <label class="block text-gray-700 mt-4">Escolha o Tamanho:</label>
            <select id="select-tamanho"  class="mt-2 p-2 border rounded-lg w-full">${selectOptionsTamanho}</select>
<button onclick="enviarPedido(${index}); closeModal.click();" class="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition duration-300">Enviar Pedido</button>
        `;
        modal.classList.remove("hidden");
    };

    closeModal.onclick = function () {
        modal.classList.add("hidden");
    };

    window.enviarPedido = function (index) {
        let pedido = artes[index]

        const tamanho = document.getElementById("select-tamanho").value;
        const tecido = document.getElementById("select-tecido").value;
        let mensagem = `Olá, gostaria de pedir o painel: ${pedido.nome}%0A `
        mensagem += `Tecido: ${tecido}%0A Tamanho: ${tamanho}%0A Tamanho: ${tamanho}`
        mensagem += `%0A Código:${pedido.imagem}%0A `
        window.open(`https://wa.me/5527995900071?text=${mensagem}`, '_blank');
    };

});

//             
/* <p class="text-gray-700">Tamanho: ${pedido.tamanho}</p> */