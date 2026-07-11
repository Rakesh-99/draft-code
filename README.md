# MERN Stack Blog App

This is a full-featured blog application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Redux-toolkit for state management and Tailwind CSS for styling. The app includes features such as user authentication and authorization, an admin panel, light/dark theme switching, and the ability to comment on blog posts, like comments, search and sort blogs, and paginate the blog list.

## Features

- **User Authentication**: Secure user login and registration with password hashing.
- **User friendly & design** : It is user responsive for all devices and has eye-catching design.
- **User Authorization**: Role-based access control (Admin/Regular User).
- **Admin Panel**: Full access to manage blogs, users, and comments.
- **Light/Dark Theme**: Switch between light and dark themes for an enhanced UI experience.
- **Comment System**: Users can comment on blog posts.
- **Like Comments**: Ability to like comments on blog posts.
- **Blog Search**: Search for blog posts based on titles or content.
- **Blog Sorting**: Sort blogs by Ascending,Descending and by category.
- **Show More**: Show more button for better performance and user experience.

## Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Firebase
- **State Management**: Redux Toolkit
- **Authentication**: JSON Web Tokens (JWT)

## Screenshots :

### Home Page
![Home page](https://github.com/Rakesh-99/draft-code/blob/master/client/src/assests/blogScreenshots/hero_section.png?raw=true)


### About Page 
![About page](https://github.com/Rakesh-99/draft-code/blob/master/client/src/assests/blogScreenshots/about.png?raw=true)

### Recent blogs

![Home page](https://github.com/Rakesh-99/fullstack-blog-app/blob/master/client/src/assests/blogScreenshots/homepage.png?raw=true)


### Blog Details page 

![Blog details img1](https://github.com/Rakesh-99/fullstack-blog-app/blob/master/client/src/assests/blogScreenshots/blogdetails1.png?raw=true)

![Blog details img2](https://github.com/Rakesh-99/fullstack-blog-app/blob/master/client/src/assests/blogScreenshots/blogdetails2.png?raw=true)

### Signup

![Signup](https://github.com/Rakesh-99/fullstack-blog-app/blob/master/client/src/assests/blogScreenshots/signup.png?raw=true)

### Signin

![Signin](https://github.com/Rakesh-99/fullstack-blog-app/blob/master/client/src/assests/blogScreenshots/signin.png?raw=true)

### Admin panel

![Admin panel - Blog List](https://github.com/Rakesh-99/fullstack-blog-app/blob/master/client/src/assests/blogScreenshots/adminPanelBlogList.png?raw=true)

![Admin panel - Comments](https://github.com/Rakesh-99/fullstack-blog-app/blob/master/client/src/assests/blogScreenshots/allComments.png?raw=true)

![Admin panel - User List](https://github.com/Rakesh-99/fullstack-blog-app/blob/master/client/src/assests/blogScreenshots/allUserList.png?raw=true)

### Comment

![Comment](https://github.com/Rakesh-99/fullstack-blog-app/blob/master/client/src/assests/blogScreenshots/comment.png?raw=true)

### Profile update

![Profile update](https://github.com/Rakesh-99/fullstack-blog-app/blob/master/client/src/assests/blogScreenshots/comment.png?raw=true)



## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ````bash
   git clone https://github.com/your-username/mern-blog-app.git```

   

2. Navigate to the project directory:

3. # For the backend

```bash
cd ./server
 -> npm install
```

# For the frontend

```bash
cd ./client
 -> npm install
```

3. Set up your .env varibales :

```
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PORT=your-port
```

4. Run the application :

# Start the backend server

```
cd ./server
 -> npm run dev
```

# Start the frontend development server

```
cd ./client
 -> npm run dev
```
