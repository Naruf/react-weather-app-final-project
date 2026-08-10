import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import "./Weather.css";
import "./Footer.css";
import Logo from "./Logo";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="css-container rounded-3 d-block m-auto w-50 h-auto mt-5 pb-2 pt-2 bg-light">
        <Logo />
        <Weather />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
