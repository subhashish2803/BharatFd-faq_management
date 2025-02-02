import { translateText } from '../utils/translate.mjs';

describe('Translation Tests', () => {
  test('should translate text correctly', async () => {
    const translatedText = await translateText('Hello', 'es'); // Example test
    expect(translatedText).toBe('Hola');
  });
});
