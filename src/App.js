import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
// import { CursorProvider } from 'react-cursor-custom'

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}

function App() {

  const { x, y } = useMousePosition();

  return (
    <div>
      <div
        className="main-cursor "
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <Home />
    </div>
  );
}

export default App;
