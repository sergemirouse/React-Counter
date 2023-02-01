import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header>
        <svg>
          <path d="M62.5 0H7.5C3.5 0 0 3.5 0 7.5V72.5C0 76.5 3.5 80 7.5 80H62.5C66.5 80 70 76.5 70 72.5V7.5C70 3.5 66.5 0 62.5 0ZM20 68C20 69 19 70 18 70H12C11 70 10 69 10 68V62C10 61 11 60 12 60H18C19 60 20 61 20 62V68ZM20 48C20 49 19 50 18 50H12C11 50 10 49 10 48V42C10 41 11 40 12 40H18C19 40 20 41 20 42V48ZM40 68C40 69 39 70 38 70H32C31 70 30 69 30 68V62C30 61 31 60 32 60H38C39 60 40 61 40 62V68ZM40 48C40 49 39 50 38 50H32C31 50 30 49 30 48V42C30 41 31 40 32 40H38C39 40 40 41 40 42V48ZM60 68C60 69 59 70 58 70H52C51 70 50 69 50 68V42C50 41 51 40 52 40H58C59 40 60 41 60 42V68ZM60 28C60 29 59 30 58 30H12C11 30 10 29 10 28V12C10 11 11 10 12 10H58C59 10 60 11 60 12V28Z" />
        </svg>
        <span>React Counter</span>
      </header>
      <main>
        <section>
          <div className="minus-plus">
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              <svg>
                <path d="M48.75 0.375H3.75C1.6793 0.375 0 2.0543 0 4.125V7.875C0 9.9457 1.6793 11.625 3.75 11.625H48.75C50.8207 11.625 52.5 9.9457 52.5 7.875V4.125C52.5 2.0543 50.8207 0.375 48.75 0.375Z" />
              </svg>
            </button>
            <div className="counter">
              <span>{counter}</span>
            </div>
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              <svg>
                <path d="M48.75 21.375H31.875V4.5C31.875 2.4293 30.1957 0.75 28.125 0.75H24.375C22.3043 0.75 20.625 2.4293 20.625 4.5V21.375H3.75C1.6793 21.375 0 23.0543 0 25.125V28.875C0 30.9457 1.6793 32.625 3.75 32.625H20.625V49.5C20.625 51.5707 22.3043 53.25 24.375 53.25H28.125C30.1957 53.25 31.875 51.5707 31.875 49.5V32.625H48.75C50.8207 32.625 52.5 30.9457 52.5 28.875V25.125C52.5 23.0543 50.8207 21.375 48.75 21.375Z" />
              </svg>
            </button>
          </div>
        </section>
        <div className="reboot">
          <button
            className="reset"
            onClick={() => {
              setCounter(0);
            }}
          >
            <p>Reset</p>
          </button>
        </div>
      </main>
      <footer>
        <div>
          <p>
            <span>Made with </span>
            <span className="react"> React </span>
            <span>at </span>
            <a href="https://www.lereacteur.io/">Le Reacteur</a>
            <span> by </span>
            <a href="https://github.com/sergemirouse">Serge Mirouse</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
