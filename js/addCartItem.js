const add = () => {
    const modalBody = document.querySelector('.modal-body')
    const restourant = 'food-band.json'


    const renderItems = (data) => {
        data.forEach(({ name, price, }) => {

            const item = document.createElement('div')

            item.classList.add('food-row')



            item.innerHTML = `
        <div class="food-row">
        <span class="food-name">${name}</span>
        <strong class="food-price">${price} ₽</strong>
        <div class="food-counter">
            <button class="counter-button-minus">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
        </div>
    </div>
        `
            modalBody.append(item)
        });

    }

    fetch('https://testdelivery-d0ff4-default-rtdb.firebaseio.com/db/food-band.json')
        .then((response) => response.json())
        .then((data) => {
            renderItems(data)
        })
        .catch((error) => {
            console.log(error)
        })

}
add()