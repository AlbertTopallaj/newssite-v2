
const articles = JSON.parse(localStorage.getItem('articles') || '[]')
const container = document.getElementById('articles')

if (articles.length === 0) {
    const msg = document.createElement('h1')
    msg.textContent = 'No articles could be found'
    container.append(msg)
} else {
    articles.forEach((article) => {
        const div = document.createElement('div')
        div.className = 'w-full p-2 shadow-2xl my-4 hover:bg-gray-500 cursor-pointer'

        const title = document.createElement('h1')
        title.className = 'text-4xl m-5 p-10 text-wrap'
        title.textContent = article.title

        const content = document.createElement('p')
        content.className = 'm-5'
        content.textContent = article.content

        const date = document.createElement('span')
        date.className = 'm-5'
        date.textContent = new Date(article.createdAt).toLocaleDateString('sv-SE')

        div.append(title)
        div.append(content)
        div.append(date)
        container.appendChild(div)
    })
}