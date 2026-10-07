# 📝 ThinkBoard — MERN Stack Notes Application

> A full-stack note-taking application built with the **MERN stack**, featuring CRUD operations, RESTful APIs, rate limiting, responsive UI, and MongoDB persistence.

🔗 **Live Demo:** https://mern-thinkboard-xdv3.onrender.com/

🔗 **GitHub:** https://github.com/pranav22kurup/MERN---thinkboard

---

## 📌 About The Project

**ThinkBoard** is a full-stack note-taking application built to practice and demonstrate modern web development using the MERN stack.

The application allows users to create, view, update, and delete notes through a clean and responsive interface. The frontend communicates with a RESTful backend API, while MongoDB is used for persistent data storage.

The project also implements **API rate limiting using Upstash Redis**, providing experience with a real-world backend security and scalability concept.

---

## ✨ Features

* 📝 Create new notes
* 📖 View existing notes
* ✏️ Edit and update notes
* 🗑️ Delete notes
* 🔄 Full CRUD functionality
* 🌐 RESTful API architecture
* 🗄️ MongoDB database integration
* ⚡ React-based responsive frontend
* 🎨 Tailwind CSS + DaisyUI styling
* 🔔 Toast notifications for user feedback
* 🚦 API rate limiting with Upstash Redis
* 📱 Responsive design for different screen sizes
* 🚀 Production-ready build configuration
* ☁️ Deployed application

---

## 🛠️ Tech Stack

### Frontend

| Technology      | Purpose             |
| --------------- | ------------------- |
| React           | UI development      |
| Vite            | Frontend build tool |
| React Router    | Client-side routing |
| Axios           | HTTP/API requests   |
| Tailwind CSS    | Styling             |
| DaisyUI         | UI components       |
| Lucide React    | Icons               |
| React Hot Toast | Notifications       |

### Backend

| Technology    | Purpose                   |
| ------------- | ------------------------- |
| Node.js       | JavaScript runtime        |
| Express.js    | REST API framework        |
| MongoDB       | Database                  |
| Mongoose      | MongoDB ODM               |
| Upstash Redis | Rate limiting             |
| CORS          | Cross-origin requests     |
| dotenv        | Environment configuration |
| Nodemon       | Development server        |

---

## 🏗️ Project Architecture

```text
MERN---thinkboard/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── ...
│   │
│   ├── package.json
│   └── vite.config.js
│
├── package.json
└── README.md
```

> The exact internal files may evolve as the project grows. The main separation is between the React frontend and Node/Express backend.

---

## 🔄 How It Works

```text
┌─────────────────────┐
│      React UI       │
│      + Vite         │
└──────────┬──────────┘
           │
           │ HTTP Requests
           ▼
┌─────────────────────┐
│     Express API     │
│      Node.js        │
└──────────┬──────────┘
           │
           │ Mongoose
           ▼
┌─────────────────────┐
│      MongoDB        │
└─────────────────────┘

           +
           
┌─────────────────────┐
│    Upstash Redis    │
│   Rate Limiting     │
└─────────────────────┘
```

---

## 🚀 Getting Started

Follow these steps to run ThinkBoard locally.

### 1. Clone the repository

```bash
git clone https://github.com/pranav22kurup/MERN---thinkboard.git
```

Navigate into the project:

```bash
cd MERN---thinkboard
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string

UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

NODE_ENV=development
```

Replace the placeholder values with your MongoDB and Upstash credentials.

**Never commit your `.env` file to GitHub.**

---

### 4. Start the Backend

From the `backend` directory:

```bash
npm run dev
```

The backend will start using the development server.

---

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

### 6. Start the Frontend

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## ⚙️ Available Scripts

### Root

```bash
npm run build
```

Installs dependencies for both applications and creates the production frontend build.

```bash
npm start
```

Starts the backend server.

### Backend

```bash
npm run dev
```

Starts the backend using Nodemon.

```bash
npm start
```

Starts the backend in production mode.

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint to check the frontend code.

---

## 🔐 Environment Variables

The backend requires the following environment variables:

| Variable                   | Description                        |
| -------------------------- | ---------------------------------- |
| `MONGO_URI`                | MongoDB connection string          |
| `UPSTASH_REDIS_REST_URL`   | Upstash Redis REST endpoint        |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis authentication token |
| `NODE_ENV`                 | Application environment            |

---

## 🌐 Deployment

The application is deployed and available online:

### Live Application

👉 https://mern-thinkboard-xdv3.onrender.com/

The root project also contains production build scripts that install dependencies for both the frontend and backend and build the frontend before starting the backend.

---

## 🧠 What I Learned

Building ThinkBoard helped me strengthen my understanding of full-stack JavaScript development, including:

* Building RESTful APIs with Express.js
* Connecting a React frontend to a Node.js backend
* Designing and interacting with MongoDB databases
* Using Mongoose for database operations
* Implementing complete CRUD functionality
* Managing asynchronous API requests
* Structuring a full-stack application
* Handling environment variables securely
* Implementing API rate limiting
* Building responsive interfaces with Tailwind CSS
* Using Vite for modern frontend development
* Preparing a MERN application for deployment

---

## 🔮 Future Improvements

Some features that could be added in future versions:

* 🔐 User authentication and authorization
* 👤 Individual user accounts
* 🔍 Search and filter notes
* 🏷️ Categories and tags
* 📌 Pin important notes
* 🌙 Dark/light theme customization
* 📊 User dashboard and analytics
* 📅 Note creation and reminder dates
* 📱 Progressive Web App support
* 🧪 Automated testing
* 📈 Improved monitoring and logging

---

## 📸 Screenshots

Add screenshots of the application here to make the repository more attractive to recruiters and developers.

```markdown
![ThinkBoard Home](./screenshots/home.png)

![Create Note](./screenshots/create-note.png)

![Edit Note](./screenshots/edit-note.png)
```

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add: your feature"
```

5. Push the branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

---

## 📄 License

This project is currently licensed under the **ISC License**.

---

## 👨‍💻 Author

### Pranav Kurup

Computer Science & Engineering Graduate | Full-Stack & Frontend Developer

* GitHub: https://github.com/pranav22kurup
* Project: https://github.com/pranav22kurup/MERN---thinkboard

---

⭐ If you found this project useful or interesting, consider giving the repository a star!


