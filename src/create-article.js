document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const title = document.getElementById('title').value
    const content = document.getElementById('content').value

    if(!title.trim()){
        showToast('Title is missing, try again', 'error')
        return
    }

    if(!content.trim()){
        showToast('Content is missing, try again', 'error')
        return
    }

    const articles = JSON.parse(localStorage.getItem('articles') || '[]')

    console.log(articles)

    articles.push({
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toISOString(),
        likes: 0,
        dislikes: 0,
        comments: []
    })

    localStorage.setItem('articles', JSON.stringify(articles))
    showToast('Article successfully created!', 'success')
    e.target.reset()
})