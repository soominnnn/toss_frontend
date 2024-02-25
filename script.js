window.addEventListener('scroll', function() {
  const HEADER = this.document.getElementById('header');
  let scrollPosition = window.scrollY;

  if(scrollPosition > 50) {
    HEADER.classList.add('scrolled');
  } else {
    HEADER.classList.remove('scrolled');
  }
});