import "./App.css";
import LandingPage from "./components/LandingPage";
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
      </div>
    </>
  );
}

export default App;
