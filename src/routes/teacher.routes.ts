import { Router } from 'express';

import CreateTeacherService from '../services/CreateTeacherService';

const teacherRoutes = Router();

teacherRoutes.post('/', async (request, response) => {
	const { name, status, username, email, password } = request.body;

	const createTeacher = new CreateTeacherService();

	const teacher = await createTeacher.execute({
		name,
    status,
    username,
    email,
    password
	});

	delete teacher.password;

	return response.json({
		status: 'success',
		message: 'Professor criado com sucesso !',
		return: teacher,
	});
});

export default teacherRoutes;
