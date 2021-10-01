const talentsItemsList = document.querySelectorAll('.hide-ul');

const hideList = event => {
  event.target.classList.remove('show-ul');
  event.target.classList.add('hide-ul');
  event.target.children[0].classList.remove('show-ul');
  event.target.children[0].classList.add('hide-ul');
};
const showList = event => {
  event.target.classList.remove('hide-ul');
  event.target.classList.add('show-ul');
  event.target.children[0].classList.remove('hide-ul');
  event.target.children[0].classList.add('show-ul');
};

const verificationList = event => {
  if (event.target.classList.contains('show-ul')) {
    hideList(event);
  } else if (event.target.classList.contains('hide-ul')) {
    showList(event);
  }
};

const talents = document.getElementById('hide-section');
talents.addEventListener('click', verificationList);