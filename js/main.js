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
    console.log(select)
    const cards = document.querySelectorAll('.card')
    console.log(cards)

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            console.log(isItemFiltered)
            if (isItemFiltered) {
                item.classList.add('hide')
            }
        })
    }
    select.forEach((select) => {
        select.addEventListener('change', (event) => {
            const currentCategory = event.target.value
            console.log(event.target.value)
            filter(currentCategory, cards)
        })
    })
}
app()