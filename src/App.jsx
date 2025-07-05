import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
