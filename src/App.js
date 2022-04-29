import {Header} from "./components/header/Header";
import Slick from "./components/slider/Slick";
import {HomePage} from "./pages/HomePage/HomePage";
import { InitialPage } from "./pages/InitialPage/InitialPage";

function App() {
  return (
    <div>
      <Header/>
      <HomePage/>
    {/* <InitialPage/>  */}
    <Slick/>
    </div>
  );
}

export default App;
