// Lista de citações
const citacoes = [
    "“Pequenos passos diários constroem grandes jornadas na programação.”",
    "“O código limpo é como uma boa poesia: claro, elegante e com propósito.”",
    "“A persistência é o caminho mais curto para dominar qualquer tecnologia.”",
    "“Dedique um tempo para criar coisas que tragam beleza e utilidade para o mundo.”",
    "“Cada erro de código é apenas uma lição de paciência rumo à sua evolução.”"
];

const botaoGerar = document.getElementById("btn-gerar");
const textoCitacao = document.getElementById("citacao");

function sortearCitacao() {
    const indiceAleatorio = Math.floor(Math.random() * citacoes.length);

    textoCitacao.textContent = citacoes[indiceAleatorio];
}

botaoGerar.addEventListener("click", sortearCitacao);