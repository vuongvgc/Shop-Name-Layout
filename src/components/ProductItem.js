import React from "react";
class ProductItem extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="https://github.com/vuongvgc/Shop-Name-Layout">
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="https://github.com/vuongvgc/Shop-Name-Layout">Item Two</a>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur! Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </small>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductItem;
