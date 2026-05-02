
const articles = JSON.parse(localStorage.getItem('articles') || '[]')
const container = document.getElementById('articles')

function renderArticles() {
    const articles = JSON.parse(localStorage.getItem('articles') || '[]')
    container.textContent = ''

if (articles.length === 0) {
    const msg = document.createElement('h1')
    msg.textContent = 'No articles could be found'
    container.append(msg)
} else {
    articles.forEach((article) => {
        const div = document.createElement('div')
        div.className = 'w-full p-2 shadow-2xl my-4 hover:bg-gray-500 cursor-pointer'

        div.addEventListener('click', (e) => {
            window.location.href = 'article.html?id=' + article.id
        })

        const title = document.createElement('h1')
        title.className = 'text-4xl m-5 p-10 text-wrap'
        title.textContent = article.title

        const content = document.createElement('p')
        content.className = 'm-5'
        content.textContent = article.content.length > 60
        ? article.content.slice(0, 60) + '...'
        : article.content

        const date = document.createElement('span')
        date.className = 'm-5'
        date.textContent = 'Created: ' + new Date(article.createdAt).toLocaleDateString('sv-SE')

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.className = 'ml-5 mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500'
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation()
            const all = JSON.parse(localStorage.getItem('articles') || '[]')
            const updated = all.filter(a => a.id !== article.id)
            localStorage.setItem('articles', JSON.stringify(updated))
            showToast('Article successfully deleted', 'error')
            renderArticles()
        })

        div.append(title)
        div.append(content)
        div.append(deleteBtn)
        div.append(date)
        container.appendChild(div)
    })
  }
 
}

 renderArticles()