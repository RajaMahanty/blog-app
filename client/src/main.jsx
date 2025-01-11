import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import Postlistpage from "./routes/Postlistpage.jsx";
import WritePage from "./routes/WritePage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/posts", element: <Postlistpage /> },
            { path: "/:slug", element: <SinglePostPage /> },
            { path: "/write", element: <WritePage /> },
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/"}>
            <RouterProvider router={router} />
        </ClerkProvider>
    </StrictMode>
);
