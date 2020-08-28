import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

// import routes from './routes';
// import uploadConfig from './config/upload';
// import AppError from './errors/AppError';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
// app.use('/files', express.static(uploadConfig.directory));
// app.use(routes);

app.listen(3333, () => {
  console.log('🖥️  Server started on port 3333!');
});