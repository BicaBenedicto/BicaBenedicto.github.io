const PROJECTS = {
  'Pixel Art': {
    message: 'O projeto é um site de desenho, com algumas paletas de cores aleatórias que são geradas, podendo adicionar, remover ou alterar a cor das paletas conforme desejar, o quadro inicial é de 5 por 5, podendo chegar até 50 por 50 para fazer desenhos em pixel art da maneira que preferir.',
    site: 'https://bicabenedicto.github.io/pixel-art/',
    rep: 'https://github.com/BicaBenedicto/pixel-art',
  },
  'To do List': {
    message: 'O projeto é uma lista de tarefas simples, onde pode adicionar, remover, marca, riscar, excluir e mover itens, além de poder salvar os itens em seu navegador para sempre que precisar pode acessar e conferir a sua lista.',
    site: 'https://bicabenedicto.github.io/todo-list',
    rep: 'https://github.com/BicaBenedicto/todo-list',
  },
  Trybewarts: {
    message: 'O projeto é um site de cadastro, onde você coloca as informações como nome, escola, tecnologias que deseja aprender, entre outras coisas e ao final é impresso uma carta com as informações.',
    site: 'https://bicabenedicto.github.io/trybewarts/',
    rep: 'https://github.com/BicaBenedicto/trybewarts',
  },
  'E-commerce': {
    message: 'Projeto desenvolvido como conclusão do Bootcamp de Front-End Developer do banco Inter, com um front-end que realiza a comunicação ao back-end e é gerenciado por um banco de dados.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/ecommerce',
  },
  Trybewallet: {
    message: 'O projeto é um site de cambio, utilizando uma API que informa os valores do cambio para Real, sendo possivel anotar os gastos em diversas moedas, e o valor é convertido para Real Brasileiro, ficando salvo em seu navegador e utilizando o cambio no momento atual que realizou a adição.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/trybewallet',
  },
  TrybeTunes: {
    message: 'O projeto é um site de música, onde é possivel escutar os primeiros 30 segundos de suas músicas favoritas, é utilizado a API do Itunes, com um simulador de sistema de login, podendo favoritas as músicas que mais gosta.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/trybetunes',
  },
  Trivia: {
    message: 'O projeto é um jogo de perguntas e respostas, onde apenas 1 resposta é a correta, foi realizado em grupo de 5 pessoas utilizando uma API que traz as perguntas, ao iniciar o jogo você começa com o score de 0, e ao acertar as perguntas é somado a pontuação dependendo o nivel da pergunta (fácil, médio e díficil) e o tempo que levou para responder, ao final do jogo possui uma tele dos resultados informando a quantidade de acertos e a pontuação final, tambem possui uma tela de "Ranking" onde é possivel competir e ver quem acerta mais.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/trivia-react-redux',
  },
  Davsom: {
    message: '',
    site: 'https://davsom.com',
    rep: '',
  },
};

const removeProjectShow = (e) => {
  const projectDiv = e.target.classList.contains('project-show') ? e.target : e.target.closest('.project-show');
  if(projectDiv) {
    const main = document.querySelector('main');
    main.classList.remove('darkness');

    return projectDiv.remove();
  }
};

const projectMain = document.getElementById('project');

projectMain.addEventListener('click', (e) => {
  const projectDiv = e.target.classList.contains('project-div') ? e.target : e.target.closest('.project-div');
  if(projectDiv) {
    const main = document.querySelector('main');
    main.classList.add('darkness');

    const exit = document.createElement('h1');
    exit.innerText = 'X';
    exit.className = 'project-show-exit';
    exit.addEventListener('click', removeProjectShow);

    const link = projectDiv.firstElementChild.cloneNode(true);
    link.className = '';
    const img = projectDiv.lastElementChild.cloneNode(true);
    img.className = '';

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    const p = document.createElement('p');
    p.innerText = PROJECTS[link.innerText].message;

    const a1 = document.createElement('a');
    a1.innerText = 'Preview';
    a1.href = PROJECTS[link.innerText].site;
    a1.target = '_blank';

    const a2 = document.createElement('a');
    a2.innerText = 'Código';
    a2.href = PROJECTS[link.innerText].rep;
    a2.target = '_blank';

    const projectClone = document.createElement('div');
    projectClone.className = 'project-show';

    div1.appendChild(img);
    div2.appendChild(link);
    div2.appendChild(p);
    if(PROJECTS[link.innerText].site !== '') div2.appendChild(a1);
    if(PROJECTS[link.innerText].rep !== '') div2.appendChild(a2);
    projectClone.appendChild(div1);
    projectClone.appendChild(div2);
    projectClone.appendChild(exit);
    document.body.appendChild(projectClone);

    console.log(img);
    return console.log(link);
  };
});