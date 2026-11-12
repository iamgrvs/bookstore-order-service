const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const orderRoutes = require('./routes/orderRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get('/', (req, res) => {
  res.json({
    service: 'Order Service',
    version: '1.0.0',
    status: 'Running'
  });
});

app.use('/api', orderRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Order Service running on port ${PORT}`);
});

