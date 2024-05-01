import "./App.css";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div
        className="w-full bg-zinc-900 min-h-screen text-white
       "
      >
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
      </div>
    </>
  );
}

export default App;
