const express = require('express');
const FAQ = require('../models/FAQ');
const redisClient = require('../utils/redis');
const { translateText } = require('../utils/translate');

const router = express.Router();

// Fetch FAQs with language support
router.get('/', async (req, res) => {
  const {lang='en'} = req.query;
  const cacheKey = faqs_${lang};

  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) return res.json(JSON.parse(cachedData));

    const faqs = await FAQ.find();
    const translatedFAQs = faqs.map(faq => faq.getTranslatedFAQ(lang));

    await redisClient.set(cacheKey, JSON.stringify(translatedFAQs), { EX: 3600 }); // Cache for 1 hour
    res.json(translatedFAQs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create an FAQ with automatic translation
router.post('/', async (req, res) => {
  try {
    const { question, answer } = req.body;
    
    const translations = {
      hi: { question: await translateText(question, 'hi'), answer: await translateText(answer, 'hi') },
      bn: { question: await translateText(question, 'bn'), answer: await translateText(answer, 'bn') },
    };

    const newFAQ = new FAQ({ question, answer, translations });
    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;