import './App.css';
import Navbar from './Navbar';
import dictionary from "./images/dictionary.png"
import weather from "./images/weather.png"
import swimming from "./images/swimming.png"

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2 className="text-center">👋 Hi, I am</h2>
      <h1 className="text-center">Ekaterina Filatova</h1>
      <h3 className="text-center">
        Junior Front-end developer, based in London, UK
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={dictionary}
              className="img-fluid rounded d-none d-sm-block mt-5"
              alt="Dictionary screenshot"
            />
          </div>
          <div class="col-sm-6">
            <h2 class="mb-3 ">Dictionary App</h2>
            <p>My Dictionary project</p>
            <div class="mt-5">
              <a
                href="https://mellow-biscotti-bc44e5.netlify.app/"
                class="primary-link project-link"
                target="_blank"
                rel="noreferrer"
              >
                Launch Dictionary App
              </a>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-6">
              <h2 className="mb-3">Weather app</h2>
              <p>My weather app</p>
              <div className="mb-5 mt-5">
                <a
                  href="https://radiant-taiyaki-bd9b03.netlify.app/"
                  class="primary-link project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch Weather App
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <img
                src={weather}
                className="img-fluid rounded d-none d-sm-block"
                alt="Weather_app"
              />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-6">
            <img
              src={swimming}
              className="img-fluid rounded d-none d-sm-block"
              alt="swimming"
            />
          </div>
          <div className="col-sm-6">
            <h2 className="mb-3">Swimming Teacher App</h2>
            <p>My Swimming teacher page</p>
            <div className="mt-5">
              <a
                href="https://resilient-jalebi-9651d2.netlify.app/"
                className="primary-link project-link"
                target="_blank"
                rel="noreferrer"
              >
                Launch Swimming Teacher App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
