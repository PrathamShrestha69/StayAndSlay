import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="flex flex-col  p-10 text-center gap-6 max-w-4xl mx-auto">
      <h1>LOGO</h1>
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        STAY AND SLAY
      </h1>
      <p className="text-xl">
        “Stay & Slay: Build Your Dreams in Nepal” is a student led event focused
        on SDG 8 "Decent Work and Economic Growth" which will help for youth
        career development in Nepal. Our event focuses on providing insights
        from our guests about decent work and economic growth with a little
        twist of fun workshops filled with different business ideas qnas and a
        lot of different activities.
      </p>
      <button className="btn btn-small btn-accent rounded-2xl mx-auto">
        <Link to="/register">Registration Open Now!!</Link>
      </button>
    </div>
  );
};

export default HomePage;
