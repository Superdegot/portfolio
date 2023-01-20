import './App.css';
import Navbar from './Navbar';


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
              src="#"
              className="img-fluid rounded d-none d-sm-block"
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
              >
                Launch Dictionary App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
