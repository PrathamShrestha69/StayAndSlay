import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import LenisProvider from "./LenisProvider.jsx";

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        <LenisProvider>
          {isLoading ? (
            <div className="min-h-screen flex items-center justify-center bg-base-100">
              <div className="flex flex-col items-center gap-3">
                <span className="loading loading-dots loading-xl" aria-hidden></span>
                
              </div>
            </div>
          ) : (
            <App />
          )}
        </LenisProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
