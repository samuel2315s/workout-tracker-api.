const express = require('express');
const router = express.Router();

let users = [
  {
    id: "1",
    name: "Carlos Navia",
    email: "carlos@example.com",
    role: "user",
    createdAt: "2025-09-12T12:00:00Z"
  }
];

// GET /api/v1/users
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// GET /api/v1/users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.status(200).json(user);
});

// POST /api/v1/users
router.post('/', (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }

  const newUser = {
    id: `${Date.now()}`,
    name,
    email,
    role: role || 'user',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;