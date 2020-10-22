import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Classe from '../models/Classe';
import Student from '../models/Student';

interface Request {
  date: Date;
  time: string;
  completed: number;
  teacher_id: string;
  student_id: string;
}

class CreateClasseService {
  public async execute(
    { date, time, completed, teacher_id, student_id }: Request
  ): Promise<Classe> {

    const classeRepository  = getRepository(Classe);
    // const studentRepository = getRepository(Student);

    // const checkStudent = await studentRepository.findOne({
    //   where: { student_id }
    // });

    // if (!checkStudent) {
    //   throw new AppError('Aluno não encontrado');
    // }

    const classe = classeRepository.create({
      date,
      time,
      completed,
      teacher_id,
      student_id,
    });

    await classeRepository.save(classe);

    return classe;
  }
}

export default CreateClasseService;