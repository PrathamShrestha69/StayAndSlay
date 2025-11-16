import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import RegistrationForm from "./components/RegistrationForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
