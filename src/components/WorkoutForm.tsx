import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CreateWorkoutDTO } from '../types';


interface WorkoutFormProps {
  onSubmit: (workout: CreateWorkoutDTO) => void;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ onSubmit }) => {
  const [workout, setWorkout] = useState<CreateWorkoutDTO>({
    date: '',
    exerciseName: '',
    duration: 0,
    caloriesBurned: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(workout);
    setWorkout({ date: '', exerciseName: '', duration: 0, caloriesBurned: 0 });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Input
        type="date"
        name="date"
        value={workout.date}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="exerciseName"
        value={workout.exerciseName}
        onChange={handleChange}
        placeholder="Exercise Name"
        required
      />
      <Label>duration</Label>
      <Input
        type="number"
        name="duration"
        value={workout.duration}
        onChange={handleChange}
        placeholder="Duration (minutes)"
        required
      />
      <Label>calories Burned</Label>
      <Input
        type="number"
        name="caloriesBurned"
        value={workout.caloriesBurned}
        onChange={handleChange}
        placeholder="Calories Burned"
        required
      />
      <Button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Add Workout
      </Button>
    </Form>
  );
};

export default WorkoutForm;

const Form = styled(motion.form)`
  background: linear-gradient(45deg, #fbc2eb, #a6c1ee);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled(motion.button)`
  background-color: #a6c1ee;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8faae5;
  }
`;

const Label = styled.label`
  color: black;
  -webkit-background-clip: text;
  text-transform: capitalize;
`;
