// controllers/userController.js
import * as userService from '../services/userService.js';

export async function getUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get users' });
  }
}

export async function getUserById(req, res) {
  try {
    const user = await userService.getUser(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user' });
  }
}

export async function createUser(req, res) {
  const { name, email, role } = req.body;
  try {
    const newUser = await userService.createUser(name, email, role);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
}

export async function updateUser(req, res) {
  const { name, email, role } = req.body;
  try {
    const success = await userService.updateUser(req.params.id, name, email, role);
    if (!success) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
}

export async function deleteUser(req, res) {
  try {
    const success = await userService.deleteUser(req.params.id);
    if (!success) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
}
