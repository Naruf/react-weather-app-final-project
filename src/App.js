import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Nadia's weather app</h1>
      </header>
      <footer>
        <div className="Footer">
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
  );
}
