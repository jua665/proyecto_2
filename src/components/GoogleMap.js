/*import React, { useEffect, useRef, useState } from "react";
import "./css/map.css"; // Importa el archivo CSS para los estilos

const MapComponent = () => {
  const mapRef = useRef(null); // Referencia para el contenedor del mapa
  const [origin, setOrigin] = useState(null); // Estado para el punto de origen
  const [destination, setDestination] = useState(null); // Estado para el punto de destino
  const directionsRendererRef = useRef(null); // Referencia para renderizar las direcciones

  useEffect(() => {
    if (window.google) {
      // Inicializa el mapa centrado en Guadalajara, Jalisco
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 20.6597, lng: -103.3496 }, // Coordenadas de Guadalajara
        zoom: 12, // Puedes ajustar el nivel de zoom según sea necesario
        mapId: "DEMO_MAP_ID",
      });

      // Crea el objeto DirectionsRenderer para mostrar la ruta
      directionsRendererRef.current = new window.google.maps.DirectionsRenderer();
      directionsRendererRef.current.setMap(map);

      // Agrega un listener para el clic en el mapa
      map.addListener("click", (event) => {
        const clickedLocation = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };

        // Si no se ha definido el origen, lo seleccionamos
        if (!origin) {
          setOrigin(clickedLocation);
          new window.google.maps.Marker({
            position: clickedLocation,
            map,
            label: "O", // Marcador de origen
          });
        } else if (!destination) {
          // Si ya se ha seleccionado el origen, seleccionamos el destino
          setDestination(clickedLocation);
          new window.google.maps.Marker({
            position: clickedLocation,
            map,
            label: "D", // Marcador de destino
          });
        }
      });
    }
  }, [origin, destination]);

  useEffect(() => {
    if (origin && destination) {
      // Si tenemos tanto el origen como el destino, calculamos la ruta
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING, // Puedes cambiar el modo de transporte
        },
        (response, status) => {
          if (status === "OK") {
            directionsRendererRef.current.setDirections(response);
          } else {
            console.error("Error al calcular la ruta: ", status);
          }
        }
      );
    }
  }, [origin, destination]);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "70vh", // Ajusta la altura del mapa
        }}
      />
      <div className="button-container">
        <button
          className="reset-button"
          onClick={() => {
            setOrigin(null);
            setDestination(null);
            directionsRendererRef.current.setDirections({ routes: [] }); // Limpia las rutas
          }}
        >
          Reiniciar Rutas
        </button>
      </div>
    </div>
  );
};

export default MapComponent;*/
