const Url = "https://botafogo-atletas.mange.li";
const numeroJogador = 54;

const adicionarElemento = (jogador) => {
    const elemento = document.createElement('div');
    const cabecalho = document.createElement('h2');
    const imagemJogador = document.createElement('img');
    const descricaoJogador = document.createElement('p');

    elemento.style.width = '30em';
 
    
    elemento.style.fontFamily = 'sans-serif';
    elemento.style.textAlign = 'center';
    elemento.style.color = 'black';
    elemento.style.margin = '30px auto';
    imagemJogador.style.borderRadius = '30px';



    cabecalho.innerText = jogador.nome;
    imagemJogador.src = jogador.imagem;
    imagemJogador.alt = `Imagem de ${jogador.nome}`;
    descricaoJogador.innerHTML = jogador.descricao;

    elemento.appendChild(cabecalho);
    elemento.appendChild(imagemJogador);
    elemento.appendChild(descricaoJogador);

    document.body.appendChild(elemento);
} 

const buscarDados = async (endereco) => {
    const resposta = await fetch(endereco);
    const dados = await resposta.json();
    return dados;
}

buscarDados(`${Url}/${numeroJogador}`).then(
    (resultado) => adicionarElemento(resultado)
);

console.log("Teste");
