// routes/userRoutes.js
import { Router } from 'express';
import db from '../db.js';
import * as userService from '../services/userService.js';
import * as userController from '../controllers/userController.js';

const router = Router();

router.get('/', getUsers);

router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Service
async function getAllUsers() {
  const [rows] = await db.query('SELECT * FROM user');
  return rows;
}

// Controller
async function getUsers(req, res) {
  try {
    const users = await getAllUsers();
    console.log(res);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get users' });
  }
}




export default router;


