import { Router } from 'express';

import ensureAuth from '../middlewares/ensureAuth';
import CreateClasseService from '../services/CreateClasseService';

const classesRouter = Router();

classesRouter.use(ensureAuth);

classesRouter.post('/', async (request, response) => {
  const { date, time, completed, teacher_id, student_id } = request.body;

  const createStudent = new CreateClasseService();

  const classe = await createStudent.execute({
    date,
    time,
    completed,
    teacher_id,
    student_id,
  });

  return response.json({
    status: 'success',
    message: 'Aula criada com sucesso, não se atrase !',
    return: classe
  });
});

export default classesRouter;