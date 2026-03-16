/**
 * main.js — renders the projects grid, grouped filter bar, search, and row expand
 */

(function () {

  // ── Tag groupings ─────────────────────────────────────────────────
  const TAG_GROUPS = {
    'Genre':         ['Platformer', 'Arcade', 'Strategy', 'Horror', 'Adventure',
                      'Interactive Fiction', 'GameJam', 'Auto Battler', 'Atmospheric',
                      'Parody', 'Audio', 'Demo'],
    'Engine / Tech': ['Phaser', 'Godot', 'Unreal', 'Construct', 'Twine',
                      'p5.js', 'JavaScript', 'TypeScript', 'Python', 'C#'],
    'Topic':         ['LLM', 'Game AI', 'Computer Vision', 'Procedural Generation', 'Teaching'],
  };

  const QUICK_FILTERS = ['all', 'Research', 'Modding', 'Solo', 'Team'];

  // ── Build filter bar ──────────────────────────────────────────────
  const filterBar = document.getElementById('filter-bar');

  // Search input
  const searchRow = document.createElement('div');
  searchRow.className = 'filter-search-row';
  searchRow.innerHTML = `<input type="text" id="project-search" class="project-search" placeholder="Search projects…" autocomplete="off" />`;
  filterBar.appendChild(searchRow);

  // Quick filter row
  const quickRow = document.createElement('div');
  quickRow.className = 'filter-row filter-row-quick';
  QUICK_FILTERS.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (tag === 'all' ? ' active' : '') +
                    (['Research', 'Modding'].includes(tag) ? ' filter-btn-hl' : '');
    btn.dataset.filter = tag;
    btn.textContent = tag === 'all' ? 'All' : tag;
    quickRow.appendChild(btn);
  });
  filterBar.appendChild(quickRow);

  // Collect existing tags
  const existingTags = new Set();
  PROJECTS.forEach(p => p.tags.forEach(t => existingTags.add(t)));

  // Grouped rows
  Object.entries(TAG_GROUPS).forEach(([groupName, tags]) => {
    const available = tags.filter(t => existingTags.has(t));
    if (!available.length) return;

    const row = document.createElement('div');
    row.className = 'filter-row';

    const label = document.createElement('span');
    label.className = 'filter-group-label';
    label.textContent = groupName;
    row.appendChild(label);

    available.forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.dataset.filter = tag;
      btn.textContent = tag;
      row.appendChild(btn);
    });

    filterBar.appendChild(row);
  });

  // ── Render project cards ──────────────────────────────────────────
  const grid = document.getElementById('projects-grid');

  PROJECTS.forEach(project => {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = project.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.dataset.tags  = JSON.stringify(project.tags);
    card.dataset.title = project.title.toLowerCase();
    card.dataset.desc  = project.description.toLowerCase();

    let thumbHTML;
    if (project.image) {
      thumbHTML = `<div class="card-thumb"><img src="${project.image}" alt="${project.title}" loading="lazy" /></div>`;
    } else {
      const icon = project.icon || '🎮';
      thumbHTML = `<div class="card-thumb-placeholder">${icon}</div>`;
    }

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

  // ── Show more button ──────────────────────────────────────────────
  const showMoreBtn = document.createElement('button');
  showMoreBtn.className = 'show-more-btn';
  showMoreBtn.textContent = 'Show all projects';
  grid.parentElement.appendChild(showMoreBtn);

  let rowsExpanded = false;

  function applyRowLimit() {
    const cards = [...grid.querySelectorAll('.project-card:not(.hidden)')];
    if (!cards.length) { showMoreBtn.style.display = 'none'; return; }

    const firstTop = cards[0].getBoundingClientRect().top;
    const firstRowCards = cards.filter(c => Math.abs(c.getBoundingClientRect().top - firstTop) < 4);
    const hasMore = firstRowCards.length < cards.length;

    if (!rowsExpanded && hasMore) {
      cards.forEach(c => c.classList.toggle('row-hidden', !firstRowCards.includes(c)));
      showMoreBtn.textContent = `Show all projects ↓`;
      showMoreBtn.style.display = 'block';
    } else {
      cards.forEach(c => c.classList.remove('row-hidden'));
      showMoreBtn.style.display = hasMore ? 'block' : 'none';
      if (hasMore) showMoreBtn.textContent = `Show less ↑`;
    }
  }

  showMoreBtn.addEventListener('click', () => {
    rowsExpanded = !rowsExpanded;
    applyRowLimit();
  });

  // ── Filter + Search ───────────────────────────────────────────────
  let activeFilter = 'all';
  let searchQuery  = '';

  function setFilter(filter) {
    activeFilter = filter;
    filterBar.querySelectorAll('.filter-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.filter === filter)
    );
    applyFilters();
  }

  function applyFilters() {
    const isActive = searchQuery || activeFilter !== 'all';

    grid.querySelectorAll('.project-card').forEach(card => {
      const tags        = JSON.parse(card.dataset.tags);
      const matchFilter = activeFilter === 'all' || tags.includes(activeFilter);
      const matchSearch = !searchQuery ||
        card.dataset.title.includes(searchQuery) ||
        card.dataset.desc.includes(searchQuery);

      card.classList.toggle('hidden', !(matchFilter && matchSearch));
      card.classList.remove('row-hidden');
    });

    if (isActive) {
      // Show all matches, hide the show-more button
      showMoreBtn.style.display = 'none';
      rowsExpanded = false;
    } else {
      // Back to default — re-apply row limit
      rowsExpanded = false;
      applyRowLimit();
    }
  }

  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    setFilter(btn.dataset.filter);
  });

  document.getElementById('project-search').addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  // Apply row limit on load and on resize
  window.addEventListener('load', applyRowLimit);
  window.addEventListener('resize', () => {
    if (!searchQuery && activeFilter === 'all') applyRowLimit();
  });

  // ── Nav scroll highlight ──────────────────────────────────────────
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === '#' + entry.target.id
            ? 'var(--text)' : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

})();
