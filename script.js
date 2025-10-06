let total = 0;
let contadorItens = 0;

//função para adicionar item no carrinho
function adicionarCarrinho(titulo, preco) {
    // Cria um novo item na lista do carrinho, onde todos os elementos ficaram ancorados
    const item = document.createElement("li");
    item.innerText = `${titulo} - R$ ${preco.toFixed(2)}`;

    //crio o botão que remove o item específico do carrinho
    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover"; // Texto do botão
    botaoRemover.style.marginLeft = "10px"; // Estilo do botão
    botaoRemover.onclick = function () { // Função que remove o item do carrinho
        item.remove();
        total -= preco; // Atualiza o total
        contadorItens--; // Atualiza o contador de itens
        atualizarCarrinho();
    };

    item.appendChild(botaoRemover); // Adiciona o botão ao item do carrinho
    document.getElementById("carrinho").appendChild(item); // Adiciona o item à lista do carrinho

    total += preco;
    contadorItens++;
    atualizarCarrinho();

}

//função que limpa o carrinho
function limparCarrinho() {
    // Pedir confirmação antes de limpar
    const confirmacao = confirm("Tem certeza de que deseja esvaziar o carrinho?");

    // Se o usuário confirmar, esvazia o carrinho
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