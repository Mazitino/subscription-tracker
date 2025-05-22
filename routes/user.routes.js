import { Router } from "express"; 
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";
const userRouter = Router();  


// GET /users -> Get all users
userRouter.get('/', getUsers);

// GET /users/:id -> Get user by id
userRouter.get('/:id', authorize, getUser);

// POST /users -> Create new user
userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));

// PUT /users/:id -> Update user by id
userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));

// DELETE /users/:id -> Delete user by id
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;
