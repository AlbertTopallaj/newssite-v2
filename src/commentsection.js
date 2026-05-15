const commentSection = document.getElementById('comment-section')
const comment =  document.getElementById('comment');
const sendComment = document.getElementById('send-comment');

article.comments.forEach(function(savedComment){
    const p = document.createElement('p');

    p.textContent = savedComment;

    commentSection.appendChild(p);
});


function publishComment(){
    const text = comment.value;

    article.comments.push(text);

    localStorage.setItem("articles", JSON.stringify(articles));

    const p = document.createElement('p');

    p.textContent = text;

    commentSection.appendChild(p);
}

sendComment.addEventListener('click', publishComment);
