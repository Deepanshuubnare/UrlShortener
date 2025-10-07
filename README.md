# 🔗 URL Shortener 

A full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack that transforms long, cumbersome URLs into short, easy-to-share links. The project features a clean user interface and a robust backend to handle URL redirection and analytics.

---

## 📸 Live Demo 

* **Live Demo:** `https://urlshortener-frontend-jjhq.onrender.com/`

---

## 🚀 Features

* **Shorten URLs:** Instantly convert any long URL into a short, unique link.
* **Redirection:** Automatically redirects short URLs to their original destination.
* **Click Tracking:** Counts and displays the number of clicks for each shortened link.
* **History:** Displays a table with the history of all shortened URLs and their analytics.
* **Responsive Design:** A clean and modern UI that works seamlessly on all devices.

---

## 💻 Tech Stack

This project is built using the MERN stack and styled with Tailwind CSS.

* **Frontend:**
    * React.js
    * Vite
    * Tailwind CSS
* **Backend:**
    * Node.js
    * Express.js
* **Database:**
    * MongoDB with Mongoose

---

## ⚙️ Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

* [Node.js](https://nodejs.org/en/) (v14 or higher)
* [npm](https://www.npmjs.com/) & [npx](https://www.npmjs.com/package/npx)
* [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Deepanshuubnare/UrlShortener.git
    cd UrlShortener
    ```

2.  **Install backend dependencies:**
    ```sh
    npm install
    ```

3.  **Install frontend dependencies:**
    ```sh
    cd client
    npm install
    cd ..
    ```

4.  **Create an environment file:**
    Create a `.env` file in the root of the project and add the following environment variable.

    ```env
    MONGO_URL=your_mongodb_connection_string
    ```
    *Replace `your_mongodb_connection_string` with your actual MongoDB URI.*

### Running the Application

1.  **Start the backend server:**
    From the root directory, run:
    ```sh
    npm start
    ```
    The server will start on `http://localhost:8000`.

2.  **Start the frontend development server:**
    In a new terminal, navigate to the `client` directory and run:
    ```sh
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173`.

---

## 🧑‍💻 Author

* **Deepanshu Ubnare**
    * **GitHub:** [@Deepanshuubnare](https://github.com/Deepanshuubnare)
