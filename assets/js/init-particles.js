jQuery(function($) {
	var wWidth = $(window).width(),
		dotsNB = 50,
		dotsDistance = 400;
	
	if(wWidth < 1024) {
		var dotsNB = 35,
			dotsDistance = 300;
	}
	if(wWidth < 768) {
		var dotsNB = 25,
			dotsDistance = 250;
	}
	
	
	particlesJS('particles-js', {
  particles: {
    color: '#757575',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: .5,
      anim: {
        enable: true,
        speed: .5,
        opacity_min: 0,
        sync: false
      }
    },
    size: 4,
    size_random: true,
    nb: dotsNB,
    line_linked: {
      enable_auto: true,
      distance: dotsDistance,
      color: '#757575',
      opacity: .62,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: .5
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 300
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" or false
    line_linked: {
      opacity: .75
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: false,
        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  //Retina Display Support
  retina_detect: true
});
	
});


