import React from "react";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
import CabeceraComponente from "../components/CabeceraComponente";
import FooterComponente from "../components/FooterComponente";
import game from "../img/game.png";
import banner from "../img/banner.png";
import plus from "../img/plus.png";
import oferta from "../img/ofert.png";
import { Link } from "react-router-dom";

export const Secret = () => {
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
    // <button onClick={logOut}>Cerrar Sesion</button>
    // <PaypalCheckoutButton order={order} />

    // <div>
    //   <h1>Pagina secreta</h1>
    //   <p><i class="fa-solid fa-phone"></i>   777 548 16 45 </p>
    //   <p><i class="fa-solid fa-envelope"></i> pizzaplus@gmail.com</p>
    // </div>
    <div>
      <CabeceraComponente />
      <div className="BodyComponente">
        {/* <div class="row">
          <div class="col">
            <img src={game} alt="game" className="game" />
            <img src={plus} alt="plus" className="plus" />
            <img src={banner} alt="banner" className="banner" />
            <img src={oferta} alt="oferta" className="oferta" />
          </div>
          <div className="informacion">
            <h1>
              Video Juego mas un DLC para que disfrutes de toda la experiencia
              que se vive, sumergete en el mundo de Halo...
            </h1>
            <h3>Tan solo $1200</h3>
            <Link to="/pago">Compralo ahora</Link>
          </div>
        </div> */}


        <div class="card">
          <div class="image"><img src={game} alt="game" className="game" /></div>
          <div class="content">
              <span class="title">
                Tan solo $1200
              </span>

            <p class="desc">
              Video Juego mas un DLC para que disfrutes de toda la experiencia
              que se vive, sumergete en el mundo de Halo...
            </p>

            <a href="#" class="action">
            <Link to="/pago">Compralo ahora</Link>
            </a>
          </div>
        </div>



      </div>
      <FooterComponente />
    </div>
  );
};
