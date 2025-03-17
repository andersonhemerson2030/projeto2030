document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("amigo");
    const addButton = document.querySelector(".button-add");
    const nameList = document.getElementById("listaAmigos");
    const drawButton = document.querySelector(".button-draw");
    const resultDisplay = document.getElementById("resultado");
    
    let names = [];

    addButton.addEventListener("click", adicionarAmigo);
    drawButton.addEventListener("click", sortearAmigo);

    function adicionarAmigo() {
        const name = nameInput.value.trim();
        if (name === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }
        
        names.push(name);
        nameInput.value = "";
        updateNameList();
    }

    function sortearAmigo() {
        if (names.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * names.length);
        const secretFriend = names[randomIndex];
        resultDisplay.innerHTML = `<li>O amigo secreto é: <strong>${secretFriend}</strong></li>`;
    }

    function updateNameList() {
        nameList.innerHTML = "";
        names.forEach(name => {
            const listItem = document.createElement("li");
            listItem.textContent = name;
            nameList.appendChild(listItem);
        });
    }
});
