async function loadPosts() {
  const res = await fetch("posts.json");
  const posts = await res.json();

  renderHome(posts);
  renderArchive(posts);
}

function renderHome(posts) {
  const container = document.getElementById("recent-posts");
  if (!container) return;

  const latest = posts.slice(0, 3);
  container.innerHTML = latest.map(post => `
    <div class="record">
      <strong>${post.title}</strong>
      <p>${post.summary}</p>
      <small>${post.date}</small>
    </div>
  `).join("");
}

function renderArchive(posts) {
  const container = document.getElementById("blog-posts");
  if (!container) return;

  container.innerHTML = posts.map(post => `
    <article class="card">
      <h3>${post.title}</h3>
      <small>${post.date}</small>
      <p>${post.content}</p>
      <p><em>Tags: ${post.tags.join(", ")}</em></p>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", loadPosts);