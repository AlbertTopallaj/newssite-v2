function renderSidebar(){
    const articles = JSON.parse(localStorage.getItem('articles') || '[]')
    const container = document.getElementById('latest-news')

    const latest = articles.filter(a => a.latestnew).reverse()

    latest.forEach(article =>{
        const item = document.createElement('a')
        item.href = 'article.html?id=' + article.id
        item.className = 'flex flex-col gap-1 py-2 border-b border-gray-100 hover:text-blue-600 transition-colors'

        const title = document.createElement('span')
        title.textContent = article.title
        title.className = 'text-sm font-medium leading-snug'

        const date = document.createElement('span')
        date.textContent = new Date(article.createdAt).toLocaleDateString('sv-SE')
        date.className = 'text-xs text-gray-400'

        item.appendChild(title)
        item.appendChild(date)
        container.appendChild(item)
    })
}

renderSidebar()