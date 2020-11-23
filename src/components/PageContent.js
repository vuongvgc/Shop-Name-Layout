import React from "react";
import Category from "./Category";
import Carousel from "./Carousel";
import ProductItem from "./ProductItem";
class PageContent extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          {/* left  */}
          <div className="col-lg-3">
            {/* Category  */}
            <Category />
          </div>
          {/* right  */}
          <div className="col-lg-9">
            {/* Carousel  */}
            <Carousel />
            {/* ProductItem  */}
            <div className="row">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PageContent;
