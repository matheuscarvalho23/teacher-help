import { Router } from 'express';

import studentsRouter from './students.routes';
import teacherRouter from './teacher.routes';
import classesRouter from './classes.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/teacher', teacherRouter);
routes.use('/classes', classesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;