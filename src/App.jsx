import "./App.css";
import promptly from "./assets/promptly.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import homeIcon from "./assets/home.svg";
import savedIcon from "./assets/bookmark.svg";
import rocketIcon from "./assets/rocket.svg";
import sendIcon from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import logoIcon from "./assets/promptly.svg";

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
            <button className="text-gray-200 flex border border-gray-500 rounded-full py-2 pl-8 gap-3 items-center opacity-70 hover:opacity-100 cursor-pointer transition-opacity select-none">
              <img src={addBtn} alt="+ icon" className="w-5 h-5" />
              <span className="text-sm font-semibold">New Chat</span>
            </button>
            {/* Chat Labels */}
            <div className="flex flex-col gap-2 py-4 border-t border-gray-700 select-none">
              <button className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-cyan-400">
                <img src={msgIcon} alt="Query" className="w-4 h-4" />
                <span className="truncate">Chat label One goes here</span>
              </button>
              <button className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-cyan-400">
                <img src={msgIcon} alt="Query" className="w-4 h-4" />
                <span className="truncate">Chat label Two comes here</span>
              </button>
            </div>
          </div>
        </div>
        {/* Lower Sidebar */}
        <div className="flex flex-col gap-2 px-2 pt-4 pb-2 border-t border-gray-700 select-none">
          <div className="flex gap-6 px-6 py-2 items-center justify-start cursor-pointer border border-cyan-800 rounded-full hover:border-cyan-600 text-gray-300 transition-colors">
            <img src={homeIcon} alt="Home" className="w-4 h-4" />
            <span className="">Homepage</span>
          </div>
          <div className="flex gap-6 px-6 py-2 items-center justify-start cursor-pointer border border-cyan-800 rounded-full hover:border-cyan-600 text-gray-300 transition-colors">
            <img src={savedIcon} alt="Saved" className="w-4 h-4" />
            <span className="">Saved Data</span>
          </div>
          <div className="flex gap-6 px-6 py-2 items-center justify-start cursor-pointer border border-cyan-800 rounded-full hover:border-cyan-600 text-gray-300 transition-colors">
            <img src={rocketIcon} alt="Rocket" className="w-4 h-4" />
            <span className="">Get Premium</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="main flex-9 lg:flex-10">
        <div className="max-w-3xl mx-auto flex flex-col h-full justify-between p-4">
          {/* Chats */}
          <div className="flex flex-col h-full gap-3 justify-center w-full">
            {/* User Message */}
            <div className="flex gap-4 items-start justify-end p-2">
              <p className="font-md text-gray-300/80 font-semibold bg-gray-800 py-2 px-4 rounded-2xl rounded-tr-none">
                Question/Prompt comes here.
              </p>
              <img
                src={userIcon}
                alt="User"
                className="w-6 h-6 rounded-full select-none cursor-default"
              />
            </div>
            {/* Model Message */}
            <div className="flex gap-4 items-start justify-start p-2">
              <img
                src={logoIcon}
                alt="User"
                className="w-6 h-6 select-none cursor-default"
              />
              <p className="font-md text-cyan-500 bg-gray-800 px-4 py-2 rounded-2xl rounded-tl-none">
                Answer/Response comes here. Hello, I am Muhammad Afnan Ahmad and
                I've been learning typing for the past few years. Can you please
                help me improve my skills by tutoring me daily at 7 O'Clock?
              </p>
            </div>
          </div>

          {/* Inputs */}
          <div className="flex items-center bg-cyan-950 py-1 px-5 mb-10 gap-4 rounded-full">
            <input
              type="text"
              required
              autoFocus
              placeholder="Type your prompts here . ."
              className="flex-1 p-2 outline-none border-none text-gray-300 font-md tracking-wide"
            />
            <button className="flex">
              <img src={sendIcon} alt="Send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
