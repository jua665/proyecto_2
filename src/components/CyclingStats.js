import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../userContext";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CyclingStats = () => {
  const { user } = useUser(); // Contexto para obtener el usuario
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showAll, setShowAll] = useState(true); // Nuevo estado para mostrar todos los días
  const [customRange, setCustomRange] = useState({
    start: "",
    end: "",
  });

  useEffect(() => {
    if (!user || !user._id) {
      console.error("No se proporcionó un userId válido");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/routes/user/${user._id}`
        );

        const processedData = response.data.map((route) => ({
          name: new Date(route.createdAt).toLocaleDateString("es-ES"), // Fecha completa como nombre
          distancia: route.distance,
          fecha: route.createdAt, // Guardar fecha original para filtros avanzados
        }));

        setData(processedData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    if (showAll) {
      setFilteredData(data); // Mostrar todos los datos
    } else if (customRange.start && customRange.end) {
      const startDate = new Date(customRange.start);
      const endDate = new Date(customRange.end);

      // Filtrar datos dentro del rango seleccionado
      const filtered = data.filter((item) => {
        const itemDate = new Date(item.fecha);
        return itemDate >= startDate && itemDate <= endDate;
      });

      setFilteredData(filtered);
    }
  }, [data, showAll, customRange]);

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setCustomRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Estadísticas de Ciclismo para {user?.nombre}
      </h2>

      {/* Controles de Filtros */}
      <div style={styles.filterContainer}>
        <label>
          <input
            type="radio"
            name="filterMode"
            checked={showAll}
            onChange={() => setShowAll(true)}
          />
          Mostrar Todos los Días
        </label>
        <label>
          <input
            type="radio"
            name="filterMode"
            checked={!showAll}
            onChange={() => setShowAll(false)}
          />
          Filtrar por Rango de Fechas
        </label>
      </div>

      {!showAll && (
        <div style={styles.rangeContainer}>
          <label>
            Inicio:
            <input
              type="date"
              name="start"
              value={customRange.start}
              onChange={handleRangeChange}
            />
          </label>
          <label>
            Fin:
            <input
              type="date"
              name="end"
              value={customRange.end}
              onChange={handleRangeChange}
            />
          </label>
        </div>
      )}

      {/* Gráfica */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={filteredData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{
              value: "Fecha",
              position: "insideBottomRight",
              offset: -10,
            }}
          />
          <YAxis
            label={{
              value: "Distancia (km)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="distancia"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
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
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  rangeContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
};

export default CyclingStats;
