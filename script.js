
const sections = document.querySelectorAll("main section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const dir = entry.target.dataset.slide;
      if(dir === "left") entry.target.classList.add("slide-left");
      if(dir === "right") entry.target.classList.add("slide-right");
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));



function smoothScroll(targetId, duration) {
  const element = document.getElementById(targetId);
  const targetPos = element.getBoundingClientRect().top + window.scrollY;
  const startPos = window.scrollY;
  const distance = targetPos - startPos;
  let startTime = null;

  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d){
    t /= d/2;
    if(t < 1) return c/2*t*t + b;
    t--;
    return -c/2*(t*(t-2)-1) + b;
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('.hero-name').forEach(el=>{
  el.addEventListener('click', e=>{
    const targetSection = document.getElementById('about');
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const form = document.getElementById("contactForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message");

  if(!name || !email){
    msg.textContent = "Please fill all fields.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";
    form.reset();
  }
});
