    const partners = () => {
        const cardsRest = document.querySelector('.cards-restaurants')
        const sectionHead = document.querySelector('.section-heading')


        const renderItems = (data) => {

            data.forEach(({ image, kitchen, name, price, products, stars, time_of_delivery }) => {
                const a = document.createElement('a');

                a.setAttribute('href', '/restaurant.html')
                a.classList.add('card')
                a.classList.add('card-restaurant')
                a.dataset.products = products

                a.innerHTML = `
                
                <a href="restaurant.html" class="card card-restaurant">
                        <img src="${image}" alt="" class="card-image" />
                        <div class="card-text">
                            <div class="card-heading">
                                <h3 class="card-title">  ${name}</h3>
                                <span class="card-tag tag">${time_of_delivery} мин</span>
                            </div>
                            <div class="card-info">
                                <div class="rating">
                                ${stars}
                                </div>
                                <div class="price">${price} ₽</div>
                                <div class="category">${kitchen}</div>
                            </div>
                        </div>                   
                    </a>
                `
                a.addEventListener('click', (e) => {
                    e.preventDefault()

                    if (localStorage.getItem('user')) {
                        localStorage.setItem('restaurant', JSON.stringify(data))
                        window.location.href = '/restaurant.html'
                    } else {
                        const modalAuth = document.querySelector('.modal-auth')
                        modalAuth.style.display = 'flex'
                    }
                })

                cardsRest.append(a)

                const sectionHeading = document.createElement('div');
                sectionHeading.classList.add('.section-heading')
                sectionHeading.innerHTML = `
                
                <div class="section-heading">
                <h2 class="section-title restaurant-title">${name}</h2>
                <div class="card-info">
                    <div class="rating">
                    ${stars}
                    </div>
                    <div class="price">От ${price} ₽</div>
                    <div class="category">${kitchen}</div>
                </div>
                <!-- /.card-info -->
            </div>

`
            });

        }

        fetch('https://testdelivery-d0ff4-default-rtdb.firebaseio.com/db/partners.json')
            .then((response) => response.json())
            .then((data) => {
                renderItems(data)
            })
            .catch((error) => {
                console.log(error)
            })






    }
    partners()