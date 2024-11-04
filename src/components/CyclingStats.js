import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Lunes', distancia: 5 },
  { name: 'Martes', distancia: 10 },
  { name: 'Miércoles', distancia: 15 },
  { name: 'Jueves', distancia: 20 },
  { name: 'Viernes', distancia: 20 },
  { name: 'Sábado', distancia: 30 },
  { name: 'Domingo', distancia: 35 },
];



const CyclingStats = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Estadísticas de Ciclismo</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="distancia" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '80%',
    margin: '0 auto',
    marginTop: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default CyclingStats;
