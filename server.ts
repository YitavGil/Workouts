import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './Config/database';
import workoutRoutes from './Routes/workoutRoutes';

const app = express();
app.use(cors());


app.use(bodyParser.json());


app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Database status:', config.database.status);
});