import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.send('<h1>Hi</h1>'));

export default routes;