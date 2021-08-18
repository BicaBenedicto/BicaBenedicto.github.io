const list = document.getElementById('lista-tarefas');

function addTarefa() {
  const item = document.createElement('li');
  const input = document.getElementById('texto-tarefa');

  item.innerText = input.value;
  item.className = 'itemList';
  list.appendChild(item);
  input.value = '';
}

const buttonAddTarefa = document.getElementById('criar-tarefa');
buttonAddTarefa.addEventListener('click', addTarefa);

function changeBackgroundItem(evento) {
  const itemList = document.querySelectorAll('.itemList');
  if (itemList) {
    for (let index = 0; index < itemList.length; index += 1) {
      itemList[index].classList.remove('selected');
    }
    if (evento.target.classList.contains('itemList')) {
      evento.target.classList.add('selected');
    }
  }
}

list.addEventListener('click', changeBackgroundItem);

function changeForCompleted(evento) {
  const itemList = document.querySelectorAll('.itemList');
  if (itemList) {
    if (evento.target.classList.contains('completed')) {
      evento.target.classList.remove('completed');
    } else if (evento.target.classList.contains('itemList')) {
      evento.target.classList.add('completed');
    }
  }
}

list.addEventListener('dblclick', changeForCompleted);

function removeList() {
  const itemList = document.querySelectorAll('.itemList');
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].remove();
  }
}

const buttonRemoveList = document.getElementById('apaga-tudo');
buttonRemoveList.addEventListener('click', removeList);

function removeFinalizados() {
  const itemListFinalizado = document.querySelectorAll('.completed');
  for (let index = 0; index < itemListFinalizado.length; index += 1) {
    itemListFinalizado[index].remove();
  }
}

const buttonRemoveFinalizado = document.getElementById('remover-finalizados');
buttonRemoveFinalizado.addEventListener('click', removeFinalizados);

function saveList() {
  const tarefa = 'tarefa';
  const tarefaCompleted = 'tarefa completed';
  const tarefaSelected = 'tarefa selected';
  for (let index = 0; index < list.children.length; index += 1) {
    if (list.children[index].classList.contains('completed')) {
      localStorage.setItem(tarefaCompleted + index, list.children[index].innerText);
    } else if (list.children[index].classList.contains('selected')) {
      localStorage.setItem(tarefaSelected + index, list.children[index].innerText);
    } else {
      localStorage.setItem(tarefa + index, list.children[index].innerText);
    }
  }
}

const buttonSaveList = document.getElementById('salvar-tarefas');
buttonSaveList.addEventListener('click', saveList);

function addTarefaSalva(storage, storage1, storage2) {
  const item = document.createElement('li');
  if (storage) {
    item.innerText = storage;
    item.className = 'itemList';
    list.appendChild(item);
  } if (storage1) {
    item.innerText = storage1;
    item.className = 'itemList';
    item.classList.add('completed');
    list.appendChild(item);
  } if (storage2) {
    item.innerText = storage2;
    item.className = 'itemList';
    item.classList.add('selected');
    list.appendChild(item);
  }
}

function loadTarefaSalva() {
  for (let index = 0; index < localStorage.length; index += 1) {
    const tarefa = 'tarefa';
    const tarefaCompleted = 'tarefa completed';
    const tarefaSelected = 'tarefa selected';
    const storage = localStorage.getItem(tarefa + index);
    const storage1 = localStorage.getItem(tarefaCompleted + index);
    const storage2 = localStorage.getItem(tarefaSelected + index);
    addTarefaSalva(storage, storage1, storage2);
  }
}

loadTarefaSalva();

function checkMove(firstItem, secondItem) {
  const firstCompleted = firstItem.classList.contains('completed');
  const secondCompleted = secondItem.classList.contains('completed');

  if (!secondCompleted && firstCompleted) {
    firstItem.classList.remove('completed');
    secondItem.classList.add('completed');
  } else if (secondCompleted && !firstCompleted) {
    firstItem.classList.add('completed');
    secondItem.classList.remove('completed');
  }
}
function taskMoveUp() {
  const selected = document.querySelector('.selected');

  for (let index = 1; index < list.children.length; index += 1) {
    const firstItem = list.children[index];
    const secondItem = list.children[index - 1];
    if (firstItem === selected) {
      const position = firstItem.innerText;
      firstItem.innerText = secondItem.innerText;
      secondItem.innerText = position;
      firstItem.classList.remove('selected');
      secondItem.classList.add('selected');
      checkMove(firstItem, secondItem);
    }
  }
}

const buttonMoveUp = document.getElementById('mover-cima');
buttonMoveUp.addEventListener('click', taskMoveUp);

function taskMoveDown() {
  const selected = document.querySelector('.selected');

  for (let index = 0; index < list.children.length - 1; index += 1) {
    const firstItem = list.children[index];
    const secondItem = list.children[index + 1];
    if (firstItem === selected) {
      const position = firstItem.innerText;
      firstItem.innerText = secondItem.innerText;
      secondItem.innerText = position;
      firstItem.classList.remove('selected');
      secondItem.classList.add('selected');
      checkMove(firstItem, secondItem);
    }
  }
}

const buttonMoveDown = document.getElementById('mover-baixo');
buttonMoveDown.addEventListener('click', taskMoveDown);

function removeSelected() {
  for (let index = 0; index < list.children.length; index += 1) {
    if (list.children[index].classList.contains('selected')) {
      list.children[index].remove();
    }
  }
}

const buttonRemoveSelected = document.getElementById('remover-selecionado');
buttonRemoveSelected.addEventListener('click', removeSelected);

function removeSaveList() {
  localStorage.clear();
}

const buttonApagarListaSalva = document.getElementById('apagar-lista-salva');
buttonApagarListaSalva.addEventListener('click', removeSaveList);
