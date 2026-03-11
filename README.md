🔗 URL Shortener Backend

A simple and efficient URL Shortener API built using Node.js, Express, MongoDB, and nanoid.
This project allows users to convert long URLs into short, shareable links and tracks the number of times each link is visited.

🚀 Features

Generate a short URL from a long URL

Redirect users from short URL to the original URL

Store URLs in MongoDB

Track number of clicks for each shortened link

Prevents duplicate URL entries

Automatically adds https:// if missing

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

nanoid

dotenv

📂 Project Structure
url-shortener
│
├── controllers
│   └── UrlControllers.js
│
├── models
│   └── Url.models.js
│
├── routes
│   └── UrlRoutes.js
│
├── config
│   └── db.js
│
├── server.js
├── .env
├── package.json
└── README.md
⚙️ Installation

Clone the repository:

git clone https://github.com/yourusername/url-shortener.git

Go into the project folder:

cd url-shortener

Install dependencies:

npm install
🔑 Environment Variables

Create a .env file in the root directory.

Example:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/urlShortner
BASE_URL=http://localhost:5000
▶️ Running the Server

Start the development server:

npm run dev

or

npm start

Server will run on:

http://localhost:5000
📡 API Endpoints
1️⃣ Create Short URL

POST

/create
Request Body
{
  "originalUrl": "https://google.com"
}
Response
{
  "shortUrl": "http://localhost:5000/abc123"
}
2️⃣ Redirect to Original URL

GET

/:shortCode

Example:

http://localhost:5000/abc123

This will redirect to:

https://google.com
📊 Database Schema

Example document stored in MongoDB:

{
  "_id": "65f3c1a12ab34",
  "originalUrl": "https://google.com",
  "shortCode": "abc123",
  "clicks": 0,
  "createdAt": "2026-03-12",
  "updatedAt": "2026-03-12"
}
🔄 How It Works

User sends a long URL

Server generates a short code using nanoid

URL is stored in MongoDB

Short URL is returned to the user

When visited:

Backend finds the shortCode

Increments clicks

Redirects to the original URL

📌 Example Workflow

Create URL:

POST /create

Response:

http://localhost:5000/eAQbqn

Visit:

http://localhost:5000/eAQbqn

Redirects to:

https://google.com
📈 Future Improvements

Custom short URLs

URL analytics dashboard

Expiration time for links

Authentication system

Rate limiting for API

👨‍💻 Author

Sayan Deb

MERN Stack Developer

⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

If you want, I can also show you how to make this README look much more attractive on GitHub (with badges, API diagrams, and screenshots). It takes about 2 minutes but looks very professional.

write a professional readme 

Here is a more professional, industry-style README suitable for a GitHub portfolio project. It focuses on clarity, architecture, and resume impact.

URL Shortener API

A lightweight and scalable URL Shortener backend service built with Node.js, Express, and MongoDB.
The application allows users to generate short URLs from long links, redirect users to the original destination, and track the number of visits for each shortened link.

This project demonstrates core backend development concepts including REST API design, database modeling, redirection handling, and link analytics.

Overview

Long URLs can be difficult to share or manage. This service converts long URLs into short, unique links that redirect users to the original destination.

Each shortened URL is stored in MongoDB with a unique identifier generated using nanoid. Every time the short URL is accessed, the service records the visit by incrementing a click counter.

Key Features

Generate a short URL from a long URL

HTTP redirection from short URL to original destination

MongoDB storage for persistent link management

Click tracking to monitor link usage

Duplicate URL detection to prevent generating multiple short links for the same URL

Automatic protocol correction (https:// added if missing)

Technology Stack
Technology	Purpose
Node.js	JavaScript runtime
Express.js	Web framework for API development
MongoDB	NoSQL database for storing URLs
Mongoose	MongoDB object modeling
nanoid	Unique short code generation
dotenv	Environment variable management
Architecture

The project follows a modular backend architecture to ensure maintainability and scalability.

project-root
│
├── controllers
│   └── UrlControllers.js
│
├── models
│   └── Url.models.js
│
├── routes
│   └── UrlRoutes.js
│
├── config
│   └── db.js
│
├── server.js
└── README.md
Responsibilities

Models
Defines the database schema and structure.

Controllers
Handles request logic and database operations.

Routes
Defines API endpoints and maps them to controllers.

Server
Initializes the Express application and database connection.

Installation and Setup
Clone the repository
git clone https://github.com/yourusername/url-shortener.git
Navigate to the project directory
cd url-shortener
Install dependencies
npm install
Environment Configuration

Create a .env file in the project root:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/urlShortner
BASE_URL=http://localhost:5000
Running the Application

Start the development server:

npm run dev

Or run normally:

npm start

The server will start at:

http://localhost:5000
API Endpoints
Create Short URL

POST

/create
Request
{
  "originalUrl": "https://example.com"
}
Response
{
  "shortUrl": "http://localhost:5000/abc123"
}
Redirect to Original URL

GET

/:shortCode
Example
http://localhost:5000/abc123

The server will redirect the user to the stored original URL.

Database Schema

Example MongoDB document:

{
  "_id": "ObjectId",
  "originalUrl": "https://example.com",
  "shortCode": "abc123",
  "clicks": 0,
  "createdAt": "...",
  "updatedAt": "..."
}
Request Flow
URL Creation

Client sends a long URL.

Server checks if the URL already exists.

If not, a unique short code is generated using nanoid.

The URL is stored in MongoDB.

The shortened link is returned to the client.

URL Redirection

Client accesses the short URL.

Server finds the corresponding record.

Click count is incremented.

User is redirected to the original URL.

Future Enhancements

Potential improvements to extend this project:

Custom short URLs

Link expiration support

Detailed analytics (IP, location, device)

Rate limiting for API protection

Authentication system for user-specific links

Frontend dashboard for link management

Author

Sayan Deb
MERN Stack Developer
