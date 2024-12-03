import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/students/student.route';
import { UserRoutes } from './modules/user/user.route';
import globalErrorHandler from './middlewares/globalErrorHandler';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());
//application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World');
};

app.get('/', getAController);

app.use(globalErrorHandler);

export default app;
