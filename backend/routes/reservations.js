const express = require('express');
const router = express.Router();
const db = require('../db');

// Post- create a reservation
router.post('/', (req, res) => {
  const { user_id, location, date, time } = req.body;
  const query = 'INSERT INTO reservations (user_id, location, date, time) VALUES (?, ?, ?, ?)';
  db.query(query, [user_id, location, date, time], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Reservation created', id: result.insertId });
  });
});

// Get- retrieve reservations
router.get('/', (req, res) => {
  const userId = req.query.user_id;
  const query = userId ? 'SELECT * FROM reservations WHERE user_id = ?' : 'SELECT * FROM reservations';
  db.query(query, userId ? [userId] : [], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Put- update a reservation by id
router.put('/:id', (req, res) => {
  const { location, date, time, status } = req.body;
  const { id } = req.params;
  const query = 'UPDATE reservations SET location = ?, date = ?, time = ?, status = ? WHERE id = ?';
  db.query(query, [location, date, time, status, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Reservation updated' });
  });
});

// Delete- Remove a reservation by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM reservations WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Reservation deleted' });
  });
});

module.exports = router;
