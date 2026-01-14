import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/Pages/Home";

import { Route, Routes } from "react-router-dom";
import Pricing from "./assets/Pages/Pricing";
import FAQ from "./assets/Pages/FAQ";
import Blog from "./assets/Pages/Blog";
import Contact from "./assets/Pages/Contact";
import CoursesPage from "./assets/Pages/CoursesPage";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/courses" element={<CoursesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
