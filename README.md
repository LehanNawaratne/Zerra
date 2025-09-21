# Zerra

Zerra is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides user authentication, post management, and email notifications for a seamless social media experience.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd zerra
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Set up environment variables:
   - Copy the sample `.env.example` file in the `backend` directory to `.env`
   - Fill in your actual values

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/zerra
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

For the frontend, create a `.env` file in the `frontend` directory:

```
VITE_API_URL=http://localhost:5000
```

## Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```

2. In a new terminal, start the frontend:
   ```
   cd frontend
   npm run dev
   ```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

## Technologies Used

- Frontend: React, Vite
- Backend: Express.js, Node.js
- Database: MongoDB with Mongoose
- Authentication: JWT

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd zerra
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Set up environment variables:
   - Copy the sample `.env.example` file in the `backend` directory to `.env`
   - Fill in your actual values

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/zerra
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

For the frontend, create a `.env` file in the `frontend` directory:

```
VITE_API_URL=http://localhost:5000
```

## Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```

2. In a new terminal, start the frontend:
   ```
   cd frontend
   npm run dev
   ```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

## Technologies Used

- Frontend: React, Vite
- Backend: Express.js, Node.js
- Database: MongoDB with Mongoose
- Authentication: JWT