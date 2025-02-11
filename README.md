# Task Management App - Backend

This is the backend API for the Task Management App, built using **Node.js, Express, TypeScript, MongoDB, Nodemailer, JWT**, and a repository architecture.

## 🚀 Features
- User authentication (JWT-based)
- Task CRUD operations
- Email notifications with Nodemailer
- Secure API with JWT

## 🛠 Tech Stack
- **Backend Framework:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Email Service:** Nodemailer
- **Language:** TypeScript

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone <repo-url>
cd <backend-folder>
2️⃣ Install dependencies
sh
Copy
Edit
npm install
3️⃣ Set up environment variables
Create a .env file in the root directory and add the following:

ini
Copy
Edit
MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>
PORT=<YOUR_SERVER_PORT>
JWT_SECRET=<YOUR_SECRET_KEY>
EMAIL_USER=<YOUR_EMAIL>
EMAIL_PASS=<YOUR_EMAIL_PASSWORD>
4️⃣ Start the server
sh
Copy
Edit
npm run dev
Your backend server will be running at http://localhost:<PORT>.

📂 Project Structure
backend/
│── src/
│   ├── controllers/       # Controllers to handle requests
│   │   ├── adminController.ts
│   │   ├── userController.ts
│   │   ├── taskController.ts
│   ├── repositories/      # Data access layer
│   │   ├── userRepository.ts
│   │   ├── taskRepository.ts
│   ├── services/          # Business logic layer
│   │   ├── adminService.ts
│   │   ├── userService.ts
│   │   ├── taskService.ts
│   ├── models/            # Database schemas
│   │   ├── userModel.ts
│   │   ├── taskModel.ts
│   ├── routes/            # API routes
│   │   ├── adminRoutes.ts
│   │   ├── userRoutes.ts
│   │   ├── taskRoutes.ts
│   ├── utils/             # Helper functions (JWT, authentication)
│   │   ├── generateToken.ts
│   │   ├── authMiddleware.ts
│   ├── server.ts
│   ├── app.ts
│── package.json
│── tsconfig.json
│── .env


This project is licensed under MIT License.