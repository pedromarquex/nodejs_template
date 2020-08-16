import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

import auth from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(auth);

// authenticated routes go here

export default routes;
