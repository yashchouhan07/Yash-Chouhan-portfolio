import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // const lenis = new Lenis({
    //   duration: 1.2,
    //   smoothWheel: true,
    //   wheelMultiplier: 1,
    //   touchMultiplier: 2,
    //   infinite: false,
    // });
    const lenis = new Lenis({
  duration: 1.8,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  wheelMultiplier: 0.8,
  touchMultiplier: 2,
});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}