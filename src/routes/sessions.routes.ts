import { Router } from 'express';

import CreateAuthService from '../services/CreateAuthService';

const sessionsRouter = Router();

// POST METHODS
sessionsRouter.post('/', async (request, response) => {
	const { email, password } = request.body;

	const authTeacher = new CreateAuthService();

	const { teacher, token } = await authTeacher.execute({
		email,
		password
	});

	delete teacher.password;

	return response.json({
		status: 'success',
		message: '',
		return: {
			teacher,
			token
		},
	});
});

export default sessionsRouter;
