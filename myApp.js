require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.error('Mongo connection error:', err.message));

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Aaron",
    age: 22,
    favoriteFoods: ["rice", "adobo"]
  });

  person.save((err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
