let anchor = document.querySelector('#toTop');
let footer = document.querySelector('#footer');

function checkOffset() {
    function getRectTop(el){
        let rect = el.getBoundingClientRect();
        console.log(rect.y);
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