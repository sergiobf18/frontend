const user = JSON.parse(localStorage.getItem('login_sucess')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', () =>{
    alert('sesión finalizada')
    localStorage.removeItem('login_sucess')
    window.location.href = 'login.html'
})