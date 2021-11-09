import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import cors from 'cors';
import { ValidationError } from 'express-validation';
import mongoose, { ConnectOptions } from 'mongoose';

import router from 'src/routes';
import configs from 'src/configs';

const app = express();
const { PORT, ORIGINS, MONGODB_URL, MONGO_CONFIG } = configs;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ORIGINS,
  })
);

app.use('/api/biking', router);

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

mongoose
  .connect(MONGODB_URL, MONGO_CONFIG as ConnectOptions)
  .then(() => console.log('Connected to db '))
  .catch((err) => console.log('Failed to connect to db ', err.message));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
