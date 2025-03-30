import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PayPalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  max-height: 600px;
  overflow-y: auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PayPalButton = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scriptId = "paypal-sdk";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://www.paypal.com/sdk/js?client-id=Afy5ygXTK30xda_qmJfN5gnw8OgNd1MgQqX4r1Ff-G2OaXRvTiSrl8gTH_Y40EhqFvfQQ-t8MhVfk_cB&buyer-country=US&currency=USD&components=buttons&enable-funding=venmo";
      script.async = true;
      script.onload = () => setLoaded(true);
      document.body.appendChild(script);
    } else {
      setLoaded(true); // Si el script ya está cargado, no lo volvemos a cargar.
    }

    return () => {
      // Limpiar PayPal cuando el componente se desmonte
      const container = document.getElementById("paypal-button-container");
      if (container) {
        container.innerHTML = ""; // Evitar errores de eliminación de nodos.
      }

      // Si quieres eliminar el script solo si fue añadido por este componente
      if (script && script.parentNode === document.body) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (loaded && window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: { value: '10.00' }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transacción completada por ${details.payer.name.given_name}`);
          });
        }
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
