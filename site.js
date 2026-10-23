
// Minimal enhancement: mobile menu and automatically updated footer year.
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());


// Featured-paper carousel: keyboard/touch independent, no autoplay.
(function(){
  const slides=Array.from(document.querySelectorAll('.journal-slide'));
  const dots=Array.from(document.querySelectorAll('.journal-dot'));
  const current=document.getElementById('journal-current');
  if(!slides.length)return;
  let index=0;
  function show(n){
    index=(n+slides.length)%slides.length;
    slides.forEach((slide,i)=>{const active=i===index;slide.classList.toggle('is-active',active);slide.setAttribute('aria-hidden',String(!active));slide.querySelectorAll('a').forEach(a=>{a.tabIndex=active?0:-1;});});
    dots.forEach((dot,i)=>{const active=i===index;dot.classList.toggle('is-active',active);dot.setAttribute('aria-current',String(active));});
    if(current) current.textContent=String(index+1).padStart(2,'0');
  }
  document.getElementById('journal-prev')?.addEventListener('click',()=>show(index-1));
  document.getElementById('journal-next')?.addEventListener('click',()=>show(index+1));
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>show(i)));
  document.querySelector('.journal-showcase')?.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(index-1);else if(e.key==='ArrowRight')show(index+1)});
  show(0);
})();
// Bibliography live search and journal/conference filter.
(function(){
  const field=document.getElementById('pub-search');
  const filters=Array.from(document.querySelectorAll('.pub-filter'));
  const groups=Array.from(document.querySelectorAll('.pub-group'));
  const counter=document.getElementById('pub-results');
  const noResults=document.getElementById('pub-no-results');
  if(!field)return;
  let category='all';
  function update(){
    const query=field.value.trim().toLowerCase().normalize('NFKD');let total=0;
    groups.forEach(group=>{
      const categoryMatches=category==='all'||category===group.dataset.category;
      let visible=0;
      let lastYear=null;
      group.querySelectorAll('.pub-entry,.year-divider').forEach(item=>{
        if(item.classList.contains('year-divider')){lastYear=item;item.hidden=true;return;}
        const matches=categoryMatches && item.dataset.search.normalize('NFKD').includes(query);
        item.hidden=!matches;
        if(matches){visible++;if(lastYear)lastYear.hidden=false;}
      });
      group.hidden=!categoryMatches||visible===0;
      total+=visible;
    });
    counter.textContent='Showing '+total+' publication'+(total===1?'':'s');
    noResults.hidden=total!==0;
    filters.forEach(btn=>{let active=btn.dataset.filter===category;btn.classList.toggle('is-active',active);btn.setAttribute('aria-pressed',String(active));});
  }
  field.addEventListener('input',update);
  filters.forEach(btn=>btn.addEventListener('click',()=>{category=btn.dataset.filter;update();}));
  update();
})();

// Enlarge research statement figures without navigation or external dependencies.
(function(){
  const dialog=document.getElementById('research-lightbox');
  const picture=document.getElementById('research-lightbox-img');
  const caption=document.getElementById('research-lightbox-caption');
  const close=document.getElementById('research-lightbox-close');
  if(!dialog || !picture || !caption) return;
  document.querySelectorAll('.research-figure-button').forEach(button=>{
    button.addEventListener('click',()=>{
      const img=button.querySelector('img');
      picture.src=img.currentSrc || img.src;
      picture.alt=img.alt;
      caption.textContent=button.dataset.figureCaption || '';
      if(typeof dialog.showModal==='function') dialog.showModal();
    });
  });
  close?.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
})();

// Back-to-top fix: the scroll target must be at the document start, not on
// the sticky header (which remains in view while the page is scrolled).
document.querySelectorAll('.site-footer a[href="#top"]').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });
});
