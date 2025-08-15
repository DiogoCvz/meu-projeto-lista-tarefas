function adicionarTarefa() {
    let input = document.getElementById("tarefa");
    let texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let lista = document.getElementById("lista");

    let item = document.createElement("li");
    item.textContent = texto;

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.classList.add("remover");
    botaoRemover.onclick = function() {
        lista.removeChild(item);
    };

    item.appendChild(botaoRemover);
    lista.appendChild(item);

    input.value = "";
}