import React from "react";
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="https://github.com/vuongvgc">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="https://github.com/vuongvgc">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/vuongvgc">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/vuongvgc">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/vuongvgc">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
