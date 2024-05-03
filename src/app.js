const mongoose = require('mongoose');


// MongoDB'ye bağlanma
mongoose.connect('mongodb://localhost:27017/yourdatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// MongoDB modeli tanımlama
const wordSchema = new mongoose.Schema({
  englishWord: { type: String, required: true },
  turkishTranslation: { type: String, required: true },
  usageInSentences: [{ type: String }],
  image: { type: String },
  pronunciation: { type: String },
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
