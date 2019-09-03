document.querySelector('.header-menu-bars').onclick = function () {
    this.classList.toggle('active');
    document.querySelector(".menu").classList.toggle('menu-active');
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

menuViber.addEventListener('click', () => {
    updateClipboard('(050) 609 33 98');
    alert('Номер скопійовано до буферу обміну');
});

// adaptiveViber.ontouchstart = e=>{
//     updateClipboard('(050) 609 33 98');
//     e.target.before('sdkjfbsdkjfbdskjfbkdjsfbkjsdfbkjsdfbkjdsbfkjdsbfjkdsbfkjsdbfjkdbsjkfbdsjkfbdsjkfbjkdsfbjksdbfjkdsbfjkdsbfjksdbfjkdsbkjfbsdjkfbdskjfbkjdsbfkjsdbfkjsdbfkjsdbfkjdsbfjksdbfkjsdbfksdbfkjsdbfkjsdbfjkdsbf');
//     alert('Номер скопійовано до буферу обміну');
// };

$(adaptiveViber).on("touchstart mousedown", (e)=>{
    // updateClipboard('(050) 609 33 98');
    e.target.before('sdkjfbsdkjfbdskjfbkdjsfbkjsdfbkjsdfbkjdsbfkjdsbfjkdsbfkjsdbfjkdbsjkfbdsjkfbdsjkfbjkdsfbjksdbfjkdsbfjkdsbfjksdbfjkdsbkjfbsdjkfbdskjfbkjdsbfkjsdbfkjsdbfkjsdbfkjdsbfjksdbfkjsdbfksdbfkjsdbfkjsdbfjkdsbf');
    alert('Номер скопійовано до буферу обміну');
});

$('#click-me').on("touchstart mousedown", (e)=>{
    // updateClipboard('(050) 609 33 98');
    e.target.before('sdkjfbsdkjfbdskjfbkdjsfbkjsdfbkjsdfbkjdsbfkjdsbfjkdsbfkjsdbfjkdbsjkfbdsjkfbdsjkfbjkdsfbjksdbfjkdsbfjkdsbfjksdbfjkdsbkjfbsdjkfbdskjfbkjdsbfkjsdbfkjsdbfkjsdbfkjdsbfjksdbfkjsdbfksdbfkjsdbfkjsdbfjkdsbf');
    alert('Номер скопійовано до буферу обміну');
});



// ('touchstart', (e) => {
//     updateClipboard('(050) 609 33 98');
//     e.target.before('sdkjfbsdkjfbdskjfbkdjsfbkjsdfbkjsdfbkjdsbfkjdsbfjkdsbfkjsdbfjkdbsjkfbdsjkfbdsjkfbjkdsfbjksdbfjkdsbfjkdsbfjksdbfjkdsbkjfbsdjkfbdskjfbkjdsbfkjsdbfkjsdbfkjsdbfkjdsbfjksdbfkjsdbfksdbfkjsdbfkjsdbfjkdsbf');
//     alert('Номер скопійовано до буферу обміну');
// });
