const botaoAbrir = document.getElementById('open');
const botaoFechar = document.getElementById('close');
const navAberta = document.getElementById('menu');
const a = document.querySelectorAll('#menu ul li a')


// Função para abrir o menu
function abrirMenu() {
  navAberta.style.display = 'block';
  botaoFechar.style.display = 'block';
  botaoAbrir.style.display = 'block';
}

// Função para fechar o menu
function fecharMenu() {
  navAberta.style.display = 'none';
  botaoFechar.style.display = 'none';
  botaoAbrir.style.display = 'block';
 
}

// Adiciona um ouvinte de evento de clique ao botão de abrir
botaoAbrir.addEventListener('click', abrirMenu);

// Adiciona um ouvinte de evento de clique ao botão de fechar
botaoFechar.addEventListener('click', fecharMenu);

// Define o estado inicial dos botões
botaoFechar.style.display = 'none'; 

/*

forma maus curta 

const botaoMenu = document.getElementById('open');
const navAberta = document.getElementById('menu');

const toggleMenu = () => {
  navAberta.style.display = navAberta.style.display === 'none' ? 'block' : 'none';
};

botaoMenu.addEventListener('click', toggleMenu);

*/
