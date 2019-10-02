var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});  // Smooth scrolling on safari

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


// ------------------- Buttons Section

const signUpBtn = document.createElement('a');

if (window.navigator.platform === 'IPhone'){
    const header = document.querySelector('#top')
    header.style.backgroundColor = 'red';
}

document.body.onclick = function({target}) {
    if (target.classList.contains("button")) {
        signUpBtn.href = "#footer";
        signUpBtn.className = "button large-font font-color-white margin-top";
        if (target.innerText === "СХОВАТИ") {
            target.innerText = "ДІЗНАТИСЯ БІЛЬШЕ";
            signUpBtn.remove();
            target.parentNode.parentNode.children[0].children[0].childNodes[1].classList.remove(
                "active-text"
            );
        } else {
            target.innerText = "Сховати";
            signUpBtn.innerText = "Записатися";
            target.after(signUpBtn);
            target.parentNode.parentNode.children[0].children[0].childNodes[1].classList.add(
                "active-text"
            );
        }
    }
};

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
