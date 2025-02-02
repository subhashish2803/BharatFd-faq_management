// test/faqApi.test.js
import request from 'supertest';
import app from '../index.js'; // Import the Express app

// Mock the translate function to avoid actual translation during tests
jest.mock('../utils/translate.js', () => ({
  translateText: jest.fn((text, targetLanguage) => text), // Simply return the text as is
}));

describe('FAQ API', () => {
  describe('POST /api/faqs', () => {
    it('should create a new FAQ', async () => {
      const faqData = {
        question: 'What is Node.js?',
        answer: 'Node.js is a JavaScript runtime.',
        language: 'en',
      };

      const res = await request(app).post('/api/faqs').send(faqData);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('question', 'What is Node.js?');
      expect(res.body).toHaveProperty('answer', 'Node.js is a JavaScript runtime.');
      expect(res.body).toHaveProperty('language', 'en');
      expect(res.body).toHaveProperty('translations'); // Assuming translations is stored
    });

    it('should return 400 if required fields are missing', async () => {
      const res = await request(app).post('/api/faqs').send({
        question: 'What is Node.js?',
        language: 'en',
      });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('All fields are required.');
    });
  });

  describe('GET /api/faqs', () => {
    it('should fetch all FAQs', async () => {
      const res = await request(app).get('/api/faqs');

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true); // Ensure the response is an array
    });

    it('should fetch FAQs by language', async () => {
      const res = await request(app).get('/api/faqs?lang=en');

      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Array); // Response should be an array
      if (res.body.length > 0) {
        expect(res.body[0]).toHaveProperty('language', 'en');
      }
    });
  });
});
