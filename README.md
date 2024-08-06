# Workout Tracker

## Overview

 Workout Tracker is a full-stack web application designed to help users track their workout routines and progress. Built with React and Node.js, this application offers a user-friendly interface for managing workout data and visualizing fitness progress over time.

## Features

- **Workout Logging**: Easily add, edit, and delete workout sessions.
- **Progress Visualization**: View your workout progress through interactive charts.
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices.
- **Data Persistence**: All workout data is stored securely and can be accessed across sessions.

## Tech Stack

### Frontend
- React
- TypeScript
- Styled Components
- Framer Motion for animations
- Recharts for data visualization
- Vite as the build tool

### Backend
- Node.js
- Express.js
- MongoDB (or your chosen database)

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- MongoDB (if using MongoDB as your database)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/YitavGil/Workouts.git
   cd Workouts
   ```

2. Install dependencies for both frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add necessary environment variables (e.g., DATABASE_URL, PORT)

4. Start the backend server:
   ```
   cd backend
   npm start
   ```

5. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173` (or the port Vite is running on)

## Deployment

The frontend is deployed on GitHub Pages. The backend needs to be deployed separately on a platform that supports Node.js applications (e.g., Heroku, DigitalOcean).

To deploy frontend changes:
```
npm run deploy
```

## Future Additions

### Calendar View for Workouts

- **Implementation**: Replace the current list view of workouts with a calendar interface using [react-big-calendar](https://github.com/jquense/react-big-calendar).
- **Benefits**: 
  - Improved visual representation of workout schedules
  - Easier tracking of workout frequency and patterns
  - Ability to view workouts in day, week, and month formats
  - Drag-and-drop functionality for easy rescheduling of workouts

### Other Planned Features

- User authentication and personalized profiles
- Integration with fitness wearables for automatic workout logging
- Social features to share and compare workouts with friends
- Customizable workout plans and goal setting
