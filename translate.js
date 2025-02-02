const axios = require('axios');

const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post(https://translation.googleapis.com/language/translate/v2, null, {
      params: {
        q: text,
        target: targetLang,
        key: process.env.GOOGLE_TRANSLATE_API_KEY,
      },
    });
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original if translation fails
  }
};

module.exports = { translateText };