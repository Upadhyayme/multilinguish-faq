# multilinguish-faq
# Overview
This is a multilingual FAQ system built using Node.js, Express.js, MongoDB, Redis, and Google Translate API. It supports automatic translations, WYSIWYG editor integration (CKEditor 5), API caching using Redis, unit testing, and Docker deployment.
# Features
✅ Multilingual support (English, Hindi, Bengali)
✅ Automatic translations using Google Translate API
✅ REST API with caching (Redis) for fast performance
✅ WYSIWYG editor (CKEditor 5) for rich text formatting
✅ MongoDB as the database (with Mongoose)
✅ Unit tests using Mocha & Chai
✅ Docker & Docker Compose support

# 1. Project Setup
To start, initialize a Node.js project:
mkdir multilingual-faq
cd multilingual-faq
npm init -y
Install Dependencies
npm install express mongoose redis dotenv axios cors body-parser ckeditor5
npm install --save-dev nodemon mocha chai supertest eslint

# Dependencies Explained:
express - Web framework for Node.js
mongoose - ODM for MongoDB
redis - Caching mechanism
dotenv - Environment variable management
axios - HTTP requests (for Google Translate API)
cors - Cross-Origin Resource Sharing
body-parser - Parsing request bodies
ckeditor5 - WYSIWYG editor
nodemon - Auto-restart server on file changes
mocha, chai, supertest - Testing libraries
eslint - Code linting

# 2. Folder Structure
multilingual-faq/
│── server.js
│── .env
│── Dockerfile
│── docker-compose.yml
│── models/
│   └── FAQ.js
│── routes/
│   └── faqRoutes.js
│── utils/
│   ├── redis.js
│   └── translate.js
│── test/
│   └── faq.test.js
│── admin-panel/
│   └── index.html


# 3. Configure Environment Variables
Create a .env file:
PORT=8000
MONGO_URI=mongodb://localhost:27017/faqdb
REDIS_HOST=localhost
GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key

# 4. API Usage
4.1 Get FAQs (Default Language: English)
code :
curl http://localhost:8000/api/faqs/
4.2 Get FAQs in Hindi
 code :
curl http://localhost:8000/api/faqs/?lang=hi
4.3 Get FAQs in Bengali
 code :
curl http://localhost:8000/api/faqs/?lang=bn
4.4 Create an FAQ (Automatically Translates)
 code :
curl -X POST http://localhost:8000/api/faqs/ \
     -H "Content-Type: application/json" \
     -d '{"question": "What is Node.js?", "answer": "Node.js is a JavaScript runtime."}'

     
# 5. Redis Caching
FAQs are cached for 1 hour (EX: 3600 seconds).
If a translation is unavailable, it falls back to English.

# 6. Unit Testing
Tests are written using Mocha & Chai.
 code :
npm test
Test Cases
✅ Should GET all FAQs
✅ Should CREATE a new FAQ with automatic translation
✅ Should fetch translated FAQs based on ?lang=hi or ?lang=bn

# 7. Deployment with Docker
 Build and Run with Docker
 code :
docker-compose up --build
Access the API:
➡️ http://localhost:8000/api/faqs/

# 8. API Code Explanation
8.1 FAQ Model (models/FAQ.js)
8.2 API Routes (routes/faqRoutes.js)

# 9. Version Control (Git)
10.1 Git Commit Guidelines
git commit -m "feat: Add multilingual FAQ model"
git commit -m "fix: Improve translation caching"
git commit -m "docs: Update README with API examples"
10.2 Push to GitHub

# 10. Future Enhancements
✅ Add user authentication
✅ Extend translation support for more languages
✅ Improve UI for the admin panel

# 11. License
This project is open-source and available under the MIT License.



