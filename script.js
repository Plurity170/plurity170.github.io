async function loadPosts() {
  const res = await fetch("posts.json");
  const posts = await res.json();

  renderHome(posts);
  renderArchive(posts);
  renderPost(posts);
}

/* HOME PAGE */
function renderHome(posts) {
  const container = document.getElementById("recent-posts");
  if (!container) return;

  const latest = posts.slice(0, 3);
  container.innerHTML = latest.map(post => `
    <div class="record">
      <strong>
        <a href="post.html?id=${post.id}">${post.title}</a>
      </strong>
      <p>${post.summary}</p>
      <small>${post.date}</small>
    </div>
  `).join("");
}

/* ARCHIVE / BLOG */
function renderArchive(posts) {
  const container = document.getElementById("blog-posts");
  if (!container) return;

  container.innerHTML = posts.map(post => `
    <article class="card">
      <h3>
        <a href="post.html?id=${post.id}">${post.title}</a>
      </h3>
      <small>${post.date}</small>
      <p>${post.summary}</p>
    </article>
  `).join("");
}

/* INDIVIDUAL POST PAGE + SEO */
function renderPost(posts) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  const post = posts.find(p => p.id == id);
  if (!post) return;

  const container = document.getElementById("post");
  container.innerHTML = `
    <h1>${post.title}</h1>
    <small>${post.date}</small>
    <p>${post.content}</p>
    <p><em>Tags: ${post.tags.join(", ")}</em></p>
  `;

  /* SEO */
  document.title = `${post.title} · Plurity170`;
  const meta = document.querySelector("meta[name='description']");
  if (meta) {
    meta.setAttribute("content", post.summary);
  }
}

document.addEventListener("DOMContentLoaded", loadPosts);