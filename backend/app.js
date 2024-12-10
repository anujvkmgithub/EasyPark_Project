const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reservationRoutes = require('./routes/reservations');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/reservations', reservationRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
