# Chatify 🗨️✨

A full-stack real-time chat application where users can sign up, log in, manage their profile, and chat — built with the MERN stack (MongoDB, Express.js, React.js, Node.js), and styled with Tailwind CSS and DaisyUI.

---

## 🚀 Tech Stack

**Frontend**:
- React.js (Vite setup)
- Tailwind CSS
- DaisyUI
- React Router DOM
- Axios
- Zustand (state management)
- React Hot Toast (notifications)
- Lucide React (icons)

**Backend**:
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO (for real-time communication)
- JWT (Authentication)
- Bcrypt (Password hashing)
- Cloudinary (Media upload)
- CORS
- Dotenv

**Database**:
- MongoDB Atlas

---

## 📸 Features

- 🔐 User Authentication (Signup, Login, Logout)
- 🧑‍💼 Profile Management (Profile Picture Upload via Cloudinary)
- 💬 Real-time chatting interface
- 🎨 Multiple Themes (Light, Dark, Cyberpunk, Halloween, Forest, and more via DaisyUI)
- 🛡️ Protected Routes with JWT
- 📱 Responsive and Mobile-Friendly UI
- 🔔 Toast notifications for alerts and updates
- 🌐 Cross-Origin Resource Sharing enabled (CORS)

---

## 📂 Project Structure

```
/backend
  /controllers
  /middleware
  /models
  /routes
  /lib
/frontend
  /components
  /pages
  /store
  /utils
  /lib
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**:

```bash
git clone https://github.com/THEJUSKRISHNAN/Chatify.git
cd chatify
```

2. **Backend Setup**:

```bash
cd backend
npm install
npm run dev
```

3. **Frontend Setup**:

```bash
cd frontend
npm install
npm run dev
```

4. **Environment Variables**:

Create `.env` files in **backend** with required keys:

**Backend** (`/backend/.env`):
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=your_port_address
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 🛡️ Security & Best Practices

- Passwords are hashed using Bcrypt.
- JWTs are stored securely with HttpOnly cookies.
- User uploads are safely handled via Cloudinary.
- Environment variables manage all sensitive credentials.

---
## Chatify Preview
---
![Chatify Preview](https://res.cloudinary.com/dgzkgmldz/image/upload/v1745687584/Screenshot_2025-04-26_223758_nnrmor.png)


