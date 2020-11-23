import React from "react";
import Category from './Category';
import Carousel from './Carousel';
import ProductItem from './ProductItem';
class PageContent extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
            {/* Category  */}
          <div className="col-lg-3">
            <Category />
          </div>

          <div className="col-lg-9">
            {/* Carousel  */}
            <Carousel />
            <div className="row">
                {/* ProductItem  */}
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
