const menu = () => {
    const restourant = 'food-band.json'
    const cardMenu = document.querySelector('.cards-menu')


    const renderItems = (data) => {
        data.forEach(({ id, name, description, price, image }) => {

            const cards = document.createElement('div')

            cards.classList.add('card')

            cards.innerHTML = `
                <div class="card">
                <img src="${image}" alt="${id}" class="card-image" />
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title card-title-reg">${name}</h3>
                    </div>
                    <!-- /.card-heading -->
                    <div class="card-info">
                        <div class="ingredients">${description}
                        </div>
                    </div>
                    <!-- /.card-info -->
                    <div class="card-buttons">
                        <button class="button button-primary button-add-cart">
                            <span class="button-card-text">В корзину</span>
                            <span class="button-cart-svg"></span>
                        </button>
                        <strong class="card-price-bold">${price} ₽</strong>
                    </div>
                </div>
                <!-- /.card-text -->
            </div>

            `


            cardMenu.append(cards)
        });

        // cardMenu.append(cards)
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
menu()