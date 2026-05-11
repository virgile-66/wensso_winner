/* ===== WENSSO GOD WINNER – JavaScript Global ===== */

// Mobile menu
function toggleMenu(){
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('mobileMenu').classList.remove('open');
}

// Scroll reveal
document.addEventListener('DOMContentLoaded', function(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); }
    });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  // Active nav link based on current page filename
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === page){ a.classList.add('active'); }
  });
});
