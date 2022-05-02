import { useAuth } from "providers/AuthProvider";
import React from "react";
import { login, logout } from "utils/Authentication";

function LoginButton() {
  const user = useAuth();

  const handleClick = () => {
    if (!user) {
      login();
    } else {
      logout();
    }
  };

  return (
    <button className="text-xl" onClick={handleClick}>
      {user ? "ログアウト" : "ログイン"}
    </button>
  );
}

export default LoginButton;
