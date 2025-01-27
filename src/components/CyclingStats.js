import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../userContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CyclingStats = () => {
  const { user } = useUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!user || !user._id) {
      console.error("No se proporcionó un userId válido");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/routes/user/${user._id}`);

        // Filtrar rutas completadas y procesar datos
        const processedData = response.data
          .filter((route) => route.status === "Completed") // Solo rutas finalizadas
          .map((route) => ({
            day: new Date(route.createdAt).toLocaleDateString("es-ES", {
              weekday: "long",
            }), // Día de la semana
            distancia: route.distance, // Distancia recorrida
          }));

        // Agrupar por día y sumar las distancias
        const groupedData = processedData.reduce((acc, curr) => {
          const existingDay = acc.find((item) => item.day === curr.day);
          if (existingDay) {
            existingDay.distancia += curr.distancia; // Sumar distancias
          } else {
            acc.push({ day: curr.day, distancia: curr.distancia });
          }
          return acc;
        }, []);

        setData(groupedData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Rutas Finalizadas por Día de la Semana</h2>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" label={{ value: "Día de la Semana", position: "insideBottomRight", offset: -10 }} />
          <YAxis label={{ value: "Distancia (km)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="distancia" fill="#8884d8" name="Distancia Recorrida" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "80%",
    margin: "0 auto",
    marginTop: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

export default CyclingStats;
