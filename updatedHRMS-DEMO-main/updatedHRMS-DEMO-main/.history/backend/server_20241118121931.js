const express = require('express');
const cors = require('cors');
const allowanceRoutes = require('./routes/allowanceRoutes');
const connectDB = require('./config/db');

const dotenv = require('dotenv');

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', allowanceRoutes);

//app.use('/api/allowances', allowanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

