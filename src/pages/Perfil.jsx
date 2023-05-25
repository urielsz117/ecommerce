import React from "react";
import CabeceraComponente from "../components/CabeceraComponente";
import FooterComponente from "../components/FooterComponente";
import user from "../img/user.png";

export const Perfil = () => {
  return (
    <div>
      <CabeceraComponente />
      <div className="BodyComponente">
        {/* <div className="cols">
          <div className="foto">
            <img src={user} alt="oferta" className="foto" />
          </div>
          <div className="info">
            <input
              type="text"
              autocomplete="off"
              name="text"
              class="input"
              placeholder="Nombre"
            />
            <br />
            <input
              type="text"
              autocomplete="off"
              name="text"
              class="input"
              placeholder="Correo Electronico"
            />
            <br />
            <input
              type="text"
              autocomplete="off"
              name="text"
              class="input"
              placeholder="Direccion"
            />
            <br />
            <input
              type="text"
              autocomplete="off"
              name="text"
              class="input"
              placeholder="Telefono"
            />
          </div>
        </div> */}
        <div className="footer">
          <div className="nosotros">
            <div className="nosotros2">
                <img src={user} alt="oferta" className="foto" />
            </div>
          </div>
          <div className="formulario">
          <div className="info">
            <input
              type="text"
              autocomplete="off"
              name="text"
              class="input"
              placeholder="Nombre"
            />
            <br />
            <input
              type="text"
              autocomplete="off"
              name="text"
              class="input"
              placeholder="Correo Electronico"
            />
            <br />
            <input
              type="text"
              autocomplete="off"
              name="text"
              class="input"
              placeholder="Direccion"
            />
            <br />
            <input
              type="text"
              autocomplete="off"
              name="text"
              class="input"
              placeholder="Telefono"
            />
          </div>
          </div>
        </div>
      </div>
      <FooterComponente />
    </div>
  );
};

export default Perfil;
