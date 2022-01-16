function Sizing4isRight() {
    let classOnOff = window.matchMedia('(min-width: 768px)').matches;
    document
        .getElementsByName('dropdown')
        .forEach(el => el.classList.toggle('col-lg-1-5', classOnOff))
}

document.addEventListener('DOMContentLoaded', Sizing4isRight)
window.addEventListener('resize', Sizing4isRight)

function validateEmail(e) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    document.getElementById('subscribe').disabled = !reg.test(e.value);
}