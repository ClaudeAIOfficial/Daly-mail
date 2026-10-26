/* Send saved-site buttons to the original Daily Mail website. */
document.addEventListener('click',function(e){
const el=e.target.closest('button,[role="button"]');if(!el)return;
const label=(el.textContent||el.getAttribute('aria-label')||'').trim().toLowerCase();
let dest='https://www.dailymail.com/home/index.html';
if(label.includes('search')){const q=document.querySelector('input[name="searchPhrase"]')?.value||'';dest='https://www.dailymail.com/home/search.html?sel=site&searchPhrase='+encodeURIComponent(q);}
else if(label.includes('royal'))dest='https://www.dailymail.com/news/royals/index.html';
else if(label.includes('sport'))dest='https://www.dailymail.com/sport/index.html';
else if(label.includes('news'))dest='https://www.dailymail.com/news/index.html';
else if(label.includes('video'))dest='https://www.dailymail.com/video/index.html';
e.preventDefault();e.stopImmediatePropagation();window.location.href=dest;
},true);