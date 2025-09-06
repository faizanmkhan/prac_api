// services/userService.js
import db from '../db.js';

export async function getAllUsers() {
  const [rows] = await db.query('SELECT * FROM user');
  return rows;
}

export async function getUser(id) {
  const [rows] = await db.query('SELECT * FROM user WHERE id = ?', [id]);
  return rows[0];
}

export async function createUser(name, email, role) {
  const [result] = await db.query(
    'INSERT INTO user (name, email, role) VALUES (?, ?, ?)',
    [name, email, role]
  );
  return { id: result.insertId, name, email, role };
}

export async function updateUser(id, name, email, role) {
  const [result] = await db.query(
    'UPDATE user SET name = ?, email = ?, role = ? WHERE id = ?',
    [name, email, role, id]
  );
  return result.affectedRows > 0;
}

export async function deleteUser(id) {
  const [result] = await db.query('DELETE FROM user WHERE id = ?', [id]);
  return result.affectedRows > 0;
}
