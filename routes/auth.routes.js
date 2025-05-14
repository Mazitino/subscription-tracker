import { Router } from 'express';
import { signUp, signIn, signOut  } from '../controllers/auth.controller.js';

const authRouter = Router();

// Path: /api/v1/auth/ (POST)
authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);

export default authRouter;
