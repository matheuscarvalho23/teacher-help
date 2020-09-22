import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Student from '../models/Student';

interface Request {
  name: string;
  age: number;
  responsible: string;
  classroom: string;
  status: boolean;
  teacher_id: string
}

class CreateStudentService {
  public async execute(
    { name, age, responsible, classroom, status, teacher_id }: Request
  ): Promise<Student> {

    const studentRepository = getRepository(Student);

    const checkName = await studentRepository.findOne({
      where: { name }
    });

    if (checkName) {
      throw new AppError('Já existe um aluno com esse nome');
    }

    const student = studentRepository.create({
      name,
      age,
      responsible,
      classroom,
      status,
      teacher_id
    });

		await studentRepository.save(student);

    return student;
  }
}

export default CreateStudentService;