document.querySelector('.header-menu-bars').onclick = function () {
    this.classList.toggle('active');
    document.querySelector(".menu").classList.toggle('menu-active');
    document.querySelector('#hidden-wrapper').classList.toggle('hidden-body');
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    //delay
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar'
    // }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const viber = document.querySelector('#viber');
const qrBlock = document.querySelector('.qr-overlay');
const qr = document.querySelector('.qr');
console.log(qr);
const ok = document.querySelector('.ok-button');
const menuViber = document.querySelector('#menuViber');
const adaptiveViber = document.querySelector('#adaptive-viber');

viber.addEventListener('click', () => {
   // qrBlock.classList.add('qr-block-active');
   qr.classList.add('qr-active');
   ok.classList.add('button-cursor');
});

ok.addEventListener('click', () => {
   // qrBlock.classList.remove('qr-block-active');
   qr.classList.remove('qr-active');
    ok.classList.remove('button-cursor');
});

const clipboard = new ClipboardJS('#adaptive-viber');

clipboard.on('success', function(e) {
    alert('Номер Вайберу скопійовано у буфер обміну!');
    e.clearSelection();
});

clipboard.on('error', function(e) {
    alert('Скопіюйте, будь ласка, цей номер: (050) 609 39 88');
});

// -------------------- Anchor Section

let anchor = document.querySelector('#toTop');

let footer = document.querySelector('#footer');

function checkOffset() {
    function getRectTop(el){
        let rect = el.getBoundingClientRect();
        return rect.top;
    }
    if (window.scrollY > 700) {
        anchor.style.display = "flex";
        // anchor.style.bottom = '190px';
    }
    else {
        anchor.style.display = "none";
    }
    if((getRectTop(anchor) + document.body.scrollTop) + anchor.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
        anchor.style.position = 'absolute';
    if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
        anchor.style.position = 'fixed'; // restore when you scroll up

}

document.addEventListener("scroll", () => {
    checkOffset();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    //delay
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar'
    // }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

