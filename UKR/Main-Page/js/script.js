document.querySelector('.header-menu-bars').onclick = function () {
    this.classList.toggle('active');
    document.querySelector(".menu").classList.toggle('menu-active');
    document.body.classList.toggle('hidden-body');
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////

const viber = document.querySelector('#viber');
const qrBlock = document.querySelector('.qr-overlay');
const qr = document.querySelector('.qr');
console.log(qr);
const ok = document.querySelector('.ok-button');
const menuViber = document.querySelector('#menuViber');
const adaptiveViber = document.querySelector('#adaptive-viber');

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function() {
        /* clipboard successfully set */
    }, function() {
        /* clipboard write failed */
    });
}

// console.log(ok);

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

adaptiveViber.addEventListener('touchstart', () => {
    let result = document.execCommand('copy', false, '066 442 57 38');
    if (result === true){
        alert('Номер скопійовано!');
    } else{
        alert('Скопіюйте цей номер:      (067) 442 57 38')
    }
});

menuViber.addEventListener('touchstart', () => {
    alert('Номер скопійовано!');
});
