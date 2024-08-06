import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Workout } from '../types';


interface WorkoutChartProps {
  workouts: Workout[];
}

const WorkoutChart: React.FC<WorkoutChartProps> = ({ workouts }) => {
  const chartData = workouts
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map(workout => ({
      date: workout.date,
      duration: workout.duration,
      caloriesBurned: workout.caloriesBurned
    }));

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="caloriesBurned" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default WorkoutChart;

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 2rem;
  background: linear-gradient(45deg, #fbc2eb, #a6c1ee);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
