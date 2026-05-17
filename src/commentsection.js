const commentSection = document.getElementById('comment-section')
const comment = document.getElementById('comment');
const sendComment = document.getElementById('send-comment');

article.comments.forEach(function (savedComment) {
    const p = document.createElement('p');

    p.textContent = savedComment;

    p.className = 'text-sm text-gray-700 border-b border-gray-100 pb-2'

    commentSection.appendChild(p);
});


function publishComment() {
    const text = comment.value;

    if (!text) {
        showToast('The comment is empty', 'error')
        return
    }
    

    article.comments.push(text);

    localStorage.setItem("articles", JSON.stringify(articles));

    const p = document.createElement('p');

    p.className = 'text-sm text-gray-700 border-b border-gray-100 pb-2'

    p.textContent = text;

    commentSection.appendChild(p);
    comment.value = ''
}

sendComment.addEventListener('click', publishComment);
