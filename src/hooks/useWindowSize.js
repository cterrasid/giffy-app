import { useEffect, useState } from "react";

export default function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const removeWindowListener = async () => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    };
    removeWindowListener();
  }, []);

  const windowWidth = windowSize.width;
  const isMobile = windowWidth >= 320 && windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isLaptop = windowWidth >= 1024;

  return { isMobile, isTablet, isLaptop, windowWidth };
}
