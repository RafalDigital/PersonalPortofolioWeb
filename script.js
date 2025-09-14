// DarkMode
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');
const link = document.querySelector('.link');
const spanH1 = document.querySelector('.spanH1');
const spanH2 = document.querySelector('.spanH2');
const spanH3 = document.querySelector('.spanH3');
const hamburger = document.querySelector('.hamburger');
const hamburgerBar = document.querySelector('.hamburger-bar');
const spanHi = document.querySelector('.spanHi');
const spanName = document.querySelector('.spanName');
const container1 = document.querySelector('.container-1');
const customShape1 = document.querySelector('.shape-fill')

logo.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    link.classList.toggle('dark-mode');
    spanH1.classList.toggle('dark-mode');
    spanH2.classList.toggle('dark-mode');
    spanH3.classList.toggle('dark-mode');
    hamburgerBar.classList.toggle('dark-mode');
    spanHi.classList.toggle('dark-mode');
    spanName.classList.toggle('dark-mode');
    container1.classList.toggle('dark-mode');
    customShape1.classList.toggle('dark-mode');

})




hamburger.addEventListener('click', () => {
    hamburgerBar.classList.toggle('active');
    
    hamburger.classList.toggle('open');
});


const navbar = document.getElementById('navbar');

// Tambahkan event listener untuk 'scroll'
window.addEventListener('scroll', () => {
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function bukaGmail() {
  var emailPenerima = "rafaldigitall@gmail.com";
  var subjek = "New Message";
  var isi = "Hi,";

  var encodedSubject = encodeURIComponent(subjek);
  var encodedBody = encodeURIComponent(isi);

  var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + emailPenerima + "&su=" + encodedSubject + "&body=" + encodedBody;

  window.open(gmailUrl, '_blank');
}