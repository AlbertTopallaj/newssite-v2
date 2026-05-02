const params = new URLSearchParams(window.location.search)
const id = Number(params.get('id'))
const articles = JSON.parse(localStorage.getItem('articles') || '[]')
const article = articles.find(a => a.id == id)
const container = document.getElementById('article-container')

if(!article) {
    container.textContent = '<h1 class="text-2xl">Article not found</h1>'
} else {
    const title = document.createElement('h1')
    title.className = 'text-4xl font-bold mb-4'
    title.textContent = article.title

    const date = document.createElement('span')
    date.className = 'text-sm text-gray-400 mb-6 block'
    date.textContent = 'Created: ' + new Date(article.createdAt).toLocaleDateString('sv-SE')

    const content = document.createElement('p')
    content.className = 'text-lg leading-relaxed'
    content.textContent = article.content

    container.append(title)
    container.append(date)
    container.append(content)
}