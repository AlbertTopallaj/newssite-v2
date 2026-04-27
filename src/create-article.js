document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const title = document.getElementById('title').value
    const content = document.getElementById('content').value

    if(!title.trim()){
        showToast('Titel saknas', 'warning')
        return
    }

    const articles = JSON.parse(localStorage.getItem('articles') || '[]')

    articles.push({
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toISOString()
    })

    localStorage.setItem('articles', JSON.stringify(articles))
    showToast('Artikel skapad!', 'success')
    e.target.reset()
})