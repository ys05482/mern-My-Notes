MERN Notes App

A full-stack notes management application built with the MERN stack (MongoDB, Express, React, Node.js).
The application allows users to create, update, view, and delete notes through a RESTful API and a modern React frontend.

The project was built to practice backend API design, database integration, and full-stack deployment.

Live Demo

Deployed on Render

https://mern-my-notes-zbc8.onrender.com/

Tech Stack

Frontend
React (Vite)
TailwindCSS
DaisyUI

Backend
Node.js
Express.js

Database
MongoDB
Mongoose

Other Tools
Nodemon
Dotenv

Upstash Redis (Rate Limiting)

Features
Create notes
Update existing notes
Delete notes
View all notes
View a single note

RESTful API architecture
Rate limiting to prevent API abuse
Environment variable configuration
Responsive UI

Project Structure
backend
│
├── src
│ ├── config
│ │ └── db.js
│ │
│ ├── controllers
│ │ └── notesControllers.js
│ │
│ ├── models
│ │ └── note.js
│ │
│ ├── routes
│ │ └── notesRoutes.js
│ │
│ └── server.js
│
├── .env
├── package.json

The backend follows a modular architecture separating routes, controllers, models, and configuration.

API Endpoints
Method Route Description
GET /api/notes Retrieve all notes
GET /api/notes/:id Retrieve a note by ID
POST /api/notes Create a new note
PUT /api/notes/:id Update a note
DELETE /api/notes/:id Delete a note
Environment Variables

Create a .env file in the root directory.

MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_token
PORT=3001
Installation

Clone the repository.

git clone https://github.com/ys05482/mern-My-Notes

Navigate into the project directory.

cd mern-notes-app

Install dependencies.

npm install

Run the development server.

npm run dev

The backend will run on:

http://localhost:3001

Database

The project uses MongoDB Atlas as the cloud database.

Steps used:

Create a project in MongoDB Atlas

Create a free cluster

Add database user credentials

Allow network access (0.0.0.0/0)

Connect the application using the connection string stored in .env

Rate Limiting

Rate limiting is implemented using Upstash Redis to protect API endpoints from abuse and excessive requests.

If the request limit is exceeded, the API returns:

429 Too Many Requests

Deployment:

The application is deployed on Render.

Deployment process:

Push project to GitHub
Connect repository with Render
Configure environment variables
Deploy backend service
Future Improvements
Authentication and user accounts
Search functionality
Note categories
Pagination
Markdown support

Author:
Yashwant Singh

BTech Student
Learning Full Stack Development with the MERN Stack
