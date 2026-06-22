import "./App.css";
import promptly from "./assets/promptly.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import homeIcon from "./assets/home.svg";
import savedIcon from "./assets/bookmark.svg";
import rocketIcon from "./assets/rocket.svg";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-300 flex">
      {/* Sidebar */}
      <div className="flex-3 lg:flex-2 border-r border-gray-700/60 flex flex-col justify-between">
        {/* Upper Sidebar */}
        <div className="flex flex-col gap-4">
          {/* Top Side */}
          <div className="flex flex-col gap-6 p-4">
            {/* Logo & Branding */}
            <div className="flex gap-4 items-center flex-nowrap p-2 select-none cursor-default">
              <img src={promptly} alt="logo" className="logo" />
              <span className="font-bold text-lg text-cyan-400 uppercase">
                Promptly
              </span>
            </div>
            {/* Button */}
            <button className="text-gray-200 flex border border-gray-500 rounded-full py-2 pl-8 gap-3 items-center opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
              <img src={addBtn} alt="+ icon" className="w-5 h-5" />
              <span className="text-sm font-semibold">New Chat</span>
            </button>
            {/* Chat Labels */}
            <div className="flex flex-col gap-2 py-4 border-t border-gray-700 select-none">
              <button className="flex items-center cursor-pointer text-gray-400 hover:text-cyan-400">
                <img src={msgIcon} alt="Query" />
                <span className="">Chat label One goes here</span>
              </button>
              <button className="flex items-center cursor-pointer text-gray-400 hover:text-cyan-400">
                <img src={msgIcon} alt="Query" />
                <span className="">Chat label Two comes here</span>
              </button>
            </div>
          </div>
        </div>
        {/* Lower Sidebar */}
        <div className="flex flex-col gap-2 px-2 pt-4 pb-2 border-t border-gray-700 select-none">
          <div className="flex gap-6 px-6 py-2 items-center justify-start cursor-pointer border border-cyan-800 rounded-full hover:border-cyan-600 text-gray-300 transition-colors">
            <img src={homeIcon} alt="Home" />
            <span className="">Homepage</span>
          </div>
          <div className="flex gap-6 px-6 py-2 items-center justify-start cursor-pointer border border-cyan-800 rounded-full hover:border-cyan-600 text-gray-300 transition-colors">
            <img src={savedIcon} alt="Saved" />
            <span className="">Saved Data</span>
          </div>
          <div className="flex gap-6 px-6 py-2 items-center justify-start cursor-pointer border border-cyan-800 rounded-full hover:border-cyan-600 text-gray-300 transition-colors">
            <img src={rocketIcon} alt="Rocket" />
            <span className="">Get Premium</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="main flex-9 lg:flex-10"></div>
    </div>
  );
}

export default App;
