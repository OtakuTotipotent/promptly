import "./App.css";
import promptly from "./assets/promptly.svg";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-300 flex">
      {/* Sidebar */}
      <div className="flex-3 lg:flex-2 border-r border-gray-800 flex flex-col justify-between">
        {/* Upper Sidebar */}
        <div className="flex flex-col gap-4">
          {/* Top Side */}
          <div className="flex flex-col gap-4 p-4">
            {/* Logo & Branding */}
            <div className="flex gap-4 items-center flex-nowrap p-2 select-none cursor-default">
              <img src={promptly} alt="logo" className="logo" />
              <span className="font-bold text-lg text-cyan-400 uppercase">
                Promptly
              </span>
            </div>
            {/* Button */}
            <button className="text-cyan-500">
              <img src="" alt="" className="addBtn" />
              New Chat
            </button>
            {/* Chat Labels */}
            <div className="upperSideBottom">
              <button className="query">
                <img src="" alt="" />
                Chat label goes here
              </button>
              <button className="query">
                <img src="" alt="" />
                Chat label goes here
              </button>
            </div>
          </div>
        </div>
        {/* Lower Sidebar */}
        <div className="">
          {/* List Items */}
          <div className="">
            <div className="">
              <img src="" alt="icon" />
              <span className="">Homepage</span>
            </div>
            <div className="">
              <img src="" alt="icon" />
              <span className="">Saved Data</span>
            </div>
            <div className="">
              <img src="" alt="icon" />
              <span className="">Get Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="main flex-9 lg:flex-10"></div>
    </div>
  );
}

export default App;
