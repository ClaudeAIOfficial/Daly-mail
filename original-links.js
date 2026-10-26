/* Redirect saved-page controls to the original publisher. Fictional dog story remains local. */
(() => {
  const home='https://www.dailymail.com/home/index.html';
  function target(el){
    const label=(el.getAttribute('aria-label')||el.textContent||'').trim().toLowerCase();
    if(el.closest('form')||label.includes('search')) {
      const q=document.querySelector('input[name="searchPhrase"],input[name="query"]')?.value?.trim();
      return q?'https://www.dailymail.com/home/search.html?sel=site&searchPhrase='+encodeURIComponent(q):home;
    }
    if(label.includes('royal'))return 'https://www.dailymail.com/news/royals/index.html';
    if(label.includes('sport'))return 'https://www.dailymail.com/sport/index.html';
    if(label.includes('video')||label.includes('play'))return 'https://www.dailymail.com/video/index.html';
    if(label.includes('u.s')||label==='us')return 'https://www.dailymail.com/ushome/index.html';
    if(label.includes('news'))return 'https://www.dailymail.com/news/index.html';
    return home;
  }
  document.addEventListener('click',e=>{
    const el=e.target.closest('button,[role="button"]');
    if(!el||el.id==='dm-search-close')return;
    e.preventDefault();e.stopImmediatePropagation();
    window.location.assign(target(el));
  },true);
  document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{
    e.preventDefault();e.stopImmediatePropagation();window.location.assign(target(f));
  },true));
})();
