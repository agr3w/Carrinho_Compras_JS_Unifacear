let total = 0;
let contadorItens = 0; // Nova variável para contar os itens no carrinho

//função para adicionar item no carrinho
function adicionarCarrinho(titulo, preco) {
    const item = document.createElement("li");
    item.innerText = `${titulo} - R$ ${preco.toFixed(2)}`;

    //crio o botão que remove o item específico do nosso carrinho
    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover";
    botaoRemover.style.marginLeft = "10px";
    botaoRemover.onclick = function () {
        item.remove();
        total -= preco;
        contadorItens--;
        atualizarCarrinho();
    };

    item.appendChild(botaoRemover);
    document.getElementById("carrinho").appendChild(item);

    total += preco;
    contadorItens++;
    atualizarCarrinho();

}

//função que limpa o carrinho
function limparCarrinho() {
    // Pedir confirmação antes de limpar
    const confirmacao = confirm("Tem certeza de que deseja esvaziar o carrinho?");

    if (confirmacao) {
        document.getElementById("carrinho").innerHTML = "";
        total = 0;
        contadorItens = 0;
        atualizarCarrinho();
    }
}

// Nova função para centralizar a atualização do display do carrinho
function atualizarCarrinho() {
    document.getElementById("total").innerText = total.toFixed(2);
    document.getElementById("contador-itens").innerText = contadorItens;
}