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


function app() {
    const select = document.querySelectorAll('select')
    const cards = document.querySelectorAll('.card')
    const result = document.getElementById('result')
    const divItems = document.getElementById('items')

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            if (isItemFiltered) {
                item.classList.add('anime')
            } else {
                item.classList.remove('row')
                item.classList.remove('anime')
            }
        })


    }
    select.forEach((select) => {
        select.addEventListener('change', (event) => {
            const currentCategory = event.target.value
            filter(currentCategory, cards)
        })
    })
    cards.forEach((card) => {
        card.ontransitionend = function() {
            if (card.classList.contains('anime')) {
                card.classList.add('hide');
            } else {
                card.classList.remove('hide');
                result.appendChild(card)
                result.classList.add('col')
            }
            //clean result berore every times

        }
    })
}
app()