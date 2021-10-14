gsap.registerPlugin(ScrollTrigger);

$(".link").click(function() {
  $(".link").removeClass("active");
  $(this).addClass("active");
});

TweenMax.from(".diamond-cursor", 1, {
  delay: 0.7,
  y: 10,
  opacity: 0,
  ease: Circ.easeInOut
});
TweenMax.from(".planet", 1, {
  delay: 0.7,
  y: 10,
  ease: Expo.easeInOut,
  opacity: 0
});
TweenMax.from(".nav .wew", 0.7, {
  delay: 0.4,
  y: "-30",
  opacity: 0,
  ease: Expo.easeInOut
});
TweenMax.from(
  [".main-text", ".metode", ".experience", ".download", ".logo"],
  0.7,
  {
    delay: 0.5,
    y: "50%",
    opacity: 0,
    ease: Expo.easeInOut
  },
  0.5
);

gsap.from([".deal", ".rocket"], 1.5, {
  delay: 1,
  y: "100%",
  opacity: 0,
  ease: Expo.easeInOut,
  scrollTrigger: {
    trigger: [".deal", ".rocket"]
  }
});

gsap.from(".step .satu", 0.5, {
  delay: 0.5,
  y: "100%",
  opacity: 0,
  ease: Expo.easeInOut,
  scrollTrigger: ".step .satu"
});
gsap.from(".step .dua", 0.5, {
  delay: 0.6,
  y: "100%",
  opacity: 0,
  ease: Expo.easeInOut,
  scrollTrigger: ".step .dua"
});
gsap.from(".step .tiga", 0.5, {
  delay: 0.7,
  y: "100%",
  opacity: 0,
  ease: Expo.easeInOut,
  scrollTrigger: ".step .tiga"
});
gsap.from(".step .empat", 0.5, {
  delay: 0.8,
  y: "100%",
  opacity: 0,
  ease: Expo.easeInOut,
  scrollTrigger: ".step .empat"
});
gsap.from(".step .lima", 0.5, {
  delay: 0.9,
  y: "100%",
  opacity: 0,
  ease: Expo.easeInOut,
  scrollTrigger: ".step .lima"
});

gsap.from(".img-phone", 1.5, {
  delay: 1,
  scrollTrigger: {
    trigger: ".img-phone"
  },
  opacity: 0,
  x: "100%"
});
gsap.from(".garis", 1.5, {
  delay: 1,
  scrollTrigger: {
    trigger: ".garis"
  },
  width: 0
});
