const modal = () => {
    const modalAuth = document.querySelector('.modal-auth')
    const btnAuth = document.querySelector('.button-auth')
    const modalDialogAuth = document.querySelectorAll('.modal-dialog-auth')
    const logInForm = document.getElementById('logInForm')
    const inputLogin = document.getElementById('login')
    const inputPassword = document.getElementById('password')
    const btnOut = document.querySelector('.button-out')
    const userName = document.querySelector('.user-name')
    const btnCar = document.getElementById('cart-button')

    const login = (user) => {
        btnAuth.style.display = 'none';

        btnOut.style.display = 'flex';
        userName.style.display = 'flex';

        userName.textContent = user.login
        modalAuth.style.display = 'none';

        if (user.login === "") {
            alert('введите логин')
            userName.textContent = ""
            btnAuth.style.display = 'flex';
            btnOut.style.display = 'none';
            modalAuth.style.display = 'flex';
        }

    }

    const logout = () => {
        btnAuth.style.display = 'flex';

        btnOut.style.display = 'none';
        userName.style.display = 'none';
        userName.textContent = ''
    }

    btnAuth.addEventListener('click', (event) => {
        event.preventDefault()
        modalAuth.style.display = 'flex';
    })

    btnOut.addEventListener('click', () => {
        logout()
    })

    modalDialogAuth.forEach(element => {
        const closeAuth = element.querySelector('.close-auth')

        closeAuth.addEventListener('click', () => {
            modalAuth.style.display = 'none';
        })
    })

    logInForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const user = {
            login: inputLogin.value,
            password: inputPassword.value
        }

        localStorage.setItem('user', JSON.stringify(user))
        login(user)

    })
    if (localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')))
    }
}
modal()