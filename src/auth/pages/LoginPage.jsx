import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navLogin = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Usuario');

    navLogin(lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>
      <button className="btn btn-info" onClick={onLogin}>Login</button>
    </div>
  )
}
