function renderSidebar() {
    const articles = JSON.parse(localStorage.getItem('articles') || '[]')
    const container = document.getElementById('latest-news')

    const latest = articles.filter(a => a.latestnew).reverse()

    latest.forEach(article => {
        const item = document.createElement('a')
        item.href = 'article.html?id=' + article.id
        item.className = 'flex flex-col gap-1 py-2 border-b border-gray-100 hover:text-blue-600 transition-colors'

        const topRow = document.createElement('div')
        topRow.className = 'flex items-center gap-2 mb-1'

        if (article.category) {
            const tag = document.createElement('span')
            tag.textContent = article.category
            tag.className = `text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${getTagClass(article.category)}`
            topRow.append(tag)
        }

        if (article.latestnew) {
            const tag = document.createElement('span')
            tag.textContent = 'Latest News'
            tag.className = 'text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-red-100 text-red-800'
            topRow.appendChild(tag)
        }



        const title = document.createElement('span')
        title.textContent = article.title
        title.className = 'text-sm font-medium leading-snug'

        const date = document.createElement('span')
        date.textContent = new Date(article.createdAt).toLocaleDateString('sv-SE')
        date.className = 'text-xs text-gray-400'

        item.appendChild(topRow)
        item.appendChild(title)
        item.appendChild(date)
        container.appendChild(item)
    })
}

renderSidebar()