const menu = () => {
    const restourant = 'food-band.json'
    const cardMenu = document.querySelector('.cards-menu')

    const renderItems = (data) => {
        data.forEach(({ id, name, description, price, image }) => {

            const cards = document.createElement('a')

            console.log(cards)





        });

        // cardMenu.append(cards)
    }

    fetch(`./db/${restourant}`)
        .then((response) => response.json())
        .then((data) => {
            renderItems(data)
        })
        .catch((error) => {
            console.log(error)
        })

}
menu()