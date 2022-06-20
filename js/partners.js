    const partners = () => {
        const cardsRest = document.querySelector('.cards-restaurants')
        const cardRest = document.querySelector('.card-restaurant')

        const renderItems = (data) => {

            data.forEach(element => {
                const a = document.createElement('a');

                a.setAttribute('href', '/restaurant.html')
                a.classList.add('card-restaurant')

                console.log(a)

            });

        }

        fetch('./db/partners.json')
            .then((response) => response.json())
            .then((data) => { renderItems(data) })
            .catch((error) => {
                console.log(error)
            })






    }
    partners()