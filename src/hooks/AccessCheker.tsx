import { useContext, useEffect, useState } from "react";

function useAccessCheck() {
  const [access, setAccess] = useState(false);

  useEffect(() => {
    const accessed = sessionStorage.getItem("access");
    setAccess(!!accessed);
    sessionStorage.setItem("access", new Date().toString());
  }, []);

  return access;
}

export { useAccessCheck };
