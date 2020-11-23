import React from "react";
import SideBar from "./SideBar";
import Carousel from "./Carousel";
import ProductList from "./ProductList";
class PageContent extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          {/* left  */}
          <div className="col-lg-3">
            {/* Category  */}
            <SideBar />
          </div>
          {/* right  */}
          <div className="col-lg-9">
            {/* Carousel  */}
            <Carousel />
            {/* ProductList  */}
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}
export default PageContent;
