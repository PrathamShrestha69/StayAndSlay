import React from "react";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";

const venue = "Himalayan Restro and Events Pvt Ltd";
const eventDate = "Monday Dec 1, 2025";
const location = "Hattisar, Kathmandu, Nepal";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-center py-4 px-5">
      <div className="max-w-6xl mx-auto text-sm flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
        <div>© {year} StayAndSaly — All rights reserved.</div>
        <div className="mt-4 flex items-center justify-center gap-2">
          <a
            href="https://www.instagram.com/stayandslay2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center  rounded-xl hover:scale-105 transition-transform duration-200"
          >
            <FaInstagram className="text-xl" />
            <span>Instagram</span>
          </a>
        </div>
        <div>
          <strong className="mr-1">Venue:</strong>
          <span>{venue}</span>
        </div>

        <div>
          <strong className="mr-1">Date:</strong>
          <span>{eventDate}</span>
          <span className="mx-2">•</span>
          <strong className="mr-1">Location:</strong>
          <span>{location}</span>
        </div>
      </div>

      {/* Live map embed (hidden on very small screens) */}
      <div className="max-w-6xl mx-auto px-4 mt-4 block">
        <div className="w-full h-48 sm:h-56 overflow-hidden rounded-lg border border-b-4 border-r-4 ">
          <iframe
            title="Event location map"
            src="https://www.google.com/maps?q=Himalayan+Restro+and+Events+Pvt+Ltd+Hattisar+Kathmandu&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="text-xl font-extrabold mt-2">
          <Link to="./admin">See you all there!</Link>
        </div>
      </div>
      <div className="line-through">
        <span>
          <a href="https://www.instagram.com/pratham_shrestha69">
            Made by @Pratham Shrestha
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
