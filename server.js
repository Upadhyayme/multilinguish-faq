require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const faqRoutes = require('./routes/faqRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/faqs', faqRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));