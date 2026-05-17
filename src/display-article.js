
const articles = JSON.parse(localStorage.getItem('articles') || '[]')
const container = document.getElementById('articles')

function renderArticles() {
    const articles = JSON.parse(localStorage.getItem('articles') || '[]')
    container.textContent = ''

    if (articles.length === 0) {
        const msg = document.createElement('h1')
        msg.textContent = 'No articles could be found'
        msg.className = 'text-center text-gray-400 py-16 text-lg'
        container.append(msg)
    } else {
        articles.forEach((article) => {
            const card = document.createElement('div')
            card.className = 'flex flex-col gap-2 px-6 py-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer'

            card.addEventListener('click', (e) => {
                window.location.href = 'article.html?id=' + article.id
            })

            const title = document.createElement('h2')
            title.className = 'font-semibold text-gray-800'
            title.textContent = article.title

            const content = document.createElement('p')
            content.className = 'text-sm text-gray-500'
            content.textContent = article.content.length > 60
                ? article.content.slice(0, 60) + '...'
                : article.content

            const date = document.createElement('span')
            date.className = 'text-xs text-gray-400'
            date.textContent = 'Created: ' + new Date(article.createdAt).toLocaleDateString('sv-SE')

            const footer = document.createElement('div')
            footer.className = 'flex items-center justify-between'

            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'
            deleteBtn.className = 'text-sm text-red-500 hover:text-red-700'
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation()
                const all = JSON.parse(localStorage.getItem('articles') || '[]')
                const updated = all.filter(a => a.id !== article.id)
                localStorage.setItem('articles', JSON.stringify(updated))
                showToast('Article successfully deleted', 'error')
                renderArticles()
            })

            footer.appendChild(deleteBtn)
            footer.appendChild(date)

            card.appendChild(title)
            card.appendChild(content)
            card.appendChild(footer)
            container.appendChild(card)
        })
    }

}

renderArticles()