const livrosPorPagina = 10;
let paginaAtual = 1;
let intervaloAtual = 1;
const botoesPorIntervalo = 5;


window.onload = () => {
  const books = json['livros'];
  exibirBooks(books, paginaAtual);
};

function exibirBooks(books, pagina) {
  const caixaConteudo = document.querySelector('#principal');
  caixaConteudo.innerHTML = "";
  
  const inicio = (pagina - 1) * livrosPorPagina;
  const fim = inicio + livrosPorPagina;
  const livrosPagina = books.slice(inicio, fim);
  
  livrosPagina.forEach((book) => {
  
      const tituloPagina = document.querySelector('.tituloWeb');
      tituloPagina.innerHTML = " Página Principal | Biblioteca Rokusan";
  
    const meuDiv = document.createElement('div');
    meuDiv.classList.add('book');
    meuDiv.id = book.titulo.replace(/ /g, '_');

    const meuA1 = document.createElement('a');
    meuA1.href = '#';
    meuA1.addEventListener('click', () => exibirDetalhesbook(book));

    const meuImg = document.createElement('img');
    meuImg.classList.add('capa');
    meuImg.src = book.capa;
    meuImg.alt = "Capa do " + book.titulo;

    const meuA2 = document.createElement('a');
    meuA2.href = '#';
    meuA2.addEventListener('click', () => exibirDetalhesbook(book));

    const meuH3 = document.createElement('h3');
    meuH3.classList.add('titulo');
    meuH3.textContent = book.titulo;

    caixaConteudo.appendChild(meuDiv);
    meuDiv.appendChild(meuA1);
    meuA1.appendChild(meuImg);
    meuDiv.appendChild(meuA2);
    meuA2.appendChild(meuH3);
  });
  atualizarBotoesPaginação(books, pagina);
}

function atualizarBotoesPaginação(books, pagina) {
  const totalPaginas = Math.ceil(books.length / livrosPorPagina);
  const botoesPaginação = document.querySelector('#paginas');
  botoesPaginação.innerHTML = "";
  
  const inicioIntervalo = (intervaloAtual - 1) * botoesPorIntervalo + 1;
  const fimIntervalo = Math.min(intervaloAtual * botoesPorIntervalo, totalPaginas);
  
  const lista = document.createElement('ul');
  
  if (intervaloAtual > 1) {
    const elemento = document.createElement('li');
    const botaoAnterior = document.createElement('button');
    botaoAnterior.textContent = '<';
    botaoAnterior.classList.add('botaoPagina');
    botaoAnterior.addEventListener('click', () => {
      intervaloAtual--;
      atualizarBotoesPaginação(books, pagina);
    });
    botoesPaginação.appendChild(lista);
    lista.appendChild(elemento);
    elemento.appendChild(botaoAnterior);
  }
  
  for (let i = inicioIntervalo; i <= fimIntervalo; i++) {
    const elemento = document.createElement('li');
    const botao = document.createElement('button');
    botao.textContent = i;
    botao.classList.add('botaoPagina');
    botao.addEventListener('click', () => {
      paginaAtual = i;
      exibirBooks(books, i);
    });
    if (i === pagina) {
      botao.disabled = true;
    }
    lista.appendChild(elemento);
    elemento.appendChild(botao);
  }
  
  if (fimIntervalo < totalPaginas) {
    const elemento = document.createElement('li');
    const botaoProximo = document.createElement('button');
    botaoProximo.textContent = '>';
    botaoProximo.classList.add('botaoPagina');
    botaoProximo.addEventListener('click', () => {
      intervaloAtual++;
      atualizarBotoesPaginação(books, pagina);
    });
    lista.appendChild(elemento);
    elemento.appendChild(botaoProximo);
  }
  
  botoesPaginação.appendChild(lista);
}

// Função para exibir os detalhes do book
function exibirDetalhesbook(book) {
  const caixaConteudo = document.querySelector('#principal');
  caixaConteudo.innerHTML = "";

  const meuLink = document.createElement('a');
  meuLink.href = '#';
  meuLink.classList.add('seta-voltar')
  meuLink.textContent = '<-';
  meuLink.addEventListener('click', () => {
    const books = json['livros'];
    exibirBooks(books, paginaAtual);
  });
  
  const tituloPagina = document.querySelector('.tituloWeb');
  tituloPagina.innerHTML = book.titulo + " | Biblioteca Rokusan";
  
  caixaConteudo.appendChild(meuLink);

  const meuDiv1 = document.createElement('div');
  meuDiv1.classList.add('bordaConteudo');

  const meuDiv2 = document.createElement('div');
  meuDiv2.classList.add('conterImagem');

  const meuImg = document.createElement('img');
  meuImg.classList.add('capabook');
  meuImg.src = book.capa;
  meuImg.alt = "Capa do " + book.titulo;

  const meuP1 = document.createElement('p');
  meuP1.classList.add('infobook');
  meuP1.textContent = "Titulo : ";
  const meuB1 = document.createElement('b');
  meuB1.textContent = book.titulo;
  meuP1.appendChild(meuB1);

  const meuP2 = document.createElement('p');
  meuP2.classList.add('infobook');
  meuP2.textContent = "Autor : ";
  const meuB2 = document.createElement('b');
  meuB2.textContent = book.autor;
  meuP2.appendChild(meuB2);

  const meuP3 = document.createElement('p');
  meuP3.classList.add('infobook');
  meuP3.textContent = "Disponível: ";
  const meuB3 = document.createElement('b');
  meuB3.textContent = book.disponibilidade;
  meuP3.appendChild(meuB3);

  const meuP4 = document.createElement('p');
  meuP4.classList.add('infobook');
  meuP4.textContent = "N° de páginas : ";
  const meuB4 = document.createElement('b');
  meuB4.textContent = book.paginas;
  meuP4.appendChild(meuB4);

  const meuP5 = document.createElement('p');
  meuP5.classList.add('infobook');
  meuP5.textContent = "Estado : ";
  const meuB5 = document.createElement('b');
  meuB5.textContent = book.estado;
  meuP5.appendChild(meuB5);
  
  const meuP6 = document.createElement('p');
  meuP6.classList.add('infobook');
  meuP6.textContent = "Sinopse : ";
  const meuB6 = document.createElement('b');
  meuB6.textContent = book.sinopse;
  meuP6.appendChild(meuB6);
  
  const meuP7 = document.createElement('p');
  meuP7.classList.add('infobook');
  meuP7.textContent = "Ano : ";
  const meuB7 = document.createElement('b');
  meuB7.textContent = book.ano;
  meuP7.appendChild(meuB7);
  
  const meuP8 = document.createElement('p');
  meuP8.classList.add('infobook');
  meuP8.textContent = "Idioma : ";
  const meuB8 = document.createElement('b');
  meuB8.textContent = book.idioma;
  meuP8.appendChild(meuB8);
  
  
  caixaConteudo.appendChild(meuDiv1);
  meuDiv1.appendChild(meuDiv2);
  meuDiv2.appendChild(meuImg);
  meuDiv1.appendChild(meuP1);
  meuDiv1.appendChild(meuP2);
  meuDiv1.appendChild(meuP3);
  meuDiv1.appendChild(meuP4);
  meuDiv1.appendChild(meuP5);
  meuDiv1.appendChild(meuP8)
  meuDiv1.appendChild(meuP7);
  meuDiv1.appendChild(meuP6);
}

const inputBusca = document.getElementById('busca');
const botaoBuscar = document.getElementById('botaoBusca');
botaoBuscar.addEventListener('click', () => {
  const termoBusca = inputBusca.value.toLowerCase();
  livros = json['livros'].filter(book => book.autor.toLowerCase().includes(termoBusca) || book.titulo.toLowerCase().includes(termoBusca) );
  paginaAtual = 1;
  intervaloAtual = 1;
  exibirBooks(livros, paginaAtual);
});

