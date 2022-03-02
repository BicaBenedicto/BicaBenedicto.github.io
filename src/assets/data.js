import pixelArt from '../images/projetos/pixels-art.png';
import todoList from '../images/projetos/to-do-list.png';
import trybewarts from '../images/projetos/trybewarts.png';
import eCommerce from '../images/projetos/ecommerce-image.PNG';
import trybewallet from '../images/projetos/trybewallet-image.PNG';
import trybeTunes from '../images/projetos/trybetunes-image.PNG';
import trivia from '../images/projetos/trivia-image.PNG';
import davsom from '../images/projetos/davsom.PNG';

const PROJETO_DESTAQUE = ['Pixel Art', 'To do List', 'Trybewarts', 'E-commerce', 'Trybewallet',
'TrybeTunes', 'Trivia', 'Davsom'];

export const PROJECTS = [
  {
    name: 'Pixel Art',
    image: pixelArt,
    'Pixel Art': {
      message: 'O projeto é um site de desenho, com algumas paletas de cores aleatórias que são geradas, podendo adicionar, remover ou alterar a cor das paletas conforme desejar, o quadro inicial é de 5 por 5, podendo chegar até 50 por 50 para fazer desenhos em pixel art da maneira que preferir.',
      site: 'https://bicabenedicto.github.io/pixel-art/',
      rep: 'https://github.com/BicaBenedicto/pixel-art',
    },
  },
  {
    name: 'To do List',
    image: todoList,
    'To do List': {
      message: 'O projeto é uma lista de tarefas simples, onde pode adicionar, remover, marca, riscar, excluir e mover itens, além de poder salvar os itens em seu navegador para sempre que precisar pode acessar e conferir a sua lista.',
      site: 'https://bicabenedicto.github.io/todo-list',
      rep: 'https://github.com/BicaBenedicto/todo-list',
    },
  },
  {
    name: 'Trybewarts',
    image: trybewarts,
    Trybewarts: {
      message: 'O projeto é um site de cadastro, onde você coloca as informações como nome, escola, tecnologias que deseja aprender, entre outras coisas e ao final é impresso uma carta com as informações.',
      site: 'https://bicabenedicto.github.io/trybewarts/',
      rep: 'https://github.com/BicaBenedicto/trybewarts',
    },
  },
  {
    name: 'E-commerce',
    image: eCommerce,
    'E-commerce': {
      message: 'Projeto desenvolvido como conclusão do Bootcamp de Front-End Developer do banco Inter, com um front-end que realiza a comunicação ao back-end e é gerenciado por um banco de dados.',
      site: '',
      rep: 'https://github.com/BicaBenedicto/ecommerce',
    },
  },
  {
    name: 'Trybewallet',
    image: trybewallet,
    Trybewallet: {
      message: 'O projeto é um site de cambio, utilizando uma API que informa os valores do cambio para Real, sendo possivel anotar os gastos em diversas moedas, e o valor é convertido para Real Brasileiro, ficando salvo em seu navegador e utilizando o cambio no momento atual que realizou a adição.',
      site: '/projects/trybewallet',
      rep: 'https://github.com/BicaBenedicto/trybewallet',
    },
  },
  {
    name: 'TrybeTunes',
    image: trybeTunes,
    TrybeTunes: {
      message: 'O projeto é um site de música, onde é possivel escutar os primeiros 30 segundos de suas músicas favoritas, é utilizado a API do Itunes, com um simulador de sistema de login, podendo favoritas as músicas que mais gosta.',
      site: '/projects/trybetunes',
      rep: 'https://github.com/BicaBenedicto/trybetunes',
    },
  },
  {
    name: 'Trivia',
    image: trivia,
    Trivia: {
      message: 'O projeto é um jogo de perguntas e respostas, onde apenas 1 resposta é a correta, foi realizado em grupo de 5 pessoas utilizando uma API que traz as perguntas, ao iniciar o jogo você começa com o score de 0, e ao acertar as perguntas é somado a pontuação dependendo o nivel da pergunta (fácil, médio e díficil) e o tempo que levou para responder, ao final do jogo possui uma tele dos resultados informando a quantidade de acertos e a pontuação final, tambem possui uma tela de "Ranking" onde é possivel competir e ver quem acerta mais.',
      site: '',
      rep: 'https://github.com/BicaBenedicto/trivia-react-redux',
    },
  },
  {
    name: 'Davsom',
    image: davsom,
    Davsom: {
      message: 'Projeto realizado como trabalho freelancer de campanha publicitária de uma loja automotiva',
      site: 'https://davsom.com',
      rep: '',
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((item) => PROJETO_DESTAQUE.some((name) => item.name === name));
