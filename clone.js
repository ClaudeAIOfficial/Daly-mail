(() => {
  'use strict';
  const overlay = document.getElementById('dm-search-overlay');
  const input = document.getElementById('dm-search-input');
  const results = document.getElementById('dm-search-results');
  let stories = [];
  const safe = value => String(value || '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  fetch('./story-data.json').then(r => r.ok ? r.json() : []).then(data => { stories = data; }).catch(() => {});
  const render = () => {
    const q = input.value.trim().toLowerCase();
    const matches = stories.filter(s => !q || (`${s.title} ${s.description} ${s.category}`).toLowerCase().includes(q)).slice(0,35);
    results.innerHTML = matches.length ? matches.map(s => `<a href="./pages/${encodeURIComponent(s.slug)}.html">${s.image ? `<img src="./${safe(s.image)}" alt="">` : ''}<span><strong>${safe(s.title)}</strong><small>${safe(s.category)}</small></span></a>`).join('') : '<p style="padding:12px 0;color:#657387">No articles found.</p>';
  };
  const open = () => { overlay.classList.add('open'); document.body.style.overflow='hidden'; input.value=''; render(); input.focus(); };
  const close = () => { overlay.classList.remove('open'); document.body.style.overflow=''; };
  document.getElementById('dm-search-close').addEventListener('click',close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  input.addEventListener('input',render);
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open(); }
    else if (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) {e.preventDefault();open();}
    else if (e.key === 'Escape') close();
  });
  document.querySelectorAll('a[href=""],a[href="#"]').forEach(a => a.addEventListener('click',ev=>ev.preventDefault()));
  document.querySelectorAll('button[aria-label="Scroll channels right"],button[aria-label="Scroll channels left"]').forEach(btn => btn.addEventListener('click', () => {
    const element = btn.closest('[class*=subListWrapper]');
    if (element) element.scrollBy({left: btn.getAttribute('aria-label').includes('right') ? 400 : -400, behavior:'smooth'});
  }));
  document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => e.preventDefault()));
  // Allow search via the visual navigation context menu, without changing the copied masthead.
  const nav = document.querySelector('[data-mol-fe-xpmodule-navigation]');
  if (nav) nav.addEventListener('contextmenu', e => { e.preventDefault(); open(); });
})();
