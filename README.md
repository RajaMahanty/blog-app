# quillSpace - Blog App

## Overview

quillSpace is a modern blog application built with React, Vite, and TailwindCSS. It allows users to create, read, update, and delete blog posts. The application also includes features such as user authentication, rich text editing, and category-based filtering.

## Features

-   **User Authentication**: Secure login and registration using Clerk.
-   **Rich Text Editor**: Create and edit posts with a rich text editor powered by ReactQuill.
-   **Responsive Design**: Fully responsive design using TailwindCSS.
-   **Category Filtering**: Filter posts by categories.
-   **Search Functionality**: Search for posts using keywords.
-   **Post Management**: Create, read, update, and delete posts.

## Technologies Used

-   **React**: JavaScript library for building user interfaces.
-   **Vite**: Next-generation frontend tooling.
-   **TailwindCSS**: Utility-first CSS framework.
-   **Clerk**: User management and authentication.
-   **React Router**: Declarative routing for React.
-   **ReactQuill**: Rich text editor for React.

## Project Structure

```
/src
|-- /components
|   |-- Navbar.jsx
|   |-- SideMenu.jsx
|   |-- PostList.jsx
|   |-- PostListItem.jsx
|   |-- Comments.jsx
|   |-- Comment.jsx
|   |-- FeaturedPosts.jsx
|   |-- MainCategories.jsx
|   |-- Image.jsx
|-- /layouts
|   |-- MainLayout.jsx
|-- /routes
|   |-- HomePage.jsx
|   |-- PostListPage.jsx
|   |-- SinglePostPage.jsx
|   |-- WritePage.jsx
|   |-- LoginPage.jsx
|   |-- RegisterPage.jsx
|-- App.jsx
|-- main.jsx
|-- index.css
|-- tailwind.config.js
|-- vite.config.js
```

## Acknowledgements

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Clerk](https://clerk.dev/)
-   [React Router](https://reactrouter.com/)
-   [ReactQuill](https://github.com/zenoamaro/react-quill)
