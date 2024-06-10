const botaoAbrir = document.getElementById('open');
const botaoFechar = document.getElementById('close');
const navAberta = document.getElementById('menu');
const a = document.querySelectorAll('#menu ul li a')


function abrirMenu() {
  // Adiciona a classe de animação de entrada ao abrir o menu
  navAberta.classList.add('animacao-entrada');
   
  navAberta.classList.remove('animacao-saida');  
      
  // Exibe o menu
  navAberta.style.display = 'block';
  // Exibe o botão de fechar
  botaoFechar.style.display = 'block';
  // Oculta o botão de abrir
  botaoAbrir.style.display = 'block';  
}

function fecharMenu() {
  // Adiciona a classe de animação de saída ao fechar o menu
  
  navAberta.classList.remove('animacao-entrada');
  
  navAberta.classList.add('animacao-saida');  
  
  // Espere um curto período de tempo para permitir que a animação seja concluída antes de esconder o menu
  setTimeout(() => {
    // Oculta o menu após a animação ser concluída
    navAberta.style.display = 'none';
    // Remove a classe de animação para que ela possa ser reaplicada quando o menu for aberto novamente
    navAberta.classList.remove('animacao-saida');
  }, 1000); // Tempo em milissegundos, ajuste conforme a duração da sua animação
}



// Adiciona um ouvinte de evento de clique ao botão de abrir
botaoAbrir.addEventListener('click', abrirMenu);

// Adiciona um ouvinte de evento de clique ao botão de fechar
botaoFechar.addEventListener('click', fecharMenu);

// Define o estado inicial dos botões
botaoFechar.style.display = 'none';




// Selecione todos os links dentro da lista
const links = document.querySelectorAll('nav ul li a');

// Adicione um ouvinte de evento de clique a cada link
links.forEach(link => {
    link.addEventListener('click', () => {
        // Acesse o elemento pai do link clicado e altere o estilo de exibição para 'none'
        menu.style.display = 'none';
    });
});




/*


- Ao clicar no botão para abrir o menu (`botaoAbrir`), a função `abrirMenu()` é chamada.
- Dentro da função `abrirMenu()`, a classe `animacao-entrada` é adicionada ao elemento `navAberta`, que representa o menu.
- Além disso, a classe `animacao-saida` é removida para garantir que a animação de saída não seja aplicada ao abrir o menu.
- O menu é exibido e os botões são ajustados conforme necessário.

- Ao clicar no botão para fechar o menu (`botaoFechar`), a função `fecharMenu()` é chamada.
- Dentro da função `fecharMenu()`, a classe `animacao-saida` é adicionada ao elemento `navAberta`, que representa o menu.
- Além disso, a classe `animacao-entrada` é removida para garantir que a animação de entrada não seja aplicada ao fechar o menu.
- Após um breve intervalo de tempo, o menu é oculto e a classe `animacao-saida` é removida para que a animação possa ser aplicada novamente quando o menu for aberto no futuro.

Essa abordagem deve garantir que as animações sejam aplicadas corretamente ao abrir e fechar o menu. Se estiver funcionando conforme o esperado em sua página, então está correto.



*/



