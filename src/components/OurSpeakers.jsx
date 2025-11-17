import React from "react";
import SpeakerCard from "./SpeakerCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OurSpeakers = () => {
  useGSAP(() => {
    gsap.from("#text h1,#text p", {
      y: 100,
      opacity: 0,
      duration: 1.6,
      ease: "power4.out",

      scrollTrigger: {
        trigger: "#text",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
        stagger: 0.2,
      },
    });
    gsap.from("#card", {
      y: 100,
      opacity: 0,
      duration: 1.6,
      delay: 0.2,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#text",
        start: "top 40%",
        end: "bottom 20%",
        scrub: true,
        stagger: 0.2,
      },
    });
  });

  const speakers = [
    {
      name: "Prasanna Manandhar",
      desc: "Founder of @thelocals_kathmandu",
      img: "/prasanna.jpg",
      insta: "https://www.instagram.com/prasannamanandhar/",
    },
    {
      name: "Himanshu Pokharel",
      desc: "Entrepreneur",
      img: "/himanshu.jpg",
      insta: "https://www.instagram.com/himanshu_pokharel/",
    },
  ];

  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <header id="text" className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          Our Speakers!!
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
          Meet the experts and guests who will share insights, stories, and
          practical tips to help build your dreams.
        </p>
      </header>

      <div
        id="card"
        className="mt-15 flex flex-row items-center justify-between gap-6"
      >
        {speakers.map((s, idx) => (
          <SpeakerCard
            key={idx}
            name={s.name}
            desc={s.desc}
            img={s.img}
            insta={s.insta}
          />
        ))}
      </div>
    </section>
  );
};

export default OurSpeakers;
