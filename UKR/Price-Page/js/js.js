
document.querySelector('.header-menu-bars').onclick = function () {
  this.classList.toggle('active');
  document.querySelector(".menu").classList.toggle('menu-active');
};

/////////////////////////////////////////////////////////////////////////////////////////

window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (window.scrollY > 130) {
      document.getElementById("toTop").style.display = "flex";
      if (window.scrollY > height) {
          document.getElementById('toTop').style.bottom = derg.content;
          document.getElementById('toTop').style.position = 'absolute';
      }
      else {
        document.getElementById('toTop').style.position = 'fixed';
      }
     } else{
        document.getElementById('toTop').style.display = 'none';
    }
   }
let derg = String((window.innerHeight - 145 - 174) * -1);
let height = window.innerHeight - 174;
console.log(height);
console.log(derg);

// const email = document.querySelector('#e-mail');
// const emailAdress = document.querySelector('#email-hidden');
// email.addEventListener('hover', () => {
//     emailAdress.classList.remove('email-hidden')
//     console.log(email);
// });




// const emailAdress = document.createElement('p');
// emailAdress.innerText = 'nataliaukr@bigmir.net';
// emailAdress.className = 'font-size-10';
// email.addEventListener('mouseenter', e => {
//     console.log(e);
// });

//////////////////////////////////////////////////////////////////////////////////////////

 // window.onscroll = function() {checkFunction()};
 //  function checkFunction() {
 //   let y = window.scrollY;
 //   console.log(y);
 //  }
