const container = document.getElementById('articles')

function renderArticles(){
    const articles = JSON.parse(localStorage.getItem('articles') || '[]')

    container.textContent = ''

    if (articles.length === 0){
        const msg = document.createElement('h1')
        msg.textContent = 'No articles yet'
        container.appendChild(msg)
        return
    }

    articles.forEach(article =>{
        const card = document.createElement('div')
        card.className = 'p-4 shadow my-4 cursor-pointer'

        card.addEventListener('click', () => {
            window.location.href = 'article.html?id=' + article.id
        })

        const title = document.createElement('h2')
        title.textContent = article.title;
        title.className = 'text-xl font-bold'

        const preview = document.createElement('p')
        preview.textContent = article.content.length > 100 ? article.content.slice(0, 100) + '...'
        : article.content

        const date = document.createElement('span')
        date.textContent = new Date(article.createdAt).toLocaleDateString('sv-SE')
        date.className = 'text-sm text-gray-400'

        card.appendChild(title)
        card.appendChild(preview)
        card.appendChild(date)

        container.appendChild(card)

    })
}

renderArticles()

