import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Loading from "./Components/Loading";
import FirstPage from "./Components/FirstPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setEntered(true);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : entered ? (
        <FirstPage setEntered={setEntered} />
      ) : (
        <NavBar />
      )}
    </>
  );
}

export default App;
