import React, { useEffect, useRef } from "react";

const SponsorCarousel = ({ logos }) => {
  const defaultLogos = [
    "sponser1.png",
    "https://media.ugcakes.com/assets/logo/ug-cakes-web-logo-small-dark.webp",
    "/sponser2.jpg",
    "/sponser3.png",
    "/sponser4.png",
    "/logo-light.png",
  ];

  const items = logos && logos.length ? logos : defaultLogos;
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const firstSet = track.querySelector('.logo-set');
    
    if (!firstSet) return;

    const images = Array.from(firstSet.querySelectorAll('img'));
    
    Promise.all(
      images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    ).then(() => {
      const setWidth = firstSet.offsetWidth;
      let position = 0;
      const speed = 1; 

      const animate = () => {
        position -= speed;
       
        if (Math.abs(position) >= setWidth) {
          position = 0;
        }
        
        track.style.transform = `translateX(${position}px)`;
        animationRef.current = requestAnimationFrame(animate);
      };

      animate();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [items]);

  return (
    <section className="py-12 ">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          Our Trusted Sponsors
        </h2>
        <div className="overflow-hidden relative py-12">
         
          
          <div ref={trackRef} className="flex" style={{ willChange: 'transform' }}>
        
            <div className="logo-set flex flex-row items-center">
              {items.map((src, i) => (
                <div
                  key={`set1-${i}`}
                  className="flex items-center justify-center px-8 shrink-0"
                >
                  <img
                    src={src}
                    alt={`Sponsor ${i + 1}`}
                    className="h-20 w-auto object-contain  duration-300 opacity-70 hover:opacity-100"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/150x80/cccccc/666666?text=Logo+${i + 1}`;
                    }}
                  />
                </div>
              ))}
            </div>
            
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorCarousel;