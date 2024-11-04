import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PayPalContainer = styled.div`
  width: 100%;
  max-width: 400px; /* Limita el ancho del contenedor */
  max-height: 600px; /* Limita la altura del contenedor */
  overflow-y: auto; /* Añade scroll si el contenido es muy alto */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PayPalButton = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=Afy5ygXTK30xda_qmJfN5gnw8OgNd1MgQqX4r1Ff-G2OaXRvTiSrl8gTH_Y40EhqFvfQQ-t8MhVfk_cB&buyer-country=US&currency=USD&components=buttons&enable-funding=venmo";
    script.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '10.00', // Monto a cobrar, ajustable
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transacción completada por ${details.payer.name.given_name}`);
          });
        },
      }).render('#paypal-button-container');
    }
  }, [loaded]);

  return (
    <PayPalContainer>
      <div id="paypal-button-container"></div>
    </PayPalContainer>
  );
};

export default PayPalButton;
