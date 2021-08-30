const banner = document.getElementById('banner');
const bannerMSG = document.getElementById('banner-msg');

function banner1() {
  banner.classList.remove('banner2');
  banner.classList.remove('banner3');
  banner.classList.add('banner1');
  setTimeout(banner2, 3000)
}

function banner2() {
  banner.classList.remove('banner1');
  banner.classList.remove('banner3');
  banner.classList.add('banner2');
  setTimeout(banner3, 3000)
}

function banner3() {
  banner.classList.remove('banner1');
  banner.classList.remove('banner2');
  banner.classList.add('banner3');
  setTimeout(banner1, 3000)
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

function sendMail() {
  let link = "mailto:gabrielpbenedicto@gmail.com";
  link   += "&subject=" + encodeURIComponent('Contato novo');
  link     += "&body=" + encodeURIComponent('Nome: ' + document.getElementById('your-name').value + '<br>' + ' Telefone: ' + document.getElementById('your-tel').value);
  
  window.location.href = link;
}

const buttonSubmitForm = document.getElementById('button-asks');
// buttonSubmitForm.addEventListener('click', sendMail);
