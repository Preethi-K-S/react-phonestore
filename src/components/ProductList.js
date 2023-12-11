import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../Context';
class ProductList extends Component {
    

    render() { 
        
        return (
           <React.Fragment>
            <div className='p-5'>
                <div className='container'>
                    <Title name="OUR" title="PRODUCTS"/>
                    
                    <div className='row'>
                        <ProductConsumer>
                            {value=>{
                               return value.products.map(product =>{
                                return <Product key={product.id} Product={product}/>
                               })

                            }}
                        </ProductConsumer>

                    </div>

                </div>

            </div>
           </React.Fragment>
             //  <Product/>
        
        );
    }
}
 
export default ProductList;