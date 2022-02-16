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


// document.getElementById('sort').addEventListener('click', app)


function populate(s1, s2) {
    s1 = document.getElementById(s1)
    s2 = document.getElementById(s2)
    s2.innerHTML = '';
    if (s1.value == 'Lexus') {
        var optionArray = ['|', 'luxury|RS-350 lUXURY', 'f-sport|RS-350 F-SPORT']
    } else if (s1.value == 'Toyota') {
        var optionArray = ['|', 'xle|Highlander XLE', 'lea|Highlander LE A...', 'venza|Venza AWD XLE...']
    } else if (s1.value == 'Volkswagen') {
        var optionArray = ['|', 'tiguan|Tiguan']
    } else if (s1.value == 'Hyundai') {
        var optionArray = ['|', 'elantra|Elantra']
    } else if (s1.value == 'Mercedes-Bens') {
        var optionArray = ['|', 'gle-cl|GLE-Cl...']
    }
    for (let option in optionArray) {
        let pair = optionArray[option].split('|');
        let newOption = document.createElement('option');
        newOption.value = pair[0]
        newOption.innerHTML = pair[1]
        s2.options.add(newOption)
    }

}