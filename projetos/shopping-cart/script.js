const cartItems = '.cart__item';
const buttonAddInCart = document.querySelector('section.items');

function sumPrice() {
  const totalPrice = document.querySelector('.total-price');
  totalPrice.innerText = 'Total Price: $';
  const listItems = document.querySelectorAll(cartItems);
  let count = 0;

  listItems.forEach((text) => {
    const split = text.innerText.split('|');
    const priceText = split.filter((element) => (element.includes('PRICE')))
      .map((element) => element.replace(' PRICE: $', ''));
    count += parseFloat(priceText);
  });
  totalPrice.innerText = count.toFixed(2);
}

const addLoading = () => {
  const main = document.querySelector('main');
  const load = document.createElement('h1');
  load.innerText = 'Loading...';
  load.className = 'loading';
  main.appendChild(load);
};

const removeLoading = () => {
  document.querySelector('.loading').remove();
};

function emptyCartList() {
  const listItems = document.querySelectorAll(cartItems);

  listItems.forEach((element) => element.remove());
  saveLocalStorage()
}

const buttonClearCart = document.getElementById('empty-cart');
buttonClearCart.addEventListener('click', emptyCartList);

function saveLocalStorage() {
  const input = [];
  const listItems = document.querySelectorAll(cartItems);

  listItems.forEach((element) => input.push(element.innerText));

  localStorage.setItem('actualCart', JSON.stringify(input));
  sumPrice();
}

function requestApiItem(ItemID, callback) {
  return fetch(`https://api.mercadolibre.com/items/${ItemID}`)
    .then((response) => response.json().then((data) => {
      callback(data);
      return data.pictures[0].url;
    }));
}

async function createProductImageElement(id) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = await requestApiItem(id, (element) => element);
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

async function createProductItemElement({ id, title }) {
  const section = document.createElement('section');
  const sectionMaster = document.querySelector('section.items');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(await createProductImageElement(id));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  sectionMaster.append(section);

  return section;
}

function getIdFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
  saveLocalStorage();
}

function createCartItemElement({ id, title, price }) {
  const ol = document.querySelector('ol.cart__items');
  const li = document.createElement('li');

  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  ol.appendChild(li);
  saveLocalStorage();
  return li;
}

function loadLocalStorage() {
  const ol = document.querySelector('ol.cart__items');
  if (localStorage.getItem('actualCart')) {
  const item = JSON.parse(localStorage.getItem('actualCart'));

  item.forEach((element) => {
    const li = document.createElement('li');
    li.innerText = element;
    li.className = 'cart__item';
    li.addEventListener('click', cartItemClickListener);
    ol.appendChild(li);
    sumPrice();
  });
  }
}

function requestApiMercado(search) {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`)
    .then((response) => response.json().then((data) => {
  data.results.forEach((element) => createProductItemElement(element));
}));
  removeLoading();
}

const buttonSearch = document.getElementById('search-button');
buttonSearch.addEventListener('click', () => {
  const li = document.querySelectorAll('.item');
  const inputValue = document.getElementById('search-input').value;

  if (inputValue) {
    addLoading();
    li.forEach((item) => item.remove());
    requestApiMercado(inputValue);
  };
});

window.onload = () => {
  addLoading();
  loadLocalStorage();
  buttonAddInCart.addEventListener('click', (event) => {
    if (event.target.classList.contains('item__add')) {
      return requestApiItem(getIdFromProductItem(event.target.parentNode), createCartItemElement);
    }
  });
  requestApiMercado('computador');
};
