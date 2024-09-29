# Full-Stack Application: Next.js Frontend & Flask Backend

This project is a full-stack web application with a *Next.js* frontend and a *Flask* backend. The frontend handles user interaction, while the backend processes data and serves API requests. Both parts of the application are containerized for easy setup and deployment.

## Table of Contents
* [Features](#features)
* [Project Structure](#project-structure)
* [Prerequisites](#prerequisites)
* [Setup Instructions](#setup-instructions)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Frontend Setup (Next.js)](#2-frontend-setup-nextjs)
  - [3. Backend Setup (Flask)](#3-backend-setup-flask)
  - [4. Run with Docker (Optional)](#4-run-with-docker-optional)
  - [5. Environment Variables](#5-environment-variables)
* [Usage](#usage)
* [Testing](#testing)
* [Deployment](#deployment)
* [License](#license)

## Features
* *Frontend*: Built with Next.js for fast, modern UI with server-side rendering (SSR).
* *Backend*: Powered by Flask, handling API requests and business logic.
* *Dockerized*: The app can be fully containerized using Docker for easy deployment.
  
## Project Structure

root/
├── frontend/           # Next.js frontend code
├── backend/            # Flask backend code
└── README.md           # Project documentation


## Setup Instructions

### 1. Clone the Repository
bash
git clone https://github.com/DevyManish/Swachhta-AI
cd Swachhta-AI


### 2. Frontend Setup (Next.js)
1. Navigate to the frontend directory:
    bash
    cd frontend
    

2. Install the necessary dependencies:
    bash
    npm install
    

3. Start the Next.js development server:
    bash
    npm run dev
    

The frontend will be available at http://localhost:3000.

### 3. Backend Setup (Flask)
1. Navigate to the backend directory:
    bash
    cd backend
    

2. Set up a Python virtual environment:
    bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    

3. Install dependencies from requirements.txt:
    bash
    pip install -r requirements.txt
    

### 1. To Run And See Result

If you are trying to get api you need to run flask server and this is the command to run flask server

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python image_clasification.py
python app.py
```
```bash
cd frontend
npm install
npm run dev
```

The backend will be available at http://localhost:5000.


Both frontend and backend will be available:
* Frontend: http://localhost:3000
* Backend: http://localhost:5000

### 5. Environment Variables
Ensure you have the following environment variables set:

#### Frontend (frontend/.env.local):
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<next_auth_secret>
UPLOADTHING_SECRET=<upload_thing_secret>
UPLOADTHING_APP_ID=<upload_thing_appId>
BACKEND_URL=<flask_backend_base_url>
```

#### Backend (backend/.env):
```bash
FLASK_ENV=development
DATABASE_URL=<postgress_database_urI>
```

## Usage
* The frontend UI can be accessed at http://localhost:3000.
* The backend API will run on http://localhost:5000.

## Deployment

### Frontend:
To deploy the frontend for production:
```bash
npm run build
npm start
```

### Backend:
To run the backend with Gunicorn for production:
```bash
gunicorn -w 4 app:app
```
