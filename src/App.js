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
      <div className="css-container rounded-3 d-block m-auto h-auto mt-5 pb-2 pt-2 bg-light">
        <Logo />
        <Weather city="london" />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
