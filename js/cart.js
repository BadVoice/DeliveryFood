const cart = () => {
    const cartBtn = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const modalCartClose = document.querySelector('.close')
    const counterBtn = document.querySelector('.counter-button')
    const counter = document.querySelector('.counter')
    const foodRow = document.querySelectorAll('.food-row')
    const counterBtnMinus = document.querySelector('.counter-button-minus')
    const btnAddCart = document.querySelector('.button-add-cart')
    const modalBody = document.querySelector('.modal-body')




    cartBtn.addEventListener('click', (e) => {
        e.preventDefault()
        modalCart.classList.add('is-open')

    })
    modalCartClose.addEventListener('click', (e) => {
        modalCart.classList.remove('is-open')
    })


    foodRow.forEach(element => {
        counterBtn.addEventListener('click', () => {
            let countPlus = counter.textContent;
            if (countPlus) {
                counter.textContent++;
            }
        })

        counterBtnMinus.addEventListener('click', (e) => {

            let countMinus = counter.textContent;
            if (countMinus) {
                counter.textContent--;

            }

            if (counter.textContent === '0') {
                element.style.display = 'none';

            }
        })

    });





}
cart()