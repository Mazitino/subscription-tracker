import { Router } from "express"; 

const userRouter = Router();  


// GET /users -> Get all users
userRouter.get('/', (req, res) => res.send({ title: 'GET all users' }));

// GET /users/:id -> Get user by id
userRouter.get('/:id', (req, res) => res.send({ title: 'GET user details' }));

// POST /users -> Create new user
userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));

// PUT /users/:id -> Update user by id
userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));

// DELETE /users/:id -> Delete user by id
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;
