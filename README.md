# Game Filter App - Node.Js

A secure and scalable RESTful API built with **Node.js** and **Express**. Features built-in authentication, security middleware, and comprehensive error handling.

## 🌟 Features
* **Authentication**: Secure JWT-based authentication system
* **Error Handling**: Comprehensive error handling middleware
* **Environment Configuration**: Environment-based configurations using dotenv
* **Password Encryption**: Secure password hashing using bcrypt

## 🛠️ Technology Stack
* **Runtime**: Node.js
* **Framework**: Express.js
* **Authentication**: JWT (jsonwebtoken)
* **Security**: 
  * bcrypt for password hashing
* **Utilities**: Lodash
* **Development**: Nodemon for hot reloading

## 📁 Project Structure
```
├── src/
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Application entry point
├── .env                 # Environment variables
└── package.json         # Project dependencies
```

## 🚀 Getting Started

1. Clone the repository and install dependencies:
```bash
git clone https://github.com/snishan/game-filter-app-be.git
cd node-api
npm install
```

2. Checkout to the `development` brach:
```env
git fetch && git checkout development
```

3. Start the development server:
```bash
npm run dev
```

4. For production:
```bash
npm run build
npm start
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication:


1. Login to get JWT token:
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "player1",
  "password": "player1"
}
```

## 📚 Available Scripts

* `npm start` - Start the production server
* `npm run dev` - Start development server with hot reloading
* `npm run build` - Build the project for production
* `npm test` - Run tests (not implemented yet)


## 📈 Future Improvements

* Add database integration
* Implement rate limiting
* Add request validation
* Set up automated testing
* Add API documentation with Swagger
* Implement logging system

