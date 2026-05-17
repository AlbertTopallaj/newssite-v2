console.log("renderArticle.js loaded")

const container = document.getElementById('articles')

function renderArticles() {
    const articles = JSON.parse(localStorage.getItem('articles') || '[]')

    container.textContent = ''

    if (articles.length === 0) {
        const msg = document.createElement('h1')
        msg.textContent = 'No articles yet'
        msg.className = 'text-center text-gray-400 py-16 text-lg'
        container.appendChild(msg)
        return
    }

    articles.forEach(article => {
        const card = document.createElement('div')
        card.className = 'relative flex flex-col gap-1 py-6 px-4 md:px-0 border-b border-gray-200 cursor-pointer group transition-all duration-150 hover:bg-gray-50 hover:px-3 hover:rounded-md hover:border-transparent';

        card.addEventListener('click', () => {
            window.location.href = 'article.html?id=' + article.id
        })

        const topRow = document.createElement('div')
        topRow.className = 'flex items-center gap-2'

        if(article.category) {
            const tag = document.createElement('span')
            tag.textContent = article.category
            tag.className = `text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${getTagClass(article.category)}`
            topRow.appendChild(tag)
        }

        if(article.latestnew){
            const tag = document.createElement('span')
            tag.textContent = 'Latest News'
            tag.className = 'text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-red-100 text-red-800'
            topRow.append(tag)
        }

        const date = document.createElement('span')
        date.textContent = new Date(article.createdAt).toLocaleDateString('sv-SE')
        date.className = 'text-sm text-gray-400'
        topRow.appendChild(date)

        const title = document.createElement('h2')
        title.textContent = article.title;
        title.className = 'text-xl font-bold'

        const preview = document.createElement('p')
        preview.textContent = article.content.length > 60 ? article.content.slice(0, 60) + '...'
            : article.content

        card.appendChild(topRow)
        card.appendChild(title)
        card.appendChild(preview)
        container.appendChild(card)

    })
}

renderArticles()

