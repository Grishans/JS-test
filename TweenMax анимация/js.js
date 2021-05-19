///// Show Block
// var box1 = document.querySelector(".box1");
// var box2 = document.querySelector(".box2");
// var box3 = document.querySelector(".box3");
// var box4 = document.querySelector(".box4");
// var box5 = document.querySelector(".box5");
// var animated1 = gsap.to(".box1", {
//   duration: 1,
//   delay: 0.1,
//   // y: 100,
//   paused: true,
//   opacity: 1,
//   ease: "back.out(1.7)",
//   // repeat: 30,
// });
// var animated2 = gsap.to(".box2", {
//   duration: 1,
//   delay: 0.1,
//   // y: 100,
//   paused: true,
//   opacity: 1,
//   ease: "back.out(1.7)",
//   // repeat: 30,
// });
// var animated3 = gsap.to(".box3", {
//   duration: 1,
//   delay: 0.1,
//   // y: 100,
//   paused: true,
//   opacity: 1,
//   ease: "back.out(1.7)",
//   // repeat: 30,
// });
// var animated4 = gsap.to(".box4", {
//   duration: 1,
//   delay: 0.1,
//   // y: 100,
//   paused: true,
//   opacity: 1,
//   ease: "back.out(1.7)",
//   // repeat: 30,
// });
// var animated5 = gsap.to(".box5", {
//   duration: 1,
//   delay: 0.1,
//   // y: 100,
//   paused: true,
//   opacity: 1,
//   ease: "back.out(1.7)",
//   // repeat: 30,
// });

// document.addEventListener("scroll", () => {
//   showAnimation(box1, animated1);
//   showAnimation(box2, animated2);
//   showAnimation(box3, animated3);
//   showAnimation(box4, animated4);
//   showAnimation(box5, animated5);
// });

// function showAnimation(target, animName) {
//   if (target.getBoundingClientRect().top < 300) {
//     animName.play();
//   } else {
//     animName.reverse();
//   }
// }

///// ***Show Block

var trigger = document.querySelector(".boxTitle");
var tr = true;

var animated = gsap.to(".box__content", {
  duration: 0.5,
  delay: 0.1,
  height: "auto",
  paused: true,
  // repeat: 30,
  backgroundColor: "#f38630",
});

trigger.addEventListener("click", function () {
  if (tr) {
    animated.play();
    tr = !tr;
  } else {
    animated.reverse();
    tr = !tr;
  }
});
