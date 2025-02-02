# BharatFd-faq_management
BharatFd - Backend API Hiring Test
This project provides a backend API for managing FAQs with multilingual support and caching. It allows users to create, retrieve, and manage frequently asked questions (FAQs) in multiple languages.

Tech Stack
Node.js: JavaScript runtime environment
Express.js: Web framework for Node.js
MongoDB: NoSQL database for storing FAQ data
Mongoose: MongoDB object modeling tool
Google Translate API-X: Translation service to translate FAQ content
Node-Cache: In-memory caching for improved performance
Docker: Containerization for deployment
Jest: Testing framework
Redis (optional): Cache layer for storing frequently accessed data
Installation and Setup
1. Clone the repository:

git clone https://github.com/subhashish2803/BharatFd-faq_management.git
2. Navigate into the project directory:

cd backend-api
3. Install dependencies:

npm install
4. Create a .env file in the root directory and add the following environment variables:

URI=mongodb+srv://ashu:ashu1234@cluster0.k5o2w.mongodb.net/mydb?retryWrites=true&w=majority
PORT=4001
Replace your_mongo_connection_string with your MongoDB URI connection string.

5. Start the application:

npm start
The server will start on port 4000 by default. If you have set a different port in the .env file, it will use that.

6. Access the API:
Open a browser and go to http://localhost:40001/api/faqs
 or 4000 to access the API.

API Endpoints
1. POST /api/faqs
Creates a new FAQ.

Request Body:

{
  "question": "What is the purpose of this API?",
  "answer": "This API helps in managing frequently asked questions.",
  "language": "en"
}
Response:

{
  "_id": "60e451f5b3f45c0b4a34b64d",
  "question": "What is the purpose of this API?",
  "answer": "This API helps in managing frequently asked questions.",
  "language": "en",
  "translations": {
    "es": "¿Cuál es el propósito de esta API?"
  },
  "createdAt": "2025-02-02T12:30:00.000Z",
  "updatedAt": "2025-02-02T12:30:00.000Z"
}
2. GET /api/faqs
Fetches all FAQs or FAQs by language.

Query Parameters:
lang: (Optional) The language of the FAQs to fetch.
Response:

[
  {
    "_id": "60e451f5b3f45c0b4a34b64d",
    "question": "What is the purpose of this API?",
    "answer": "This API helps in managing frequently asked questions.",
    "language": "en",
    "translations": {
      "es": "¿Cuál es el propósito de esta API?"
    }
  }
]
Testing
Running Tests
To run tests for the project, Jest is used as the testing framework.

Run Tests:

npm test
This will run all the tests in the __tests__ folder. If there are no tests yet, you will get a message stating "No tests found."

Test Example:
Here is an example test that checks if the translation function works correctly:

js
Copy
Edit
import { translateText } from './utils/translate.js';

describe('Translation Tests', () => {
  test('should translate text correctly', async () => {
    const translatedText = await translateText('Hello', 'es'); // Spanish translation
    expect(translatedText).toBe('Hola');
  });
});
Docker Deployment
Docker allows you to package your application in a container, making it easy to deploy across different environments.

1. Build Docker Image:
Run the following command to build the Docker image for your application:


docker build -t backend-app .
2. Run Docker Container:
Run the following command to start a Docker container:


docker run -p 4000:4000 backend-app
This will expose your application on port 4000.

3. Docker Compose (Optional):
You can use Docker Compose to set up both the application and MongoDB in containers.

docker-compose.yml:
yaml
Copy
Edit
version: '3'
services:
  app:
    build: .
    ports:
      - "4000:4001"
    depends_on:
      - mongo
  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - ./data/db:/data/db
Run with Docker Compose:
To start the application and MongoDB together using Docker Compose, run:


docker-compose up --build
Version Control
Clone the repository:

git clone https://github.com/yourusername/BharatFd-faq_management.git
Making Changes:
After making changes, stage your files and commit them:


git add .
git commit -m "Implemented multilingual FAQ support"
Push changes to GitHub:

git push origin main
Pull Latest Changes:
To fetch the latest changes from the repository:


git pull origin main
Contributing
We welcome contributions to this project! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and write tests for new functionality.
Submit a pull request with a description of your changes.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Folder Structure Overview:

backend-api/
│
├── config/
│   ├── db.js               # MongoDB database connection
│
├── models/
│   ├── Faq.js              # Mongoose model for FAQs
│
├── routes/
│   ├── faqRoutes.js        # Routes for handling FAQ CRUD operations
│
├── utils/
│   ├── translate.js        # Translation utility (Google Translate API)
│
├── __tests__/
│   ├── translate.test.js   # Jest tests for translation functions
│
├── .env                    # Environment variables (e.g., MongoDB URI)
├── Dockerfile              # Dockerfile for containerization
├── docker-compose.yml      # Docker Compose configuration (optional)
├── jest.config.js          # Jest configuration file
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation

Conclusion
This backend API enables easy management of FAQs with features like multilingual support and caching. With the help of Docker, it is simple to deploy and scale in various environments. Through Git and version control, collaboration is made easy.
