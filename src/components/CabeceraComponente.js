import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import logo from "../img/logo.png";

function CabeceraComponente() {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };

  return (
    <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" /> Game Tactics
        </div>
        <div className="enlacesdiv">
          <Link to="/perfil" className="Enlaces">Mi perfil</Link>
          <Link to="/" className="Enlaces">Home</Link>
          <button onClick={logOut}>Cerrar Sesion</button>
        </div>
    </header>
  );
}

export default CabeceraComponente;
