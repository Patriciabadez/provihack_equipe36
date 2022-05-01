
import { Footer } from "./components/footer/Footer";
import { FooterPage } from "./components/footer/FooterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header} from "./components/header/Header";
import Slick from "./components/slider/Slick";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { DonationPage } from "./pages/DonationPage/DonationPage";
import {HomePage} from "./pages/HomePage/HomePage";
import { InitialPage } from "./pages/InitialPage/InitialPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
      {/* <Header/> */}
      {/* <HomePage/> */}
      {/* <FooterPage/> */}
      {/* <InitialPage/>  */}
       <BrowserRouter>
        <Routes> 
          <Route exact path='' element={<InitialPage />} />
          <Route exact path='compras' element={<HomePage />} />
          <Route exact path='login' element={<LoginPage />} />
          <Route exact path='dashboard' element={<DashboardPage />} />
          <Route exact path='doar' element={<DonationPage />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
