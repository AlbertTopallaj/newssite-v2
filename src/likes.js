const likes = document.getElementById("likes");
const dislikes = document.getElementById("dislikes");
const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");

likes.textContent = article.likes;
dislikes.textContent = article.dislikes;

function like() {
  article.likes++;
  localStorage.setItem("articles", JSON.stringify(articles));
  likes.textContent = article.likes;
}

function dislike() {
  article.dislikes++;
  localStorage.setItem("articles", JSON.stringify(articles));
  dislikes.textContent = article.dislikes;
}

likeBtn.addEventListener("click", like);
dislikeBtn.addEventListener("click", dislike);
