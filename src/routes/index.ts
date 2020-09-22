import { Router } from 'express';

import studentsRouter from './students.routes';
import teacherRouter from './teacher.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/teacher', teacherRouter);
routes.use('/sessions', sessionsRouter);

export default routes;