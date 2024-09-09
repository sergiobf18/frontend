const formLogin = document.querySelector('#form-login')
formLogin.addEventListener('submit', (e) =>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = users.find(user => user.email === email && user.password === password)

    if(!validUser){
        return alert('usuario o contraseña incorrecta')
    }

    Swal.fire({
        title: 'Bienvenido',
        text: `${validUser.name}`,
        icon: 'success',
        confirmButtonText: 'Continuar'
      }).then(() => {
        localStorage.setItem('login_sucess', JSON.stringify(validUser));
        window.location.href = 'index.html';
      });
})