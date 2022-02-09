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

function filterCars(c) {
    let x, i;
    x = document.getElementsByClassName('card-year');
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], '.show');
        if (x[i].className.indexOf(c) > -1) addClass(x[i], '.show');
    }
}

function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) > -1) {
            element.className += ' ' + arr2[i];
        }
    }
}

function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i], 1))
        }
    };
    element.className = arr1.join('')
}

const selectElement = document.querySelector('.year');

selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.result');
    result.textContent = `You like ${event.target.value}`;
    let cardYear = document.querySelector('.card-year'); // one year 2014
    console.log(cardYear.innerHTML);
    console.log(event.target.value)
    let card = document.querySelectorAll('.card')
    if (cardYear.innerHTML !== event.target.value) {
        console.log(card)
        for (var i = 0; i < card.length; i++) card[i].style.display = 'none';
    }

});