export interface Workout {
    id: number;
    date: string;
    exerciseName: string;
    duration: number;
    caloriesBurned: number;
  }
  
  export interface CreateWorkoutDTO {
    date: string;
    exerciseName: string;
    duration: number;
    caloriesBurned: number;
  }
  
  export interface UpdateWorkoutDTO {
    date?: string;
    exerciseName?: string;
    duration?: number;
    caloriesBurned?: number;
  }