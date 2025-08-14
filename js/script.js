(function(){
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a=> a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
      if(window.innerWidth <= 640) navLinks.classList.remove('open');
    }
  }));
})();