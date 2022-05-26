import { useState } from "react";

function useToggleState(): [boolean, () => void] {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState((recent) => !recent);
  };

  return [state, toggle];
}

export { useToggleState };
