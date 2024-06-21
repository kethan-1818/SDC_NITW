import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  // This should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    "autoPlay": true,
    "background": {
      "color": {
        "value": ""
      },
      "image": "",
      "position": "",
      "repeat": "",
      "size": "",
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "clear": true,
    "defaultThemes": {},
    "delay": 0,
    "fullScreen": {
      "enable": true,
      "zIndex": 0
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": true,
          "mode": "repulse"
        },
        "onDiv": {
          "selectors": [],
          "enable": false,
          "mode": [],
          "type": "circle"
        },
        "onHover": {
          "enable": true,
          "mode": "grab",
          "parallax": {
            "enable": false,
            "force": 2,
            "smooth": 10
          }
        },
        "resize": {
          "delay": 0.5,
          "enable": true
        }
      },
      "modes": {
        "trail": {
          "delay": 1,
          "pauseOnStop": false,
          "quantity": 1
        },
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "easing": "ease-out-quad",
          "factor": 1,
          "maxSpeed": 50,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "mix": false,
            "selectors": []
          }
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 150,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 0.3
          }
        },
        "push": {
          "default": true,
          "groups": [],
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "selectors": []
          }
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        }
      }
    },
    "manualParticles": [],
    "particles": {
      "bounce": {
        "horizontal": {
          "value": 0
        },
        "vertical": {
          "value": 0
        }
      },
      "collisions": {
        "absorb": {
          "speed": 2
        },
        "bounce": {
          "horizontal": {
            "value": 1
          },
          "vertical": {
            "value": 1
          }
        },
        "enable": false,
        "maxSpeed": 50,
        "mode": "bounce",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": "#FFFFFF",
        "animation": {
          "h": {
            "count": 0,
            "enable": true,
            "speed": 30,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          },
          "s": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          },
          "l": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          }
        }
      },
      "effect": {
        "close": true,
        "fill": true,
        "options": {},
        "type": []
      },
      "groups": {},
      "move": {
        "angle": {
          "offset": 0,
          "value": 90
        },
        "attract": {
          "distance": 200,
          "enable": false,
          "rotate": {
            "x": 3000,
            "y": 3000
          }
        },
        "center": {
          "x": 50,
          "y": 50,
          "mode": "percent",
          "radius": 0
        },
        "decay": 0.1,
        "distance": {},
        "direction": "none",
        "drift": 0,
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "inverse": false,
          "maxSpeed": 200
        },
        "path": {
          "clamp": true,
          "delay": {
            "value": 0
          },
          "enable": false,
          "options": {}
        },
        "outModes": {
          "default": "bounce",
          "bottom": "destroy",
          "left": "destroy",
          "right": "destroy",
          "top": "none"
        },
        "random": true,
        "size": false,
        "speed": 1,
        "spin": {
          "acceleration": 0,
          "enable": false
        },
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fill": {}
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": true
        },
        "limit": {
          "mode": "delete",
          "value": 0
        },
        "value": 150
      },
      "opacity": {
        "value": 1,
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 2,
          "decay": 0,
          "delay": 0,
          "sync": false,
          "mode": "auto",
          "startValue": "random",
          "destroy": "none"
        }
      },
      "reduceDuplicates": false,
      "shadow": {
        "blur": 0,
        "color": {
          "value": "#000"
        },
        "enable": false,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "shape": {
        "close": true,
        "fill": true,
        "options": {},
        "type": "circle"
      },
      "size": {
        "value": {
          "min": 1,
          "max": 3
        },
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 5,
          "decay": 0,
          "delay": 0,
          "sync": false,
          "mode": "auto",
          "startValue": "random",
          "destroy": "none"
        }
      },
      "stroke": {
        "width": 0,
        "color": {
          "value": "",
          "animation": {
            "h": {
              "count": 0,
              "enable": false,
              "speed": 0,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "mode": "auto"
            },
            "s": {
              "count": 0,
              "enable": false,
              "speed": 0,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "mode": "auto"
            },
            "l": {
              "count": 0,
              "enable": false,
              "speed": 0,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "mode": "auto"
            }
          }
        }
      },
      "zIndex": {
        "value": 0,
        "opacityRate": 1,
        "sizeRate": 1,
        "velocityRate": 1
      },
      "life": {
        "count": 0,
        "delay": {
          "value": 0,
          "sync": false
        },
        "duration": {
          "value": 0,
          "sync": false
        }
      },
      "rotate": {
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 0,
          "decay": 0,
          "delay": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false,
        "value": 0
      },
      "destroy": {
        "mode": "none",
        "split": {
          "count": 1,
          "factor": {
            "value": 3,
            "div": {
              "value": 3
            }
          },
          "rate": {
            "value": {
              "min": 4,
              "max": 9
            },
            "div": {
              "value": 3
            }
          },
          "sizeOffset": true
        }
      },
      "roll": {
        "darken": {
          "enable": false,
          "value": 0
        },
        "enable": false,
        "enlighten": {
          "enable": false,
          "value": 0
        },
        "mode": "vertical",
        "speed": 25
      },
      "tilt": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 0,
          "decay": 0,
          "delay": 0,
          "sync": false
        },
        "direction": "clockwise",
        "enable": false
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      },
      "wobble": {
        "distance": 5,
        "enable": false,
        "speed": {
          "angle": 50,
          "move": 10
        }
      },
      "orbit": {
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": false
        },
        "enable": false,
        "opacity": 1,
        "rotation": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 45
        },
        "width": 1
      },
      "links": {
        "blink": false,
        "color": {
          "value": "#fff"
        },
        "consent": false,
        "distance": 150,
        "enable": true,
        "frequency": 1,
        "opacity": 0.4,
        "shadow": {
          "blur": 5,
          "color": {
            "value": "#00ff00"
          },
          "enable": false
        },
        "triangles": {
          "enable": false,
          "frequency": 1
        },
        "width": 1,
        "warp": false
      },
      "repulse": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "enabled": false,
        "distance": 1,
        "duration": 1,
        "factor": 1,
        "speed": 1
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "smooth": false,
    "style": {},
    "themes": [],
    "zLayers": 100
  };

  return (
    <Particles
      id="tsparticles"
      init={initParticlesEngine}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;
