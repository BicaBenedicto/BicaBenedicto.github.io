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

const PROJETO_DESTAQUE = ['Pixel Art', 'To do List', 'Trybewarts', 'E-commerce', 'Trybewallet',
'TrybeTunes', 'Trivia', 'Davsom'];

export const PROJECTS = [
  {
    name: 'Pixel Art',
    image: pixelArt,
    technologies: ['html5', 'css3', 'javascript'],
    'Pixel Art': {
      message: 'O projeto é um site de desenho, com algumas paletas de cores aleatórias que são geradas, podendo adicionar, remover ou alterar a cor das paletas conforme desejar, o quadro inicial é de 5 por 5, podendo chegar até 50 por 50 para fazer desenhos em pixel art da maneira que preferir.',
      site: 'https://bicabenedicto.github.io/pixel-art/',
      rep: 'https://github.com/BicaBenedicto/pixel-art',
    },
  },
  {
    name: 'To do List',
    image: todoList,
    technologies: ['html5', 'css3', 'javascript'],
    'To do List': {
      message: 'O projeto é uma lista de tarefas simples, onde pode adicionar, remover, marca, riscar, excluir e mover itens, além de poder salvar os itens em seu navegador para sempre que precisar pode acessar e conferir a sua lista.',
      site: 'https://bicabenedicto.github.io/todo-list',
      rep: 'https://github.com/BicaBenedicto/todo-list',
    },
  },
  {
    name: 'Trybewarts',
    image: trybewarts,
    technologies: ['html5', 'css3', 'javascript'],
    Trybewarts: {
      message: 'O projeto é um site de cadastro, onde você coloca as informações como nome, escola, tecnologias que deseja aprender, entre outras coisas e ao final é impresso uma carta com as informações.',
      site: 'https://bicabenedicto.github.io/trybewarts/',
      rep: 'https://github.com/BicaBenedicto/trybewarts',
    },
  },
  // {
  //   name: 'E-commerce',
  //   image: eCommerce,
  //   technologies: ['react', 'css3', 'reactRouter', 'redux', 'nodejs', 'typescript', 'express'],
  //   'E-commerce': {
  //     message: 'Projeto desenvolvido como conclusão do Bootcamp de Front-End Developer do banco Inter, com um front-end que realiza a comunicação ao back-end e é gerenciado por um banco de dados.',
  //     site: '',
  //     rep: 'https://github.com/BicaBenedicto/ecommerce',
  //   },
  // },
  {
    name: 'Trybewallet',
    image: trybewallet,
    technologies: ['react', 'css3', 'reactRouter', 'redux'],
    Trybewallet: {
      message: 'O projeto é um site de cambio, utilizando uma API que informa os valores do cambio para Real, sendo possivel anotar os gastos em diversas moedas, e o valor é convertido para Real Brasileiro, ficando salvo em seu navegador e utilizando o cambio no momento atual que realizou a adição.',
      site: '/projects/trybewallet',
      rep: 'https://github.com/BicaBenedicto/trybewallet',
    },
  },
  {
    name: 'TrybeTunes',
    image: trybeTunes,
    technologies: ['react', 'css3', 'reactRouter'],
    TrybeTunes: {
      message: 'O projeto é um site de música, onde é possivel escutar os primeiros 30 segundos de suas músicas favoritas, é utilizado a API do Itunes, com um simulador de sistema de login, podendo favoritas as músicas que mais gosta.',
      site: '/projects/trybetunes',
      rep: 'https://github.com/BicaBenedicto/trybetunes',
    },
  },
  // {
  //   name: 'Trivia',
  //   image: trivia,
  //   technologies: ['react', 'css3', 'reactRouter', 'redux'],
  //   Trivia: {
  //     message: 'O projeto é um jogo de perguntas e respostas, onde apenas 1 resposta é a correta, foi realizado em grupo de 5 pessoas utilizando uma API que traz as perguntas, ao iniciar o jogo você começa com o score de 0, e ao acertar as perguntas é somado a pontuação dependendo o nivel da pergunta (fácil, médio e díficil) e o tempo que levou para responder, ao final do jogo possui uma tele dos resultados informando a quantidade de acertos e a pontuação final, tambem possui uma tela de "Ranking" onde é possivel competir e ver quem acerta mais.',
  //     site: '',
  //     rep: 'https://github.com/BicaBenedicto/trivia-react-redux',
  //   },
  // },
  {
    name: 'Davsom',
    image: davsom,
    technologies: ['react', 'css3'],
    Davsom: {
      message: 'Projeto realizado como trabalho freelancer de campanha publicitária de uma loja automotiva',
      site: 'https://davsom.com',
      rep: '',
    },
  },
  {
    name: 'SpotiTrybe',
    image: spotitrybe,
    technologies: ['html5', 'css3', 'javascript', 'scrum', 'kanban'],
    SpotiTrybe: {
      message: 'Projeto realizado em grupo, utilizando metodologia Scrum e método Kanban, criação de site com API do Spotify, podendo selecionar músicas por categorias, pesquisar playlist ou álbuns e tocar os primeiros 30 segundos de sua música favorita (limitação da API)',
      site: 'https://bicabenedicto.github.io/spotitrybe/',
      rep: 'https://github.com/BicaBenedicto/spotitrybe',
    },
  },
  {
    name: 'Mistery Letter',
    image: misteryLetter,
    technologies: ['html5', 'css3', 'javascript'],
    'Mistery Letter': {
      message: 'Projeto que transforma frases em "imagens coladas" como recortes de jornal, utilizado para treinamento de Javascript, DOM e propriedades do Css',
      site: 'https://bicabenedicto.github.io/mistery-letter/',
      rep: 'https://github.com/BicaBenedicto/mistery-letter',
    },
  },
  {
    name: 'Lessons Learned',
    image: lessonsLearned,
    technologies: ['html5', 'css3'],
    'Lessons Learned': {
      message: 'Projeto de portfolio, uma página de apresentação sobre mim, utilizando Html e Css, quando iniciei o curso da Trybe.',
      site: 'https://bicabenedicto.github.io/lessons-learned/',
      rep: 'https://github.com/BicaBenedicto/lessons-learned',
    },
  },
  {
    name: 'Shopping Cart',
    image: shoppingCart,
    technologies: ['html5', 'css3', 'javascript'],
    'Shopping Cart': {
      message: 'Projeto é um site utilizando html, css e javascript, com requisição de api com o mercado livre, podendo ver produtos e adicionar ao carrinho.',
      site: 'https://bicabenedicto.github.io/shopping-cart/',
      rep: 'https://github.com/BicaBenedicto/shopping-cart',
    },
  },
  {
    name: 'Color Guess',
    image: colorGuess,
    technologies: ['html5', 'css3', 'javascript'],
    'Color Guess': {
      message: 'Projeto é um jogo de seleção de cores, onde é informado um código em RGB, e cores para selecionar a correta, adicionando pontos ao selecionar a cor certa e podendo aumentar a dificuldade.',
      site: 'https://bicabenedicto.github.io/color-guess/',
      rep: 'https://github.com/BicaBenedicto/color-guess',
    },
  },
  {
    name: 'Meme Generator',
    image: memeGenerator,
    technologies: ['html5', 'css3', 'javascript'],
    'Meme Generator': {
      message: 'Projeto é uma página para criação de "memes", podendo fazer o upload de uma imagem e adicionar um texto nela.',
      site: 'https://bicabenedicto.github.io/meme-generator/',
      rep: 'https://github.com/BicaBenedicto/meme-generator',
    },
  },
  {
    name: 'Netflix Interface',
    image: netflixInterface,
    technologies: ['html5', 'css3', 'javascript'],
    'Netflix Interface': {
      message: 'Projeto é uma página com a interface do Netflix, com aparência similar e utilizando API de filmes para os gêneros.',
      site: 'https://bicabenedicto.github.io/Netflix-Interface/',
      rep: 'https://github.com/BicaBenedicto/Netflix-Interface',
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((item) => PROJETO_DESTAQUE.some((name) => item.name === name));
