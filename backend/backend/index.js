const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ msg: 'pong', time: new Date().toISOString() });
});

// example user-profile route
app.get('/api/profile', (req, res) => {
  res.json({ username: 'demo-user', role: 'User' });
});

// health check endpoint for ALB
app.get('/health', (req, res) => res.status(200).send('OK'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
