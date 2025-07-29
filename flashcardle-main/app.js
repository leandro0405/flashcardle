function criacartao (categoria, pergunta, resposta) {
let container = document.getElementById('container')
let cartao = document.createElement('article')
cartao.className = 'cartao'

cartao.innerHTML = `
<div class="cartao conteudo">
<h3>${categoria}</h3>
<div class="cartao__conteudo__pergunta">
<p>${pergunta}</p>
</div>
<div class="cartao__conteudo__resposta">
<p>${resposta}</p>
</div>
</div>
`
container.appendChild(cartao)

let respostaEstaVisivel = false;
function viracartao(){
respostaEstaVisivel = !respostaEstavisivel;
cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventListener("click", viracartao)
container.appendChild(cartao)
}