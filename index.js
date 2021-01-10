// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    // you could also use addEventListener() instead
    window.onload = function() {
      
       // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
       window.requestAnimationFrame(function() {
      
		  // GSAP custom code goes here

			// gsap.registerPlugin(ScrollTrigger);

			let mySplitText3 = new SplitText('#ciao', { type: 'chars', charsClass: "parentClass" });
			let mySplitText2 = new SplitText('#ciao', { type: 'chars', charsClass: "childClass" });
			

			
			let mySplitText = new SplitText('#bio', { type: 'lines' });
			gsap.set('#bio', { autoAlpha: 1 });
			gsap.set('#ciao', { autoAlpha: 1 });

			var tl = gsap.timeline();

			tl.from(mySplitText2.chars, {
				duration:1,
				y: 200,
				ease: CustomEase.create("custom", "M0,0 C0.536,0.23 0.314,1 1,1 "),
				stagger: 0.03,
				// skewY: 6,
				// skewX: 6,
				// autoAlpha: 0,
				delay: 0.6,
			});

			// tl.to("#ciao", {
			// 	opacity: 1,
			// },'-=1.5');

			tl.from(mySplitText.lines, {
				duration: 1.2,
				y: 60,
				// ease: "power4.InOut",
				ease: 'power4.out',
				stagger: 0.06,
				skewY:0,
				skewX:0,
				autoAlpha: 0,
			},'-=0.2');

			tl.to("#bio", {
				opacity: 1,
			},'-=1.5');

			var tl2 = gsap.timeline({repeat:-1, ease: CustomEase.create("custom", "M0,0 C0.536,0.23 0.314,1 1,1 "),});

			tl2.to(".gsap-1", {
				y: 20,
				delay:2,
				
			})
			tl2.to(".gsap-1", {
				y: -20,
				delay:0.5,
			})
			tl2.to(".gsap-1", {
				y: 0,
				delay:0.5,
			})

			var tl3 = gsap.timeline({repeat:-1, ease: CustomEase.create("custom", "M0,0 C0.536,0.23 0.314,1 1,1 "),});

			tl3.to(".gsap-2", {
				y: -20,
				delay:2,
			})
			tl3.to(".gsap-2", {
				y: 20,
				delay:0.5,
			})
			tl3.to(".gsap-2", {
				y: 0,
				delay:0.5,
			})

			// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
			// let reducedVh = (vh / 100) * 85; 
			// console.log(vh);
			// console.log(reducedVh);

			// //reduce container
			// tl.to(".vh-100", {
			// 	duration: 1.3,
			// 	ease: 'power4.inOut',
			// 	height: reducedVh,
			// },'-=0.7');    
         
       });
    };
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
document.getElementById("navbar").style.top = "0";
} else {
document.getElementById("navbar").style.top = "-80px";
}
prevScrollpos = currentScrollPos;
}


function changePic1() {
	document.getElementById("profile").src = "http://res.cloudinary.com/vishakhanehe/image/upload/v1481149848/mickeywaving_ttphnm.gif";
	   }
	   
function changePic22(){
	document.getElementById("profile").src = "assets/davide.png";
}






