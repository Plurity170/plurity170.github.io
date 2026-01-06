async function loadPosts() {
  const res = await fetch("posts/index.json");
  const posts = await res.json();

  const el = document.getElementById("recent-posts");
  if (!el) return;

  el.innerHTML = posts.map(p => `
    <div class="record">
      <strong><a href="post.html?slug=${p.slug}">${p.title}</a></strong>
      <p>${p.description}</p>
      <small>${p.date}</small>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", loadPosts);