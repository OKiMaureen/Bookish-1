import { Router } from 'express';
import authRouter from './v1/authRouter';

const apiV1Router = Router();

apiV1Router.use('/v1/auth', authRouter);
export default apiV1Router;