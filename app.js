// scroll effect animation for paragraphs

window.addEventListener("scroll", () => {
  let content = document.querySelector(".para");

  let contentPosition = content.getBoundingClientRect().top;

  let screenPostion = window.innerHeight / 1.7;

  if (contentPosition < screenPostion) {
    content.classList.add("activated");
  } else {
    content.classList.remove("activated");
  }
});

gsap.from(".pizza", {
  scrollTrigger: ".pizza",
  x: 700,
  opacity: 0,
  duration: 0.7,
});

gsap.from(".drinks", {
  scrollTrigger: ".drinks",
  x: -700,
  delay: 2,
  opacity: 0,
  duration: 0.7,
});

gsap.from(".desert", {
  scrollTrigger: ".desert",
  x: 700,
  opacity: 0,
  duration: 0.7,
});

gsap.from(".details", {
  scrollTrigger: ".details",
  opacity: 0,
  duration: 1,
  y: 80,
});

gsap.from(".one", {
  scrollTrigger: "#Ratings",
  opacity: 0,
  y: 50,
  duration: 0.5,
});

gsap.from(".two", {
  scrollTrigger: "#Ratings",
  delay: 5,
  opacity: 0,
  x: 50,
  duration: 0.5,
});

gsap.from(".three", {
  scrollTrigger: "#Ratings",
  opacity: 0,
  y: 50,
  duration: 0.5,
});
