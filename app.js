const t1 = new TimelineMax({
delay:2
});
const t2 = new TimelineMax({

});
const t3 = new TimelineMax({

});
const t4 = new TimelineMax({

});

const s2h1 = document.querySelector('#section-2 h1');

const h1 = document.querySelector('.section-one-h1');






const myFullpage = new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	navigation: true,
	navigationPosition: 'right',
	responsiveWidth: 800,

	afterLoad: function (origin, destination, direction) {
		const sectionactive = fullpage_api.getActiveSection().index;

		console.log(sectionactive);
		if (sectionactive === 0 ) {
			document.querySelectorAll('#nav-bar .container ul li a').forEach((link) => {
				link.style.color = 'black';
			})
			document.querySelector('.logo').style.color = "white";
			document.querySelector('footer').style.color = "white";

		}
		else if(sectionactive === 1 || sectionactive === 2 ) {
			document.querySelectorAll('#nav-bar .container ul li a').forEach((link) => {
				link.style.color = 'black';
			})
			document.querySelector('.logo').style.color = "black";
			document.querySelector('footer').style.color = "black";



		} else {
			document.querySelectorAll('#nav-bar .container ul li a').forEach((link) => {
				link.style.color = 'white';
			})
			document.querySelector('.logo').style.color = "white";
			document.querySelector('footer').style.color = "white";

		}
		if (window.innerWidth < 801 && sectionactive === 1) {
			document.querySelector('.logo').style.opacity = "0";
			document.querySelector('footer').style.opacity = "0";
		} else if (window.innerWidth < 801 && sectionactive === 2) {
			document.querySelector('.logo').style.opacity = "0";
			document.querySelector('footer').style.opacity = "0";
		} else if (window.innerWidth < 801 && sectionactive === 0) {
			document.querySelector('.logo').style.opacity = "1";
			document.querySelector('footer').style.opacity = "1";
		} else if (window.innerWidth < 801 && sectionactive === 3) {
			document.querySelector('.logo').style.opacity = "0";
			document.querySelector('footer').style.opacity = "0";
		}


	},

	onLeave: function (origin, destination, direction) {

		if (window.innerWidth > 801) {
			t1.restart();
			t2.restart();
			t3.restart();
			t4.restart();
		}

		deleteLog = true;


	}



});



// Insert text before bullets
const nav = document.querySelector('#fp-nav');
const div = document.createElement('div');
const ul = document.querySelector('#fp-nav ul');
div.className = 'Scroll-text';
div.innerHTML = `Scroll`;
nav.insertBefore(div, ul);
console.log(div);



t1
.fromTo(h1, 1, {
		x: -1200,
		opacity: 0
	}, {
		x: 0,
		opacity: 1,
		delay: 0.3
	})
	.fromTo('.left p', 1, {
		opacity: 0,
		x: 1200
	}, {
		opacity: 1,
		x: 0,

	}, "-=1")
	.fromTo('.left a', 0.5, {
		opacity: 0
	}, {
		opacity: 1
	}).fromTo('.right h1', 1, {
		opacity: 0,
		y: 250,
		scale: 2
	}, {
		opacity: 1,
		y: 0,
		scale: 1
	})
	.fromTo('.part-1', 0.6, {
		opacity: 0,
		x: 250,
		ease: Sine.easeOut
	}, {
		opacity: 1,
		x: 0,
		ease: Sine.easeOut
	}, )
	.fromTo('.part-2', 0.6, {
		opacity: 0,
		x: 250,
		ease: Sine.easeOut
	}, {
		opacity: 1,
		x: 0,
		ease: Sine.easeOut
	},'-=0.3' )
	.fromTo('.part-3', 0.6, {
		opacity: 0,
		x: 250,
		ease: Sine.easeOut
	}, {
		opacity: 1,
		x: 0,
		ease: Sine.easeOut
	},'-=0.3' );
	



t2.fromTo(s2h1, 1, {
		y: -1200,
		opacity: 0


	}, {
		y: 0,
		opacity: 1,
		delay: 0.3
	})
	.fromTo('#section-2 p', 0.5, {
		y: 500,

	}, {
		y: 0,

	})
	.fromTo('#section-2 a', 0.5, {

		opacity: 0

	}, {

		opacity: 1

	})
	.fromTo('#section-2 .web-img', 0.5, {
		y: 350,
		opacity:0

	}, {
		y: 0,
		opacity:1

	},"-=1.2")
		.fromTo(' #section-2 .phone-img', 0.5, {
		y: -350,
		opacity:0	

	}, {
		y: 0,
		opacity:1


	},"-=1.2")
	.fromTo('#section-2 .circle', 0.5, {
		opacity: 0


	}, {
		opacity: 1


	},"-=1");



t3.fromTo('.services-text', 1, {

		y: 800,
		


	}, {

		y: 0,


	})
	.fromTo('.services-p',1, {

		y: 800,
	


	}, {

		y: 0,
		

	},"-=0.6").fromTo('.box-1', 1, {
		x: -300,
		opacity: 0


	}, {
		x: 0,
		opacity: 1

	})
	.fromTo('.box-2', 1, {
		y: 300,
		opacity: 0


	}, {
		y: 0,
		opacity: 1

	},'-=1')
	.fromTo('.box-3', 1, {
		x: 300,
		opacity: 0


	}, {
		x: 0,
		opacity: 1

	},'-=1').fromTo('.dsc', 0.5, {
		y:-200,

	}, {
		y:0,
	
	},)
	.fromTo('.flex i', 0.5, {
		y:200,

	}, {
		y:0,
	
	},"-=0.5").fromTo('.btn-service', 1, {
	opacity:0

	}, {
		opacity:1
	
	});




t4.fromTo('#section-4 .slider-bg', 1, {
		x: "-105%",
		opacity: 0


	}, {
		x: "105%",
		opacity: 1,

		delay: 0.3
	}).fromTo('#section-4 h1', 0.5, {
		x: -150,
		opacity: 0


	}, {
		x: 0,
		opacity: 1,
	})
	.fromTo('#section-4 .slider-bg-p', 1, {
		x: "-105%",
		opacity: 0


	}, {
		x: "105%",
		opacity: 1,
		delay: 0.3
	}, "-=1")
	.fromTo('#section-4 p', 1, {
		x: -150,
		opacity: 0


	}, {
		x: 0,
		opacity: 1,
	}, "-=0.5")
	.fromTo('#section-4 form', 0.7, {
		scale:0,
		y: 350,
		opacity: 0


	}, {
		scale:1,
		y: 0,
		opacity: 1,
	},"-=1")
	
	// loader



	setTimeout(()=>{
		const loader = document.querySelector('.loader');
		loader.style.opacity='0';
		loader.style.zIndex='-1';
	},1500)