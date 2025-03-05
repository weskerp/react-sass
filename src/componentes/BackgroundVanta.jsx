import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const BackgroundVanta = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: backgroundRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x370026,
          color1: 0xff0000, // Cor das aves
          color2: 0xffff00, // Cor secundária
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); 
    };
  }, [vantaEffect]);

  return <div className="background" ref={backgroundRef}></div>;
};

export default BackgroundVanta;
