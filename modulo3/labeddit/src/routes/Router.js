import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { FeedPage } from "../pages/FeedPage/FeedPage"
import { PostPage } from "../pages/PostPage/PostPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}