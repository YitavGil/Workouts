import express from 'express';
import { WorkoutController } from '../Controllers/workoutController';

const router = express.Router();

router.get('/', WorkoutController.getAllWorkouts);
router.post('/', WorkoutController.createWorkout);
router.put('/:id', WorkoutController.updateWorkout);
router.delete('/:id', WorkoutController.deleteWorkout);

export default router;