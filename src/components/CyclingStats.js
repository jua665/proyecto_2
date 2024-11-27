import React, { useEffect, useState } from "react";
import { useUser } from '../userContext';
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
console.log("id",user?._id)
  const [users, setUsers] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Obtén los usuarios desde la API
    fetch(`http://localhost:5000/api/users/${user?._id}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);

        // Procesa los datos para la gráfica
        const cascoCounts = data.reduce((acc, user) => {
          const cascoId = user.casco_id || "Sin Casco";
          acc[cascoId] = (acc[cascoId] || 0) + 1;
          return acc;
        }, {});

        const formattedData = Object.entries(cascoCounts).map(
          ([cascoId, count]) => ({
            cascoId,
            count,
          })
        );

        setChartData(formattedData);
      })
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Usuarios por Casco</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="cascoId" label={{ value: "Casco ID", position: "insideBottom", dy: 10 }} />
          <YAxis label={{ value: "Cantidad de Usuarios", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" name="Usuarios" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CyclingStats;
