const observerOptions = {
     root: null,
     threshold: 0.8,
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

// Jump Audio to Timestap
function audioTime(min, sec) {
  var timeStamp = min*60 + sec;
  document.getElementById("myAudio").currentTime = timeStamp;
}
