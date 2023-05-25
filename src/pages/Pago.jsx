import React from "react";
import CabeceraComponente from "../components/CabeceraComponente";
import FooterComponente from "../components/FooterComponente";
import game from "../img/game.png";
import banner from "../img/banner.png";
import plus from "../img/plus.png";
import oferta from "../img/ofert.png";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";

export const Pago = () => {
    const order = {
        customer: "123456",
        total: "1200.00",
        items: [
          {
            sku: "112",
            name: "Video Juego",
            price: "1000.00",
            quantity: 1,
            currency: "MXN",
          },
          {
            sku: "113",
            name: "DLC",
            price: "200.00",
            quantity: 1,
            currency: "MXN",
          },
        ],
      };
  return (
    <div>
      <CabeceraComponente />
      <div className="BodyComponente">
        <div class="table-responsive">
          <table>
            <tbody>
              <tr>
                <td>
                    <img src={game} alt="game" className="game" />
                    <img src={plus} alt="plus" className="plus" />
                    <img src={banner} alt="banner" className="plus" />
                    <img src={oferta} alt="oferta" className="plus" />
                    
                </td>
                <td><h3>Todo el juego con sus plus A TAN SOLO $1200</h3><PaypalCheckoutButton order={order} /></td>
              </tr>
              <h5>
                Correo : sb-pj6zf26031566@personal.example.com
                Contraseña: O^M!E5Ks
              </h5>
            </tbody>
          </table>
        </div>
      </div>
      <FooterComponente />
    </div>
  );
};

export default Pago;
