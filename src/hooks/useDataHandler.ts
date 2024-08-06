import { useState, useEffect } from 'react';
import { Workout, CreateWorkoutDTO, UpdateWorkoutDTO } from '../types';

export const useDataHandler = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWorkouts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/workouts');
      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const addWorkout = async (workout: CreateWorkoutDTO) => {
    try {
      const response = await fetch('http://localhost:3000/api/workouts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workout),
      });
      const newWorkout = await response.json();
      setWorkouts(prevWorkouts => [...prevWorkouts, newWorkout]);
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  };

  const updateWorkout = async (id: number, updatedWorkout: UpdateWorkoutDTO) => {
    try {
      const response = await fetch(`http://localhost:3000/api/workouts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedWorkout),
      });
      const updated = await response.json();
      setWorkouts(prevWorkouts => prevWorkouts.map(w => w.id === id ? updated : w));
    } catch (error) {
      console.error('Error updating workout:', error);
    }
  };

  const deleteWorkout = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/workouts/${id}`, { method: 'DELETE' });
      setWorkouts(prevWorkouts => prevWorkouts.filter(w => w.id !== id));
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  return { workouts, isLoading, fetchWorkouts, addWorkout, updateWorkout, deleteWorkout };
};