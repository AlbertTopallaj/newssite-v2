console.log('auth.js loaded', localStorage.getItem('isLoggedIn'))

if(!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html'
}