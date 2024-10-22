const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const caseRoutes = require('./routes/caseRoutes');
const vaccinationRoutes = require('./routes/vaccinationRoutes');
const resourceRoutes = require('./routes/resourceRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/covid/cases', caseRoutes);
app.use('/covid/vaccination-status', vaccinationRoutes);
app.use('/covid/hospitals/resources', resourceRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
