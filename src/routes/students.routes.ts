import { Router } from 'express';

import ensureAuth from '../middlewares/ensureAuth';
import CreateStudentService from '../services/CreateStudentService';

const studentsRouter = Router();

studentsRouter.use(ensureAuth);

studentsRouter.post('/', async (request, response) => {
  const { name, age, responsible, classroom, status, teacher_id } = request.body;

  const createStudent = new CreateStudentService();

  const student = await createStudent.execute({
    name,
    age,
    responsible,
    classroom,
    status,
    teacher_id
  });

  return response.json({
    status: 'success',
    message: 'Aluno criado com sucesso',
    return: student
  });
});

export default studentsRouter;