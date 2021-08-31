const banner = document.getElementById('banner');
const bannerMSG = document.getElementById('banner-msg');

function banner1() {
  banner.classList.remove('banner2');
  banner.classList.remove('banner3');
  banner.classList.add('banner1');
  setTimeout(banner2, 3000);
}

function banner2() {
  banner.classList.remove('banner1');
  banner.classList.remove('banner3');
  banner.classList.add('banner2');
  setTimeout(banner3, 3000);
}

function banner3() {
  banner.classList.remove('banner1');
  banner.classList.remove('banner2');
  banner.classList.add('banner3');
  setTimeout(banner1, 3000);
}

banner1();
function changeBanner() {
  if (banner.classList.contains('banner1')) {
    banner.classList.remove('banner1');
    banner.classList.add('banner2');
  } else if (banner.classList.contains('banner2')) {
    banner.classList.remove('banner2');
    banner.classList.add('banner3');
  } else {
    banner.classList.remove('banner3');
    banner.classList.add('banner1');
  }
}

const buttonChangeBanner = document.getElementById('button-right-banner');
buttonChangeBanner.addEventListener('click', changeBanner);

function setaEfeito() {
  const seta = document.querySelectorAll('.seta');
  
  for (let index of seta) {
    index.classList.remove('seta-baixar');
    index.classList.add('seta-baixada');
  }
  setTimeout(setaEfeito2, 1000);
}

function setaEfeito2() {
  const seta = document.querySelectorAll('.seta');
  
  for (let index = 0; index < seta.length; index += 1) {
    seta[index].classList.remove('seta-baixada');
    seta[index].classList.add('seta-baixar');
  }
  setTimeout(setaEfeito, 1000);
}

setaEfeito();
