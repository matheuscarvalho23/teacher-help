import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';
import Teacher from '../models/Teacher';

interface Request {
	email: string,
	password: string,
}

interface Response {
	teacher: Teacher;
	token: string;
}

class CreateAuthService {
	public async execute({ email, password }: Request): Promise<Response>{
		const teacherRepository = getRepository(Teacher);

		const teacher = await teacherRepository.findOne({ where: { email } });

		if (!teacher) {
			throw new AppError('Incorrect email/password combination.', 401);
		}

		const passwordMatched = await compare(password,teacher.password);

		if (!passwordMatched) {
			throw new AppError('Incorrect email/password combination.', 401);
		}

		const { secret, expiresIn } = authConfig.jwt;

		const token = sign({}, secret, {
			subject: teacher.id,
			expiresIn: expiresIn,
		})

		return {
      teacher,
      token
    }
	}
}

export default CreateAuthService;
