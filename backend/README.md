# Zerra Backend API

A robust Node.js/Express.js backend API for the Zerra platform with authentication, content management, and AI integration.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **User Management**: Complete user registration, login, password reset, email verification
- **Content Management**: Create, read, update, delete posts with comments and likes
- **AI Integration**: Google Generative AI integration for content generation
- **Email Service**: Nodemailer integration for transactional emails
- **CSV Processing**: Built-in CSV parsing and generation utilities
- **Database**: MongoDB with Mongoose ODM
- **Security**: CORS enabled, input validation, error handling

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Email**: Nodemailer
- **AI**: Google Generative AI
- **File Processing**: CSV Parser
- **HTTP Client**: Axios

## Project Structure

```
backend/
├── config/           # Configuration files
│   ├── database.js   # Database connection setup
│   └── email.js      # Email configuration
├── controllers/      # Route controllers
│   ├── authController.js    # Authentication logic
│   ├── userController.js    # User management
│   ├── postController.js    # Post management
│   └── aiController.js      # AI integration
├── middleware/       # Custom middleware
│   ├── auth.js       # Authentication middleware
│   ├── errorHandler.js      # Error handling
│   └── logger.js     # Request logging
├── models/           # Database models
│   ├── User.js       # User schema
│   └── Post.js       # Post schema
├── routes/           # API routes
│   ├── auth.js       # Authentication routes
│   ├── users.js      # User routes
│   └── api.js        # General API routes
├── services/         # External services
│   └── apiService.js # HTTP API service wrapper
├── utils/            # Utility functions
│   ├── sendEmail.js  # Email utility
│   ├── csvHelper.js  # CSV processing
│   └── helpers.js    # General helpers
├── app.js            # Main application file
├── seed-data.js      # Database seeding script
└── package.json      # Dependencies and scripts
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Environment setup:
```bash
cp .env.example .env
```

4. Configure your `.env` file with:
- MongoDB connection string
- JWT secret key
- Email service credentials
- Google AI API key

## Configuration

Create a `.env` file in the backend directory with the following variables:

```env
# Environment
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/zerra

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Google AI
GOOGLE_API_KEY=your_google_ai_api_key_here

# CORS
CORS_ORIGIN=http://localhost:3000
```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data
- `npm run seed -- -d` - Delete all data from database

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/me` - Update user profile
- `POST /api/auth/forgot-password` - Request password reset
- `PUT /api/auth/reset-password/:token` - Reset password
- `GET /api/auth/verify-email/:token` - Verify email address

### Users (Admin only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Posts
- `GET /api/posts` - Get all published posts (public)
- `GET /api/posts/:id` - Get single post (public)
- `POST /api/posts` - Create new post (authenticated)
- `PUT /api/posts/:id` - Update post (owner/admin)
- `DELETE /api/posts/:id` - Delete post (owner/admin)
- `PUT /api/posts/:id/like` - Like/unlike post
- `POST /api/posts/:id/comments` - Add comment to post

### AI Integration
- `POST /api/ai/generate` - Generate content using AI

## Database Seeding

The project includes a seeding script that creates sample users and posts:

```bash
# Add sample data
npm run seed

# Remove all data
npm run seed -- -d
```

Sample accounts created:
- Admin: admin@zerra.com / admin123
- User: john@example.com / password123
- User: jane@example.com / password123

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Error Handling

The API returns standardized error responses:

```json
{
  "success": false,
  "error": "Error message"
}
```

## Development

1. Start MongoDB service
2. Copy `.env.example` to `.env` and configure
3. Run `npm run dev` to start development server
4. Use `npm run seed` to populate with sample data

## Production Deployment

1. Set `NODE_ENV=production` in environment
2. Configure production MongoDB URI
3. Set secure JWT secret
4. Configure production email service
5. Run `npm start`

## License

This project is licensed under the ISC License.