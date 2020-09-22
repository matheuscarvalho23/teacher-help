import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import Teacher from '../models/Teacher';

interface Request {
  name: string;
  status: boolean;
  username: string;
  email: string;
  password: string;
}

class CreateTeacherService {
  public async execute(
    { name, status, username, email, password }: Request
  ): Promise<Teacher> {
		const usersRepository = getRepository(Teacher);

		const checkUser = await usersRepository.findOne({
			where: { email }
		});

		if (checkUser) {
			throw new AppError('E-mail já está sendo utilizado');
		}

		const hashPassword = await hash(password,8);

		const teacher = usersRepository.create({
      name,
      status,
      username,
      email,
			password: hashPassword,
		});

		await usersRepository.save(teacher);

		return teacher;
	}
}

export default CreateTeacherService;