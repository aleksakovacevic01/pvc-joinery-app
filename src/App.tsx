import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Ovde dodaješ druge rute kasnije */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
