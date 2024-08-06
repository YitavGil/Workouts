import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import WorkoutList from './components/WorkoutList';
import WorkoutForm from './components/WorkoutForm';
import WorkoutChart from './components/WorkoutProgress';
import { useDataHandler } from './hooks/useDataHandler';

const App: React.FC = () => {
  const { workouts, isLoading, addWorkout, updateWorkout, deleteWorkout } = useDataHandler();

  return (
    <AppContainer>
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      Workout Tracker
      </Header>
      <ContentContainer>
        <FixedSection>
          <WorkoutForm onSubmit={addWorkout} />
          <WorkoutChart workouts={workouts} />
        </FixedSection>
        <ScrollableSection>
          {isLoading ? (
            <p>Loading workouts...</p>
          ) : (
            <AnimatePresence>
            { workouts.length > 0 ?  <WorkoutList
                workouts={workouts}
                onUpdate={updateWorkout}
                onDelete={deleteWorkout}
              /> : <EmptyWorkouts>
                  Add a new workout
                </EmptyWorkouts>}
            </AnimatePresence>
          )}
        </ScrollableSection>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
`;

const Header = styled(motion.h1)`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #ff9a9e, #fad0c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 2rem;
  height: calc(100vh - 150px); // Adjust based on your header height
`;

const FixedSection = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const ScrollableSection = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 1rem;
`;

const EmptyWorkouts = styled.div`
display: flex;
justify-content: center;
font-style:italic;
`