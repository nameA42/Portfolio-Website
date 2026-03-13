/**
 * main.js — renders the projects grid and filter buttons
 * from the data in projects.js
 */

(function () {
  // ── Build filter buttons ──────────────────────────────────────────
  const allTags = new Set();
  PROJECTS.forEach(p => p.tags.forEach(t => allTags.add(t)));

  const filterBar = document.getElementById('filter-bar');
  allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = tag;
    btn.textContent = tag;
    filterBar.appendChild(btn);
  });

  // ── Render project cards ──────────────────────────────────────────
  const grid = document.getElementById('projects-grid');

  PROJECTS.forEach(project => {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = project.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.dataset.tags = JSON.stringify(project.tags);

    // Thumbnail
    let thumbHTML;
    if (project.image) {
      thumbHTML = `
        <div class="card-thumb">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
        </div>`;
    } else {
      const icon = project.icon || '🎮';
      thumbHTML = `<div class="card-thumb-placeholder">${icon}</div>`;
    }

    // Tags
    const tagsHTML = project.tags
      .map(t => `<span class="tag">${t}</span>`)
      .join('');

    card.innerHTML = `
      ${thumbHTML}
      <div class="card-body">
        <div class="card-tags">${tagsHTML}</div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.description}</p>
        <span class="card-link">Play / View →</span>
      </div>
    `;

    grid.appendChild(card);
  });

  // ── Filter logic ──────────────────────────────────────────────────
  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    const filter = btn.dataset.filter;

    // Update active button
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide cards
    grid.querySelectorAll('.project-card').forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        const tags = JSON.parse(card.dataset.tags);
        card.classList.toggle('hidden', !tags.includes(filter));
      }
    });
  });

  // ── Nav scroll highlight ──────────────────────────────────────────
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === '#' + entry.target.id
            ? 'var(--text)'
            : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
})();
