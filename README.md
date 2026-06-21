# NotePortal

A minimal and futuristic MERN stack (MongoDB, Express, React, Node.js) note sharing platform where students can browse notes by department, semester, and subject, and upload PDF notes.

## Project Structure

- `/backend`: Node/Express REST API
- `/frontend`: Vite + React + Tailwind CSS client

## Tech Stack

- **Frontend:** React 19, Tailwind CSS, Vite, Axios, Lucide React
- **Backend:** Node.js, Express, MongoDB Atlas, Mongoose, JWT, Multer (PDF upload)

## Environment Setup

### Backend (`/backend/.env`)
Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend (`/frontend/.env`)
Create a `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000
```

## Setup & Running

### 1. Run Backend
```bash
cd backend
npm install
npm start
```

### 2. Run Frontend
```bash
cd frontend
npm install
npm run dev
```
