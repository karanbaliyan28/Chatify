<h1 align="center">✨ Full-Stack Chat App with Auth & Emails ✨</h1>


Highlights:

- 🔐 Custom JWT Authentication (no 3rd-party auth)
- ⚡ Real-time Messaging via Socket.io
- 🟢 Online/Offline Presence Indicators
- 🔔 Notification & Typing Sounds (with toggle)
- 📨 Welcome Emails on Signup (Resend)
- 🗂️ Image Uploads (Cloudinary)
- 🧰 REST API with Node.js & Express
- 🧱 MongoDB for Data Persistence
- 🎨 Beautiful UI with React, Tailwind CSS & DaisyUI
- 🧠 Zustand for State Management
- 🧑‍💻 Git & GitHub Workflow (branches, PRs, merges)

---

## 🧪 .env Setup

### Backend (`/backend`)

```bash
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development
# Use NODE_ENV=production for deployed backends.

JWT_SECRET=your_jwt_secret

EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173
# For deployed apps, include every frontend origin that should call the API.
# Example:
# CLIENT_URLS=https://chatify-psi-one.vercel.app,http://localhost:5173
# Optional cookie overrides for deployed cross-site auth:
# COOKIE_SAME_SITE=none
# COOKIE_SECURE=true

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

```

### Frontend (`/frontend`)

```bash
VITE_API_URL=https://pingbackend-s4co.onrender.com/api
VITE_SOCKET_URL=https://pingbackend-s4co.onrender.com
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
