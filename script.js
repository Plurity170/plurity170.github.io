document.addEventListener("DOMContentLoaded", () => {
  const recentPosts = document.getElementById("recent-posts");

  // Safety check (prevents white screen)
  if (!recentPosts) return;

  // Clear loading text safely
  recentPosts.innerHTML = "";

  // Static fallback content (IMPORTANT)
  const fallback = document.createElement("div");
  fallback.className = "post";

  fallback.innerHTML = `
    <h3>POST-001</h3>
    <p>First public build. More coming soon.</p>
    <a href="posts/post-001.html">Read more →</a>
  `;

  recentPosts.appendChild(fallback);
});//Fix fallback resent posts script