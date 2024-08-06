import { Workout, CreateWorkoutDTO, UpdateWorkoutDTO } from '../Types/workout';

let workouts: Workout[] = [];

export const WorkoutModel = {
  findAll: (): Workout[] => {
    return workouts;
  },

  create: (workoutData: CreateWorkoutDTO): Workout => {
    const newWorkout: Workout = {
      id: workouts.length + 1,
      ...workoutData
    };
    workouts.push(newWorkout);
    return newWorkout;
  },

  update: (id: number, workoutData: UpdateWorkoutDTO): Workout | null => {
    const index = workouts.findIndex(w => w.id === id);
    if (index === -1) return null;
    workouts[index] = { ...workouts[index], ...workoutData };
    return workouts[index];
  },

  delete: (id: number): boolean => {
    const initialLength = workouts.length;
    workouts = workouts.filter(w => w.id !== id);
    return workouts.length < initialLength;
  }
};