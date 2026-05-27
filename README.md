# 🏥 Hospital Management System Frontend

A modern React-based frontend for the Hospital Management System using JWT Authentication, Role-Based Authorization, and Microservice Architecture.

---

# 🚀 Tech Stack

- React + Vite
- Tailwind CSS
- Axios
- React Router DOM
- JWT Authentication
- Spring Boot Backend Integration

---

# 📌 Features

✅ User Login  
✅ JWT Authentication  
✅ Role-Based Authorization  
✅ Add Patient  
✅ View Patients  
✅ Responsive UI  
✅ Microservice Communication  
✅ Secure API Requests  

---

# 🏗️ Project Structure

```bash
src
 ├── pages
 │     ├── Login.jsx
 │     ├── Dashboard.jsx
 │     ├── Patients.jsx
 │     └── AddPatient.jsx
 │
 ├── services
 │     ├── api.js
 │     ├── authApi.js
 │     └── patientApi.js
 │
 ├── App.jsx
 └── main.jsx


⚙️ Installation

Clone the repository:

git clone <your-github-url>

Move into project:

cd hospital-frontend

Install dependencies:

npm install
▶️ Run Project
npm run dev

Frontend runs on:

http://localhost:5173
🔐 Authentication Flow
User logs in
Backend generates JWT token
Frontend stores token in localStorage
Token sent in Authorization header
Backend validates token using JwtFilter
🔗 Backend Services
Service	Port
Auth Service	8082
Patient Service	8081
API Gateway	8080
Eureka Server	8761
🧠 API Integration
Login API
POST /auth/login
Register API
POST /auth/register
Get Patients
GET /patients
Add Patient
POST /patients
🔒 JWT Token Example
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
📷 Screens
Login Page
Dashboard
Add Patient Page
Patient List Page
🌐 Deployment

Frontend deployed using:

Vercel

Backend can be deployed using:

Render
Railway
Docker
👨‍💻 Author

Vansh Badgayya

📌 Future Improvements
Appointment Management
Doctor Dashboard
Billing System
Email Notifications
PostgreSQL Integration
Docker Deployment
Kubernetes Deployment
⭐ Project Highlights
Microservice Architecture
Spring Security + JWT
Eureka Discovery Server
API Gateway
React Frontend
Secure Role-Based APIs
