import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="css-container">
        <header>
          <h1>Nadia's weather app</h1>
        </header>
        <footer>
          <div className="Footer text-bg-warning rounded-2 border border-secondary ms-2 me-2">
            This project was coded by{" "}
            <a href="https://github.com/Naruf" target="_blank" rel="noreferrer">
              Nadia Ruiz
            </a>
            , is{" "}
            <a
              href="https://github.com/Naruf/react-weather-app-final-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://react-weather-app-final-project.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Vercel
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
