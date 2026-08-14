import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import "./Weather.css";
import "./Footer.css";
import Logo from "./Logo";
import "./WeatherData.css";

export default function App() {
  return (
    <div className="App">
      <div className="css-container rounded-3 d-block h-auto mt-3 mb-2 mt-sm-5 pb-2 ms-sm-auto me-2 me-sm-auto 2 pt-2 bg-light shadow">
        <Logo />
        <Weather defaultCity="Granada" />
        <Footer />
      </div>
    </div>
  );
}
