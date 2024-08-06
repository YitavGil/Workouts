import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Workout, UpdateWorkoutDTO } from '../types';


interface WorkoutListProps {
  workouts: Workout[];
  onUpdate: (id: number, workout: UpdateWorkoutDTO) => void;
  onDelete: (id: number) => void;
}

const WorkoutList: React.FC<WorkoutListProps> = ({ workouts, onUpdate, onDelete }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<UpdateWorkoutDTO>({});

  const handleEdit = (workout: Workout) => {
    setEditingId(workout.id);
    setEditForm(workout);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleEditSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    onUpdate(id, editForm);
    setEditingId(null);
  };

  return (
    <List>
      {workouts.map((workout) => (
        <ListItem
          key={workout.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <WorkoutInfo>
            <div>
              <h3>{workout.exerciseName}</h3>
              <p>Date: {workout.date}</p>
              <p>Duration: {workout.duration} minutes</p>
              <p>Calories Burned: {workout.caloriesBurned}</p>
            </div>
            <ButtonGroup>
              <Button onClick={() => handleEdit(workout)}>Edit</Button>
              <Button onClick={() => onDelete(workout.id)}>Delete</Button>
            </ButtonGroup>
          </WorkoutInfo>
          {editingId === workout.id && (
            <EditForm onSubmit={(e) => handleEditSubmit(e, workout.id)}>
              <Input
                type="date"
                name="date"
                value={editForm.date || ''}
                onChange={handleEditChange}
              />
              <Input
                type="text"
                name="exerciseName"
                value={editForm.exerciseName || ''}
                onChange={handleEditChange}
              />
              <Input
                type="number"
                name="duration"
                value={editForm.duration || ''}
                onChange={handleEditChange}
              />
              <Input
                type="number"
                name="caloriesBurned"
                value={editForm.caloriesBurned || ''}
                onChange={handleEditChange}
              />
              <Button type="submit">Save</Button>
              <Button type="button" onClick={() => setEditingId(null)}>Cancel</Button>
            </EditForm>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default WorkoutList;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled(motion.li)`
  background: linear-gradient(45deg, #a8edea, #fed6e3);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const WorkoutInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled(motion.button)`
  background-color: #ff9a9e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7e82;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const EditForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;
