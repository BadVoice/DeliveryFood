const menu = () => {
    const restourant = 'food-band.json'

    const renderItems = (data) => {

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