function showToast(message, type = 'success', duration = 3000) {
    const container = document.getElementById('toast-container')

    const toast = document.createElement('div')
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500'
    }

    toast.className = `${colors[type]} text-white text-sm font-medium px-4 py-3 rounded-lg min-w-64`

    toast.textContent = message
    container.appendChild(toast)

    setTimeout(() => toast.remove(), duration)

}