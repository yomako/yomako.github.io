const options = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    themes: [
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "#000000"
          },
          particles: {
            color: {
              value: ["#ffffff", "#ff0000"]
            }
          }
        }
      }
    ],
    fpsLimit: 60,
    particles: {
      number: {
        value: 1,
        density: {
          enable: true,
          area: 800
        }
      },
      shape: {
        type: ["circle"]
      },
      opacity: {
        value: 1
      },
      size: {
        value: 30,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        out_mode: "out",
        outMode: 'bounce',
      },
      collisions: {
        enable: true
      },
    },
    interactivity: {
      detectsOn: "window",
    },
    detectRetina: true
  };
  
  export default options;