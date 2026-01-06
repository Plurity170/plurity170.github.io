<script>
const postsContainer = document.getElementById("posts");

// Check cache first
const cachedPosts = sessionStorage.getItem("postsHTML");

if (cachedPosts) {
  postsContainer.innerHTML = cachedPosts;
} else {
  fetch("posts.json")
    .then(res => res.json())
    .then(posts => {
      let html = "";
      posts.forEach(post => {
        html += `<a href="post.html?id=${post.id}">${post.title}</a><br>`;
      });
      postsContainer.innerHTML = html;

      // Save to session
      sessionStorage.setItem("postsHTML", html);
    });
}
</script>