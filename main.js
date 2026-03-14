function exibirBooks(books) {
  const caixaConteudo = document.querySelector('#principal');
  caixaConteudo.innerHTML = "";

  books.forEach((book) => {
  
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
    exibirBooks(books);
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
  const livrosFiltrados = json['livros'].filter(book => 
    book.autor.toLowerCase().includes(termoBusca) || 
    book.titulo.toLowerCase().includes(termoBusca)
  );
  exibirBooks(livrosFiltrados);
});

window.onload = () => {
  const books = json['livros'];
  exibirBooks(books);
};


