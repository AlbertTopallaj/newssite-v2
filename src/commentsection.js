const commentSection = document.getElementById('comment-section')
const comment = document.getElementById('comment');
const sendComment = document.getElementById('send-comment');

article.comments.forEach(function (savedComment) {
    const commentEl = document.createElement('p');

    commentEl.textContent = savedComment.text;

    commentEl.className = 'text-sm text-gray-700 border-b border-gray-100 pb-2'

    const date = document.createElement('span')
    date.className = 'text-sm text-gray-500'
    date.textContent = savedComment.date

    commentSection.appendChild(commentEl);
    commentSection.appendChild(date)
});


function publishComment() {
    const text = comment.value;

    if (!text) {
        showToast('The comment is empty', 'error')
        return
    }

    const date = document.createElement('span')
    date.className = 'text-sm text-gray-500'
    date.textContent = new Date().toLocaleString('sv-SE')

    article.comments.push({ text: text, date: new Date().toLocaleString('sv-SE') });

    localStorage.setItem("articles", JSON.stringify(articles));

    const commentEl = document.createElement('p');

    commentEl.className = 'text-sm text-gray-700 border-b border-gray-100 pb-2'

    commentEl.textContent = text;

    commentSection.appendChild(commentEl)
    commentSection.appendChild(date)
    comment.value = ''
}

sendComment.addEventListener('click', publishComment);
