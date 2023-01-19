import React from "react";

export default function Navbar() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg bg-light fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="/" title="Homepage">
              Ekaterina Filatova
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/"
                    title="Homepage"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about.html" title="About me page">
                    About me
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/about.html#contact"
                    title="Contact me place"
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}