function renderGreeting(){
    const hour = new Date().getHours()
    let greeting 

    if(hour < 12){
        greeting = 'Good morning, Admin' 
    } else if (hour < 18) {
        greeting = 'Good afternoon, Admin'
    } else {
        greeting = 'Good evening, Admin'
    }

    const el = document.createElement('p')
    el.textContent = greeting
    el.className = 'text-gray-500 text-center mt-2'
    document.querySelector('h2').after(el)
}

renderGreeting()