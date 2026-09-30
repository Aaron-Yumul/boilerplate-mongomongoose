require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connect(mongodb+srv://aaronjohnyumul526_db_user:whatthefuckmen@cluster0.rx9kmzb.mongodb.net/?appName=Cluster0, { useNewUrlParser: true, useUnifiedTopology: true });
