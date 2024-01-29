import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateGPT from "./components/CreateGPT";
import Prompting from "./components/Prompting";
import CourseDesign from "./components/CourseDesign";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";
import config from './config';


function App() {

  return (
    <BrowserRouter>
     <div className="App">
        <Header />
        <NavigationBar /> {/* Tämä sijaitsee nyt content-divin ulkopuolella */}
        <div className="content">
          <Routes>
            <Route path={config.routes.home} element={<Home />} />
            <Route path={config.routes.createGPT} element={<CreateGPT />} />
            <Route path={config.routes.prompting} element={<Prompting />} />
            <Route path={config.routes.courseDesign} element={<CourseDesign />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
