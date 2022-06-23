import { useEffect, useState } from "react";

function useScroll() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const listener = () => {
      setScroll(window.scrollY / window.innerHeight);
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return scroll;
}

export { useScroll };
