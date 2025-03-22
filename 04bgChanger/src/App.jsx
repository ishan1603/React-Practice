import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className="fixed flex justify-center bottom-12 left-1/2 -translate-x-1/2 w-fit px-4 bg-white rounded-full shadow-lg py-2 px-4 gap-4">
          <button
            style={{ backgroundColor: "red", cursor: "pointer" }}
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black-800"
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "green", cursor: "pointer" }}
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black-800"
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "blue", cursor: "pointer" }}
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black-800"
          >
            Blue
          </button>
          <button
            style={{ backgroundColor: "yellow", cursor: "pointer" }}
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black-800"
          >
            Yellow
          </button>
          <button
            style={{ backgroundColor: "orange", cursor: "pointer" }}
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black-800"
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
