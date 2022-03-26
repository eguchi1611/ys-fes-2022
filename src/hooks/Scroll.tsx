import React, { useEffect, useState } from "react";

function useScrollY() {
  const [scroll, setScroll] = useState(0);

  const listener = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return scroll;
}

export { useScrollY };
