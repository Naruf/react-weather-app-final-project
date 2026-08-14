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
      <div className="css-container rounded-3 d-block m-auto h-100 mt-sm-5 pb-2 ms-sm-auto me-sm-auto 2 pt-2 bg-light shadow">
        <Logo />
        <Weather defaultCity="Granada" />
        <Footer />
      </div>
    </div>
  );
}
