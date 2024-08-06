import { Request, Response } from 'express';
import { WorkoutModel } from '../Models/workoutModel';
import { CreateWorkoutDTO, UpdateWorkoutDTO } from '../Types/workout';

export const WorkoutController = {
  getAllWorkouts: (req: Request, res: Response) => {
    try {
      const workouts = WorkoutModel.findAll();
      res.json(workouts);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching workouts', error });
    }
  },

  createWorkout: (req: Request, res: Response) => {
    try {
      const workoutData: CreateWorkoutDTO = req.body;
      const newWorkout = WorkoutModel.create(workoutData);
      res.status(201).json(newWorkout);
    } catch (error) {
      res.status(400).json({ message: 'Error creating workout', error });
    }
  },

  updateWorkout: (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const workoutData: UpdateWorkoutDTO = req.body;
      const updatedWorkout = WorkoutModel.update(id, workoutData);
      if (updatedWorkout) {
        res.json(updatedWorkout);
      } else {
        res.status(404).json({ message: 'Workout not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error updating workout', error });
    }
  },

  deleteWorkout: (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = WorkoutModel.delete(id);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Workout not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error deleting workout', error });
    }
  }
};