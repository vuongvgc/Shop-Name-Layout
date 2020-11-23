import React from "react";
class Carousel extends React.Component {
  render() {
    return (
      <div
        id="carouselShopNameIndicators"
        className="carousel slide my-4"
        data-ride="carousel"
      >
        {/* dots indicators  */}
        <ol className="carousel-indicators">
          <li
            data-target="#carouselShopNameIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselShopNameIndicators" data-slide-to="1"></li>
          <li data-target="#carouselShopNameIndicators" data-slide-to="2"></li>
        </ol>
        {/* carousel item  */}
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              className="d-block img-fluid"
              src="http://placehold.it/900x350"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              src="http://placehold.it/900x350"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              src="http://placehold.it/900x350"
              alt="Third slide"
            />
          </div>
        </div>
        {/* button control  */}
        <a
          className="carousel-control-prev"
          href="#carouselShopNameIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselShopNameIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default Carousel;
