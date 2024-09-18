import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandeler';
import { notFound } from './app/middlewares/notFound';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send(
    ' FlexFit Equipment Accessories delivers versatile, high-quality gear to elevate your fitness experience.!!!',
  );
});

app.use(globalErrorHandler);

//Not found
app.use(notFound);
export default app;
