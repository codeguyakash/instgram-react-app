import { useEffect } from "react";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
  return (
    <>
      <Header />
    </>
  );
}

export default App;
