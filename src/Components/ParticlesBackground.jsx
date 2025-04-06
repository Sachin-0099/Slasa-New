import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "#eaf3fb"
          }
        },
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ["#000000", "#3087d1", "#ffffff"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.3
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outMode: "bounce"
          },
          links: {
            enable: true,
            distance: 120,
            color: "#3087d1",
            opacity: 0.2,
            width: 1
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default ParticlesBackground;
