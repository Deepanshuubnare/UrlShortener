🔗 URL Shortener - MERN Stack
A full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack that transforms long, cumbersome URLs into short, easy-to-share links. The project features a clean user interface and a robust backend to handle URL redirection and analytics.

Live Demo & Screenshots 📸
It's highly recommended to add a live demo link and some screenshots to showcase your work!

Live Demo: [Insert Your Deployed URL Here]

Add your screenshots here:

🚀 Features
Shorten URLs: Instantly convert any long URL into a short, unique link.

Redirection: Automatically redirects short URLs to their original destination.

Click Tracking: Counts and displays the number of clicks for each shortened link.

History: Displays a table with the history of all shortened URLs and their analytics.

Responsive Design: A clean and modern UI that works seamlessly on all devices.

💻 Tech Stack
This project is built using the MERN stack and styled with Tailwind CSS.

Frontend:

React.js

Vite

Tailwind CSS

Backend:

Node.js

Express.js

Database:

MongoDB with Mongoose

⚙️ Getting Started
Follow these instructions to get a local copy up and running for development and testing purposes.

Prerequisites
Make sure you have the following installed on your machine:

Node.js (v14 or higher)

npm & npx

MongoDB (or a MongoDB Atlas account)

Installation & Setup
Clone the repository:

Bash

git clone https://github.com/Deepanshuubnare/UrlShortener.git
cd UrlShortener
Install backend dependencies:

Bash

npm install
Install frontend dependencies:

Bash

cd client
npm install
cd ..
Create an environment file:
Create a .env file in the root of the project and add the following environment variable.

Code snippet

MONGO_URL=your_mongodb_connection_string
Replace your_mongodb_connection_string with your actual MongoDB URI.

Running the Application
Start the backend server:
From the root directory, run:

Bash

npm start
The server will start on http://localhost:8000.

Start the frontend development server:
In a new terminal, navigate to the client directory and run:

Bash

npm run dev
The frontend will be available at http://localhost:5173.
