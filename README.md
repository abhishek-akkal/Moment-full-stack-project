# Moment — Full-Stack Image Sharing Platform

Moment is a full-stack image-sharing web application where users can upload images, add captions, and explore posts in a clean, modern interface. Built with React, Node.js, Express, MongoDB, and ImageKit, Moment demonstrates the integration of a frontend, backend API, database, and cloud image storage.

🔗 **Live Website:** https://moment-full-stack-project.vercel.app/

---

## 📸 About the Project

Moment is a project built to practice and demonstrate full-stack web development. It combines a responsive React frontend with an Express backend, MongoDB for storing post information, and ImageKit for image uploads and delivery.

The goal of Moment is to provide a simple and visually appealing experience for sharing images and viewing posts in one place.

## ✨ Features

- **Image Uploads:** Upload images through the create-post form.
- **Captions:** Add captions to uploaded images.
- **Dynamic Feed:** Fetch posts from the backend API and display them on the feed page.
- **Cloud Image Storage:** Store uploaded images using ImageKit.
- **Database Integration:** Store image URLs and captions in MongoDB.
- **Latest Posts First:** Display newer posts before older posts.
- **Responsive Layout:** Adapt the post feed to different screen sizes.
- **Reusable Navigation:** Share a consistent navigation bar across the main pages.
- **Multi-Page Navigation:** Navigate between Home, Create Post, and Feed.
- **Modern UI:** Dark styling with purple and fuchsia accents.

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Axios

### Backend

- Node.js
- Express.js
- JavaScript
- Multer for handling image uploads
- CORS for cross-origin requests
- dotenv for environment configuration

### Database and Image Storage

- MongoDB Atlas
- Mongoose
- ImageKit

### Tools and Deployment

- Git and GitHub
- Visual Studio Code
- Postman
- Vercel for frontend deployment

## 🏗️ Project Architecture

Moment follows a frontend–backend architecture.

1. The React frontend provides the user interface.
2. Axios sends HTTP requests to the Express backend.
3. The backend processes requests and communicates with MongoDB.
4. Multer handles uploaded image files.
5. ImageKit stores uploaded images and provides their URLs.
6. MongoDB stores post information, including image URLs and captions.
7. The frontend retrieves the posts and renders them in the feed.

## 📂 Project Structure

```text
Full Stack Project/
│
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

_Note: The structure above illustrates the intended organization. Actual filenames and folders may differ slightly depending on the final project files._

## 🚀 Getting Started

Follow these steps to run Moment locally.

### Prerequisites

Make sure you have installed:

- Node.js and npm
- Git
- A MongoDB Atlas account or another accessible MongoDB database
- An ImageKit account

### 1. Clone the Repository

```bash
git clone https://github.com/abhishek-akkal/Moment-full-stack-project.git
```

### 2. Open the Project

```bash
cd Moment-full-stack-project
```

### 3. Set Up the Backend

Open a terminal and run:

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` folder and add the environment variables required by your backend code.

Example configuration:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Replace the example values with your actual credentials. Use the exact variable names expected by your code.

**Important:** Never commit your `.env` file or expose your ImageKit private key or MongoDB credentials in frontend code or a public repository.

Start the backend using the command configured in your `package.json`, for example:

```bash
npm run dev
```

If your project does not have a `dev` script, use its configured start command, such as `node server.js`.

### 4. Set Up the Frontend

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

Vite will display a local development URL in the terminal, commonly `http://localhost:5173`.

Open that URL in your browser.

### 5. Configure the API URL

Make sure the frontend sends requests to the correct backend address.

For local development, your API may use:

```text
http://localhost:3000
```

For production, replace the local address with your deployed backend URL. Configure CORS on the backend to allow requests from your deployed frontend.

## 🖼️ How to Use Moment

1. Open the Moment website.
2. Navigate to the Create Post page.
3. Select an image from your device.
4. Enter a caption.
5. Submit the form to upload the post.
6. Open the Feed page to view the available posts.

Uploaded images are stored through ImageKit, while post information is stored in MongoDB.

## 🔌 API Endpoints

The following endpoints are used by the application.

| Method | Endpoint       | Purpose                           |
| ------ | -------------- | --------------------------------- |
| `POST` | `/create-post` | Upload an image and create a post |
| `GET`  | `/post`        | Retrieve posts for the feed       |

### Create a Post

The `POST /create-post` endpoint accepts a multipart form containing an image and a caption. The backend uploads the image to ImageKit and stores the resulting image URL and caption in MongoDB.

### Get Posts

The `GET /post` endpoint retrieves posts from MongoDB and returns them to the frontend for display.

_The endpoints listed here reflect the application's current API design. Additional endpoints may be added as the project evolves._

## 🗄️ Database

Moment uses MongoDB with Mongoose to store post information.

A post contains fields such as:

- **Image:** The URL of the uploaded image.
- **Caption:** The text associated with the image.

The actual image file is stored in ImageKit rather than directly inside MongoDB. This allows the database to store image references and post information.

## ☁️ Image Upload Workflow

1. A user selects an image on the frontend.
2. The frontend submits the image and caption as `FormData`.
3. Express receives the request.
4. Multer processes the uploaded file in memory.
5. The backend uploads the file to ImageKit.
6. The returned image URL and caption are saved in MongoDB.
7. The frontend can retrieve and display the post through the feed API.

## 🌐 Deployment

The frontend is deployed on Vercel.

**Live URL:** https://moment-full-stack-project.vercel.app/

For a complete production deployment, the backend must also be hosted on a server platform, and the frontend must use the deployed backend's API URL.

Production configuration should include:

- The deployed backend URL in the frontend configuration.
- MongoDB connection credentials in backend environment variables.
- ImageKit credentials in backend environment variables.
- Appropriate CORS settings.
- Upload validation and file-size limits.

## 🔐 Security Considerations

Before using Moment as a public production application, consider implementing:

- File-type and file-size validation.
- Rate limiting and upload abuse protection.
- Authentication and authorization if required.
- Secure environment-variable management.
- Restricted CORS origins.
- Proper error handling without exposing sensitive configuration.
- Appropriate database access permissions.

Never publish real secrets in GitHub. If credentials have already been exposed, rotate them.

## 📚 What I Learned

Building Moment helped me practice:

- Connecting a React frontend to an Express backend.
- Building and consuming REST API endpoints.
- Handling image uploads with Multer.
- Uploading images to cloud storage with ImageKit.
- Connecting Node.js applications to MongoDB using Mongoose.
- Sending multipart form data using Axios.
- Organizing a full-stack project into separate frontend and backend folders.
- Managing environment variables.
- Using Git and GitHub for version control.
- Deploying a React application with Vercel.

## 🔮 Future Improvements

Possible future enhancements include:

- User registration and login.
- User profiles.
- Like and comment functionality.
- Post deletion and editing.
- Search and category-based filtering.
- Pagination or infinite scrolling.
- Improved image optimization and loading states.
- Better error messages and upload progress indicators.
- Stronger security and abuse prevention.

## 👨‍💻 Author

**Abhishek Akkal**

- GitHub: https://github.com/abhishek-akkal

## ⭐ Support

If you find this project interesting, consider giving the repository a star on GitHub.

Thank you for checking out **Moment**!

---

_Built with curiosity, creativity, and code._
