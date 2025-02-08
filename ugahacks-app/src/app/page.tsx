'use client';  // Ensure this is at the top of the file

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Correct imports
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <div className="flex justify-center">
      </div>
    </div>
  );
}

// function Page1() {
//   return <div>Page 1 Content</div>;
// }

function Home() {
  return (
    <div className="flex justify-center ...">
      <button className="btn btn-outline btn-primary">Hi There</button>
    </div>
  );
}
