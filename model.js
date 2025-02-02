const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }, // RichTextField for CKEditor
  translations: {
    hi: { question: String, answer: String },
    bn: { question: String, answer: String },
  },
});

FAQSchema.methods.getTranslatedFAQ = function (lang) {
  return this.translations[lang] || { question: this.question, answer: this.answer };
};

const FAQ = mongoose.model('FAQ', FAQSchema);
module.exports = FAQ;