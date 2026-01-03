import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';
import { SigninPage } from './pages/SigninPages';
import {MyPostPage} from './pages/MyPostPage';  
import {HomePage} from './pages/HomePage';
import {CreatePage} from './pages/CreatePage';
import { Layout } from './Layout/Layout';



export default function App() {
  return (
    <Routes>
      {/* Headerなしのページ */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<SigninPage />} />
      <Route element={<Layout />}>
      <Route path="/mypost" element={<MyPostPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/signup" replace />} />
    </Routes>
  );
}
