const observerOptions = {
     root: null,
     threshold: 0,
     /* higher negative number, wait to load */
     rootMargin: '0px 0px -30px 0px'
 };

const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
             observer.unobserve(entry.target);
         }
     });
   }, observerOptions);

  window.addEventListener('DOMContentLoaded', (event) => {

  const sections = Array.from(document.querySelectorAll("*"));

  for (let section of sections) {
  observer.observe(section);
  }
});
