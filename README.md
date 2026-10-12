# ✨ Moment

<p align="center">
  <img src="./Frontend/src/assets/Logo.png" alt="Moment Logo" width="120" />
</p>

<h2 align="center">A Modern Full-Stack Image Sharing Platform</h2>

<p align="center">
  Built with React, Node.js, Express.js, MongoDB, and ImageKit.
</p>

<p align="center">
  Upload images, share captions, and explore moments through a clean, modern interface.
</p>

---

## 🌐 Live Website: 👇

https://moment-full-stack-project.vercel.app/

---

## ✨ Features

- 📸 **Image Uploads** — Upload images directly through the create-post page.
- ✍️ **Captions** — Add captions to your uploaded images.
- 🖼️ **Dynamic Image Feed** — Fetch and display posts from the backend API.
- ☁️ **Cloud Image Storage** — Store and deliver images using ImageKit.
- 🗄️ **MongoDB Integration** — Store post information and image URLs.
- 🆕 **Latest Posts First** — Display newer posts before older posts.
- 🏠 **Home Page** — Introduces Moment and its main features.
- ➕ **Create Post Page** — Upload an image and submit a caption.
- 📰 **Feed Page** — Browse the available image posts.
- 🧭 **Reusable Navigation** — Navigate between the main pages.
- 📱 **Responsive Layout** — Adapt the interface to different screen sizes.
- 🌙 **Modern Dark UI** — A dark interface with purple and fuchsia accents.
- ⚡ **Fast Frontend Development** — Powered by Vite.
- 🔗 **REST API Integration** — Connect the React frontend with the Express backend.
- 🧩 **Component-Based Architecture** — Organize the frontend into reusable React components.

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- JavaScript (ES6+)
- React Router DOM
- Axios
- Vite

### Backend

- Node.js
- Express.js
- JavaScript
- Multer
- CORS
- dotenv

### Database

- MongoDB Atlas
- Mongoose

### Cloud Storage

- ImageKit

### Tools & Deployment

- Visual Studio Code
- Git
- GitHub
- Postman
- Vercel

## 🏗️ How Moment Works

Moment connects the frontend, backend, database, and image storage into one application.

1. Users select an image and enter a caption on the frontend.
2. React sends the image and caption to the Express API using Axios and `FormData`.
3. Multer processes the uploaded image on the backend.
4. The backend uploads the image to ImageKit.
5. MongoDB stores the image URL and caption.
6. The feed requests the available posts from the backend.
7. React displays the posts and their images on the website.

## 📂 Project Structure

```text
Moment-full-stack-project/
│
├── Backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── models/
│   │   ├── routes/
│   │   └── controllers/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Logo.png
│   │   │   ├── Favicon.png
│   │   │   └── hero.png
│   │   ├── Components/
│   │   │   └── Navbar.jsx
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   └── Feed.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

_Note: The tree illustrates the project's organization. Your actual folder and filename capitalization may differ._

## 🚀 Getting Started

Follow these steps to run Moment on your local machine.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- A MongoDB Atlas account or another MongoDB instance
- An ImageKit account

### 1. Clone the Repository

```bash
git clone https://github.com/abhishek-akkal/Moment-full-stack-project.git
```

### 2. Open the Project

```bash
cd Moment-full-stack-project
```

### 3. Configure the Backend

Navigate to the backend directory:

```bash
cd Backend
npm install
```

Create a `.env` file in the backend directory.

Example configuration:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Replace the placeholder values with your actual credentials. The environment variable names must match those used in your backend code.

**Important:** Never commit your `.env` file or expose your MongoDB connection string or ImageKit private key in a public repository.

Start the backend using the script configured in `Backend/package.json`. For example:

```bash
npm run dev
```

If your project uses a different script, use the appropriate command, such as `node server.js`.

### 4. Configure the Frontend

Open a second terminal and navigate to the frontend directory from the project root:

```bash
cd Frontend
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser. It is commonly:

```text
http://localhost:5173
```

### 5. Connect the Frontend to the Backend

During local development, the frontend may send API requests to:

```text
http://localhost:3000
```

For production, configure the frontend to use the deployed backend URL instead.

The backend must also allow requests from the deployed frontend through its CORS configuration.

## 🔌 API Endpoints

Moment currently uses the following main API endpoints.

| Method | Endpoint       | Description                       |
| ------ | -------------- | --------------------------------- |
| `POST` | `/create-post` | Upload an image and create a post |
| `GET`  | `/post`        | Retrieve posts for the feed       |

### 📤 Create Post

**Endpoint:** `POST /create-post`

Accepts an image and caption through multipart form data.

The backend processes the image, uploads it to ImageKit, and saves the image URL and caption in MongoDB.

### 📥 Get Posts

**Endpoint:** `GET /post`

Retrieves the available posts from MongoDB and returns them to the frontend.

The frontend uses the response to render the image feed, with newer posts displayed first.

## 🗄️ Database

Moment uses MongoDB with Mongoose to store post information.

A post includes information such as:

- **Image URL:** The address of the image stored in ImageKit.
- **Caption:** The text associated with the uploaded image.

The image itself is stored in ImageKit, while MongoDB stores its URL and the associated post information.

This separation allows the application to retrieve post data from the database and load images from cloud storage.

## ☁️ Image Upload Workflow

```text
User selects an image
        ↓
React form and Axios
        ↓
Express backend
        ↓
Multer processes the file
        ↓
ImageKit stores the image
        ↓
MongoDB saves the image URL and caption
        ↓
Feed API retrieves posts
        ↓
Moment displays the posts
```

## 🌐 Deployment

### Frontend

Moment's frontend is deployed on Vercel.

**Live Website:** https://moment-full-stack-project.vercel.app/

### Backend

The backend requires a deployed server to handle production API requests independently of your local computer.

For a complete production setup:

- Deploy the Express backend to a suitable Node.js hosting service.
- Configure MongoDB and ImageKit credentials in the backend's environment variables.
- Update the frontend API URL to point to the deployed backend.
- Configure CORS for the production frontend domain.
- Verify image uploads and feed retrieval on the live website.

**Note:** The Vercel frontend deployment alone does not automatically deploy the Express backend.

## 🔐 Security Considerations

Before using Moment as a public production application, consider implementing:

- Image file-type validation.
- File-size limits.
- Rate limiting and upload abuse protection.
- Authentication and authorization where needed.
- Secure environment-variable management.
- Restricted CORS origins.
- Safe error handling.
- Appropriate database permissions.

Never expose private credentials in frontend code or commit them to GitHub. Rotate any credentials that may have been exposed.

## 📚 What I Learned

Building Moment helped me gain practical experience with:

- Developing a React application.
- Creating REST APIs using Node.js and Express.
- Connecting a frontend to a backend using Axios.
- Handling multipart form data.
- Uploading images using Multer.
- Integrating ImageKit for cloud image storage.
- Connecting MongoDB using Mongoose.
- Organizing a full-stack project into separate frontend and backend directories.
- Managing environment variables.
- Debugging API and database integration issues.
- Using Git and GitHub for version control.
- Deploying a frontend application using Vercel.

## 💡 Future Improvements

- 👤 User registration and authentication.
- ❤️ Like and comment functionality.
- 📝 Edit and delete posts.
- 👥 User profiles.
- 🔍 Search and filtering.
- 📄 Pagination or infinite scrolling.
- 📊 Upload progress indicators.
- 🛡️ Improved upload validation and abuse protection.
- 🔔 Better loading, success, and error messages.
- 🎨 Additional UI enhancements.

## 👨‍💻 Author

**Abhishek Akkal**

BCA Student | Aspiring Full-Stack Developer

- GitHub: [abhishek-akkal](https://github.com/abhishek-akkal)
- Project Repository: [Moment-full-stack-project](https://github.com/abhishek-akkal/Moment-full-stack-project)

## ⭐ Support

If you like this project, consider giving the repository a ⭐ star on GitHub.

Your support motivates me to keep learning, building, and creating more projects.

---

<p align="center">
  Made with ❤️ by Abhishek Akkal
</p>
