import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const PaypalCheckoutButton = ({order}) => {
  const paypalConf = {
    currency: 'MXN',
    env: 'sandbox',
    client:{
        sandbox: 'Ad6f4JEVSXAR_RqJxLYdQmFhCKbFaIbrbL-KG69_7iIyXzNYedCF_bVL4MpFxVJ8F7Y3EhOenFWPMTsv',
        production: '--',
    },
    style: {
        label: 'pay',
        size: 'medium',
        shape: 'rect',
        color: 'gold',
    }
  };

  const PayPalButton = paypal.Button.driver('react', {React, ReactDOM});

  const payment = (data, actions) =>{
    const payment = {
        transactions:[{
            amount:{
                total: order.total,
                currency: paypalConf.currency,
            },
            description:'Compra en Gamer Tag',
            custom: order.customer || '',
            item_list:{
                items: order.items
            },
        },],
        note_to_payer: 'Contactanos para cualquier aclaracion',
    };
    return actions.payment.create({payment});
  };

  const onAuthorize = (data, actions) => {
    return actions.payment.execute()
    .then(response =>{
        alert('El pago fue procesado correctamente, ID: '+ response.id);
    })
    .catch(error =>{
        alert('Ocurrio un error al procesar el pago con PayPal')
    });
  };

  const onError = (error) =>{
    alert('El pago no fue realizado, vuelva a intentarlo');
  };

  const onCancel = (data, actions) => {
    alert('Pago no realizado, el usuario cancelo el proceso')
  };

  return (
    <PayPalButton 
      env={paypalConf.env}
      client={paypalConf.client}
      payment={(data, actions) => payment(data, actions)}
      onAuthorize={(data, actions) => onAuthorize(data, actions)}
      onCancel={(data, actions) => onCancel(data, actions)}
      onError={(error) => onError(error)}
      style={paypalConf.style}
      commit
      locale="es_MX"
    />
  );
}

export default PaypalCheckoutButton;