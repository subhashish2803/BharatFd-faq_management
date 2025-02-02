import translate from 'google-translate-api-x';

// Translate text to the target language
export const translateText = async (text, targetLanguage = 'en') => {
  try {
    const response = await translate(text, { to: targetLanguage });
    return response.text;
  } catch (error) {
    console.error('Error during translation:', error);
    return text; // Fallback to original text if translation fails
  }
};
