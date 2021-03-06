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

function iosCopyToClipboard(el) {
    var oldContentEditable = el.contentEditable,
        oldReadOnly = el.readOnly,
        range = document.createRange();

    el.contentEditable = true;
    el.readOnly = false;
    range.selectNodeContents(el);

    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

    el.contentEditable = oldContentEditable;
    el.readOnly = oldReadOnly;

    document.execCommand('copy');
}

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
    iosCopyToClipboard('10230120301203012');
    alert('Номер скопійовано!');
});

menuViber.addEventListener('touchstart', () => {
    iosCopyToClipboard('10230120301203012');
    alert('Номер скопійовано!');
});
