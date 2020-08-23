let mySplitText = new SplitText ("#header", { type: "words"});




var tl = gsap.timeline();
tl.from(mySplitText.words, {
    duration:1.2, 
    y:100, 
    opacity:0,
    // ease: "power4.InOut",
    ease: "power4.out",
    stagger: 0.03,
    skewY:3,
    skewX: 3,
    delay:0.4,
})