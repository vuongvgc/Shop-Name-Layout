import React from 'react';
import ProductItem from './ProductItem';
class ProductList extends React.Component {
    render(){
        return(
            <div className="row">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
        )
    }
}
export default ProductList