const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";
}
});
});

sections.forEach(section=>{
section.style.opacity=0;
section.style.transform="translateY(30px)";
section.style.transition="0.6s ease";
observer.observe(section);
});

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{
card.addEventListener("mousemove",e=>{
const r=card.getBoundingClientRect();
const x=e.clientX-r.left;
const y=e.clientY-r.top;
const rx=(y/r.height-.5)*10;
const ry=(x/r.width-.5)*-10;
card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
});
card.addEventListener("mouseleave",()=>{
card.style.transform="rotateX(0) rotateY(0) scale(1)";
});
});

document.getElementById("contactForm").addEventListener("submit",e=>{
e.preventDefault();
const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const msg=document.getElementById("message");

if(!name||!email){
msg.textContent="Please complete all fields.";
msg.style.color="#ff6b6b";
}else{
msg.textContent="Message sent successfully!";
msg.style.color="#00ffcc";
e.target.reset();
}
});
