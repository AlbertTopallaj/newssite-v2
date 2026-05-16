console.log("renderArticle.js loaded")

const container = document.getElementById('articles')

const TAGS = {
    java: 'bg-blue-100 text-blue-800',
    springboot: 'bg-green-100 text-green-800',
    default: 'bg-gray-100 text-gray-600'
}

function getTagClass(tag = '') {
    const key = tag.toLowerCase.replace(/\s+/g, '')
    return TAGS[key] || TAGS.default

}

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
        card.className = 'relatvie flex flex-col gap-1 py-6 px-4 md:px-0 border-b border-gray-200 cursor-pointer group transition-all duration-150 hover:bg-gray-50 hover:px-3 hover:rounded-md hover:border-transparent',

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

