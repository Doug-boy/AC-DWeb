const filtroContainer = document.createElement('div');
const pesquisaInput = document.createElement('input');
const pesquisaButton = document.createElement('button');

filtroContainer.style.textAlign = 'center';
pesquisaButton.innerHTML = 'Filtrar';
pesquisaButton.onclick = () => {
    atletasContainer.innerHTML = '';
    criarAtletas(filtrarAtletas(pesquisaInput.value));
};

filtroContainer.appendChild(pesquisaInput);
filtroContainer.appendChild(pesquisaButton);
document.body.appendChild(filtroContainer);

const atletasContainer = document.createElement('div');
document.body.appendChild(atletasContainer);

const preencherAtleta = (atleta) => {
    const container = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');

        
    imagem.style.borderRadius = '30px';

    container.style.fontFamily = 'sans-serif';
    container.style.width = '15em';
    container.style.textAlign = 'center';
    container.style.margin = '5em auto';
    container.style.padding = '1em';
    container.style.borderRadius = '10px';


    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    imagem.alt = `Imagem de ${atleta.nome}`;
    descricao.innerHTML = atleta.descricao;

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(descricao);

    atletasContainer.appendChild(container);
};

const criarAtletas = (entrada) => {
    for (let index = 0; index < entrada.length; index++) {
        preencherAtleta(entrada[index]);
    }
};

const filtrarAtletas = (texto) => {
    const listaFiltrada = atletas.filter((e) => {
        const nome = e.nome;
        const nomeMinusc = nome.toLowerCase();
        const textoMinusc = texto.toLowerCase();
        return nomeMinusc.includes(textoMinusc);
    });

    return listaFiltrada;
};

criarAtletas(filtrarAtletas('y'));
