import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const SpeakerCard = ({
  name = "Speaker Name",
  desc = "Speaker Bio goes here. This is a brief description about the speaker.",
  img = "./prasanna.jpg",
  insta = "https://instagram.com",
}) => {
  return (
    <article className="border border-r-4 border-b-4 px-4 sm:px-6 rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="shrink-0  flex items-center justify-center pt-4">
        <img
          className="w-full border-r-4 border-b-4 max-w-xs h-40 sm:h-44 object-cover rounded-lg border"
          src={img}
          alt={name}
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">
          {name}
        </h3>
        <p className="text-sm flex-1">{desc}</p>

        <div className="mt-4 flex justify-center ">
          <a
            href={insta}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border hover:bg-black hover:text-white transition-colors duration-200 border-r-4 border-b-4"
          >
            <FaInstagram />
            <FaArrowRight />
          </a>
        </div>
      </div>
    </article>
  );
};

export default SpeakerCard;
