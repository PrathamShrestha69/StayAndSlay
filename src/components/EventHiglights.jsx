import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const EventHiglights = () => {
  useGSAP(() => {
    gsap.from("#text1 h1,#text1 p", {
      y: 100,
      opacity: 0,
      duration: 1.6,
      ease: "power4.out",

      scrollTrigger: {
        trigger: "#text1",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
        stagger: 0.2,
      },
    });
    gsap.from("#tb", {
      y: 100,
      opacity: 0,
      duration: 1.6,
      ease: "power4.out",
      delay:0.5,
      scrollTrigger: {
        trigger: "#text1",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
        stagger: 0.2,
      },
    });
  });
  return (
    <div>
      <header id="text1" className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          Event Highlights
        </h1>
        <p className="text-sm sm:text-base  max-w-3xl mx-auto">
          To bring this vision to life, Stay & Slay offers a dynamic mix of
          sessions designed to inspire, engage, and empower.
        </p>
      </header>
      <section className="mt-8 max-w-4xl mx-auto px-4">
        <div className="overflow-x-auto overflow-y-hidden">
          <table id="tb" className="table w-full table-auto border-2 border-b-4 border-r-4 rounded-lg">
            <thead>
              <tr>
                <th className="bg-base-200 text-left px-4 py-2">Activities</th>
                <th className="bg-base-200 text-left px-4 py-2">Attractions</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const activities = [
                  "Fun Games, Gifts and Activities",
                  "Panel Discussion & Motivational Speeches",
                  "Business Idea Workshop",
                  
                  "Live Q&A with Guests",
                  "Networking session and high tea",
                  "Closing Performances",
                ];

                const attractions = [
                  ,
                  "Real Success Stories from Nepal",
                  "Youth-Centered Career Guidance",
                  "Inspiring Journey & Mindset Talks",
                ];

                const rows = Math.max(activities.length, attractions.length);

                return Array.from({ length: rows }).map((_, i) => (
                  <tr key={i} className="hover:bg-base-100">
                    <td className="px-4 py-3 align-top text-sm">
                      {activities[i] ?? ""}
                    </td>
                    <td className="px-4 py-3 align-top text-sm">
                      {attractions[i] ?? ""}
                    </td>
                  </tr>
                ));
              })()}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default EventHiglights;
