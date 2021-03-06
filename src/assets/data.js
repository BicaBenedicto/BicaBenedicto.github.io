import pixelArt from '../images/projetos/pixels-art.png';
import todoList from '../images/projetos/to-do-list.png';
import trybewarts from '../images/projetos/trybewarts.png';
// import eCommerce from '../images/projetos/ecommerce-image.png';
import trybewallet from '../images/projetos/trybewallet.png';
import trybeTunes from '../images/projetos/trybetunes.png';
// import trivia from '../images/projetos/trivia-image.png';
import davsom from '../images/projetos/davsom.png';
import spotitrybe from '../images/projetos/spotitrybe.png';
import misteryLetter from '../images/projetos/mistery-letter.png';
import lessonsLearned from '../images/projetos/lessons-learned.png';
import shoppingCart from '../images/projetos/shopping-cart.png';
import colorGuess from '../images/projetos/color-guess.png';
import memeGenerator from '../images/projetos/meme-generator.png';
import netflixInterface from '../images/projetos/netflix-interface.png';
import codeImage from '../images/projetos/code.png';

const PROJETO_DESTAQUE = ['Store Manager', 'To do List', 'Trybewarts', 'SpotiTrybe', 'Trybewallet',
'React Testing Library', 'TrybeTunes', 'Davsom', 'Docker Todo List'];

export const PROJECTS = [
  {
    name: 'Pixel Art',
    image: pixelArt,
    technologies: ['html5', 'css3', 'javascript', 'git', 'github'],
    message: 'O projeto é um site de desenho, com algumas paletas de cores aleatórias que são geradas, podendo adicionar, remover ou alterar a cor das paletas conforme desejar, o quadro inicial é de 5 por 5, podendo chegar até 50 por 50 para fazer desenhos em pixel art da maneira que preferir.',
    site: '/projects/pixel-art/',
    rep: 'https://github.com/BicaBenedicto/pixel-art',
  },
  {
    name: 'To do List',
    image: todoList,
    technologies: ['html5', 'css3', 'javascript', 'git', 'github'],
    message: 'O projeto é uma lista de tarefas simples, onde pode adicionar, remover, marca, riscar, excluir e mover itens, além de poder salvar os itens em seu navegador para sempre que precisar pode acessar e conferir a sua lista.',
    site: '/projects/todo-list',
    rep: 'https://github.com/BicaBenedicto/todo-list',
  },
  {
    name: 'Trybewarts',
    image: trybewarts,
    technologies: ['html5', 'css3', 'javascript', 'git', 'github'],
    message: 'O projeto é um site de cadastro, onde você coloca as informações como nome, escola, tecnologias que deseja aprender, entre outras coisas e ao final é impresso uma carta com as informações.',
    site: '/projects/trybewarts/',
    rep: 'https://github.com/BicaBenedicto/trybewarts',
  },
  // {
  //   name: 'E-commerce',
  //   image: eCommerce,
  //   technologies: ['react', 'css3', 'reactRouter', 'redux', 'nodejs', 'typescript', 'express', 'git', 'github', 'mysql'],
//     message: 'Projeto desenvolvido como conclusão do Bootcamp de Front-End Developer do banco Inter, com um front-end que realiza a comunicação ao back-end e é gerenciado por um banco de dados.',
//     site: '',
//     rep: 'https://github.com/BicaBenedicto/ecommerce',
  // },
  {
    name: 'Trybewallet',
    image: trybewallet,
    technologies: ['react', 'css3', 'reactRouter', 'redux', 'git', 'github'],
    message: 'O projeto é um site de cambio, utilizando uma API que informa os valores do cambio para Real, sendo possivel anotar os gastos em diversas moedas, e o valor é convertido para Real Brasileiro, ficando salvo em seu navegador e utilizando o cambio no momento atual que realizou a adição.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/trybewallet',
  },
  {
    name: 'TrybeTunes',
    image: trybeTunes,
    technologies: ['react', 'css3', 'reactRouter', 'git', 'github'],
    message: 'O projeto é um site de música, onde é possivel escutar os primeiros 30 segundos de suas músicas favoritas, é utilizado a API do Itunes, com um simulador de sistema de login, podendo favoritas as músicas que mais gosta.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/trybetunes',
  },
  // {
  //   name: 'Trivia',
  //   image: trivia,
  //   technologies: ['react', 'css3', 'reactRouter', 'redux', 'git', 'github'],
//     message: 'O projeto é um jogo de perguntas e respostas, onde apenas 1 resposta é a correta, foi realizado em grupo de 5 pessoas utilizando uma API que traz as perguntas, ao iniciar o jogo você começa com o score de 0, e ao acertar as perguntas é somado a pontuação dependendo o nivel da pergunta (fácil, médio e díficil) e o tempo que levou para responder, ao final do jogo possui uma tele dos resultados informando a quantidade de acertos e a pontuação final, tambem possui uma tela de "Ranking" onde é possivel competir e ver quem acerta mais.',
//     site: '',
//     rep: 'https://github.com/BicaBenedicto/trivia-react-redux',
  // },
  {
    name: 'Davsom',
    image: davsom,
    technologies: ['react', 'css3', 'php'],
    message: 'Projeto realizado como trabalho freelancer de campanha publicitária de uma loja automotiva',
    site: 'https://davsom.com',
    rep: '',
  },
  {
    name: 'SpotiTrybe',
    image: spotitrybe,
    technologies: ['html5', 'css3', 'javascript', 'scrum', 'kanban', 'git', 'github'],
    message: 'Projeto realizado em grupo, utilizando metodologia Scrum e método Kanban, criação de site com API do Spotify, podendo selecionar músicas por categorias, pesquisar playlist ou álbuns e tocar os primeiros 30 segundos de sua música favorita (limitação da API)',
    site: '/projects/spotitrybe/',
    rep: 'https://github.com/BicaBenedicto/spotitrybe',
  },
  {
    name: 'Mistery Letter',
    image: misteryLetter,
    technologies: ['html5', 'css3', 'javascript', 'git', 'github'],
    message: 'Projeto que transforma frases em "imagens coladas" como recortes de jornal, utilizado para treinamento de Javascript, DOM e propriedades do Css',
    site: '/projects/mistery-letter/',
    rep: 'https://github.com/BicaBenedicto/mistery-letter',
  },
  {
    name: 'Lessons Learned',
    image: lessonsLearned,
    technologies: ['html5', 'css3', 'git', 'github'],
    message: 'Projeto de portfolio, uma página de apresentação sobre mim, utilizando Html e Css, quando iniciei o curso da Trybe.',
    site: '/projects/lessons-learned/',
    rep: 'https://github.com/BicaBenedicto/lessons-learned',
  },
  {
    name: 'Shopping Cart',
    image: shoppingCart,
    technologies: ['html5', 'css3', 'javascript', 'git', 'github'],
    message: 'Projeto é um site utilizando html, css e javascript, com requisição de api com o mercado livre, podendo ver produtos e adicionar ao carrinho.',
    site: '/projects/shopping-cart/',
    rep: 'https://github.com/BicaBenedicto/shopping-cart',
  },
  {
    name: 'Color Guess',
    image: colorGuess,
    technologies: ['html5', 'css3', 'javascript', 'git', 'github'],
    message: 'Projeto é um jogo de seleção de cores, onde é informado um código em RGB, e cores para selecionar a correta, adicionando pontos ao selecionar a cor certa e podendo aumentar a dificuldade.',
    site: '/projects/color-guess/',
    rep: 'https://github.com/BicaBenedicto/color-guess',
  },
  {
    name: 'Meme Generator',
    image: memeGenerator,
    technologies: ['html5', 'css3', 'javascript', 'git', 'github'],
    message: 'Projeto é uma página para criação de "memes", podendo fazer o upload de uma imagem e adicionar um texto nela.',
    site: '/projects/meme-generator/',
    rep: 'https://github.com/BicaBenedicto/meme-generator',
  },
  {
    name: 'Netflix Interface',
    image: netflixInterface,
    technologies: ['html5', 'css3', 'javascript', 'git', 'github'],
    message: 'Projeto é uma página com a interface do Netflix, com aparência similar e utilizando API de filmes para os gêneros.',
    site: '/projects/Netflix-Interface/',
    rep: 'https://github.com/BicaBenedicto/Netflix-Interface',
  },
  {
    name: 'Docker Todo List',
    image: codeImage,
    technologies: ['docker', 'git', 'github'],
    message: 'Projeto de unificação de Front-end, Back-end e testes, utilizando o Docker em aplicação já pronta.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/docker-todo-list',
  },
  {
    name: 'Jest',
    image: codeImage,
    technologies: ['jest','javascript', 'git', 'github'],
    message: 'Testes unitários para código já criado anteriormente com testes assíncronos e mockagem de resultados utilizando o Jest.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/jest',
  },
  {
    name: 'Js Unit Tests',
    image: codeImage,
    technologies: ['jest','javascript', 'git', 'github'],
    message: 'Códigos em javascript completando pequenos desafios com testes unitários com implementação de testes unitários em códigos já feitos.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/js-unit-tests',
  },
  {
    name: 'MySql All for One',
    image: codeImage,
    technologies: ['mysql', 'git', 'github'],
    message: 'Resolução de desafios em interação com banco de dados utilizando Mysql.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/mysql-all-for-one',
  },
  {
    name: 'MySql One for All',
    image: codeImage,
    technologies: ['mysql', 'git', 'github'],
    message: 'Resolução de desafios em interação, manipulação e criação de banco de dados utilizando Mysql.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/mysql-one-for-all',
  },
  {
    name: 'Playground Functions',
    image: codeImage,
    technologies: ['javascript', 'git', 'github'],
    message: 'Códigos em javascript completando diversos desafios.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/playground-functions',
  },
  {
    name: 'React Testing Library',
    image: codeImage,
    technologies: ['testingLibrary', 'git', 'github'],
    message: 'Realização de testes unitário com RTL em aplicação React já pronta.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/react-testing-library',
  },
  {
    name: 'Store Manager',
    image: codeImage,
    technologies: ['nodejs', 'expressjs', 'mochajs', 'sinonjs', 'chaijs', 'jest', 'git', 'github', 'mysql'],
    message: 'Criação de API, utilizando Node.js e a biblioteca Express, para gerenciamento de vendas e produtos, com diversas rotas para o gerenciamento e validações. Com testes unitários',
    site: '',
    rep: 'https://github.com/BicaBenedicto/store-manager',
  },
  {
    name: 'Talker Manager',
    image: codeImage,
    technologies: ['nodejs', 'expressjs', 'git', 'github', 'mysql'],
    message: 'Criação de API utilizando Node.js e Express com middlewares de validação e tratamento de erro e manipulação de arquivos e leitura.',
    site: '',
    rep: 'https://github.com/BicaBenedicto/talker-manager',
  },
  {
    name: 'Teste de conhecimento',
    image: codeImage,
    technologies: ['javascript', 'git', 'github', 'mysql'],
    message: 'Questões de lógica e desafios diversos, manipulação de arquivos, tratamento, filtro, entre diversos outros',
    site: '',
    rep: 'https://github.com/BicaBenedicto/teste-de-conhecimento',
  },
  {
    name: 'Zoo Functions',
    image: codeImage,
    technologies: ['jest','javascript', 'git', 'github'],
    message: 'Códigos em javascript completando pequenos desafios com testes unitários e funções',
    site: '',
    rep: 'https://github.com/BicaBenedicto/zoo-functions',
  },
  {
    name: 'Blogs API',
    image: codeImage,
    technologies: ['nodejs', 'expressjs', 'sequelizejs', 'jwt', 'git', 'github'],
    message: 'Back-end criação de API de Blog, com token e validação de tokens, criação de usuário, post, categorias, utilizando o Node.js, Express, Sequelize e JWT',
    site: '',
    rep: 'https://github.com/BicaBenedicto/blogs-api',
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((item) => PROJETO_DESTAQUE.some((name) => item.name === name));
