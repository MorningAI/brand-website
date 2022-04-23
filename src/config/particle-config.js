const particlesConfig = JSON.parse(`{
  "background": {
    "color": {
      "value": "transparent"
    },
    "image": "url('/img/nyancat-animated.gif')",
    "position": "-30% 85%",
    "repeat": "no-repeat",
    "size": "60%"
  },
  "fullScreen": {
    "zIndex": 1
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "repulse"
      },
      "onHover": {
        "mode": "grab"
      }
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 8,
        "size": 40,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "grab": {
        "distance": 200
      },
      "repulse": {
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      }
    }
  },
  "particles": {
    "color": {
      "value": "#000"
    },
    "links": {
      "color": {
        "value": "#000"
      },
      "distance": 150,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "direction": "left",
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "speed": 6,
      "straight": true
    },
    "opacity": {
      "value": 0.5,
      "animation": {
        "speed": 1,
        "minimumValue": 0.1
      }
    },
    "shape": {
      "options": {
        "star": {
          "sides": 5
        }
      },
      "type": "star"
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 1,
        "max": 4
      },
      "animation": {
        "speed": 40,
        "minimumValue": 0.1
      }
    }
  }
}`)
export default particlesConfig;
