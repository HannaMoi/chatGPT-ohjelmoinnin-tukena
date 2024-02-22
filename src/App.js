import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import CreateGPT from "./components/CreateGPT";
import Prompting from "./components/Prompting";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";
import config from './config';



function App() {
  const {home, createGPT, prompting} = config.routes;

  return (
    <BrowserRouter>
     <div className="App">
        <Header />
        <NavigationBar /> 
        <div className="content">
          <Routes>
            <Route path={home} element={<Home />} />
            <Route path={createGPT} element={<CreateGPT />} />
            <Route path={prompting} element={<Prompting />} />
            <Route path={"*"} element={<Navigate to={home} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
