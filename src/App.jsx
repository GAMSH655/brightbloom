import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact'
import News from './pages/News'
import ReadMore from './pages/ReadMore'
const App = () => {
  return (
       <>
      <Header />
       <Scroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<ReadMore />} />
      </Routes>

      <Footer />
       </>
  );
};

export default App;