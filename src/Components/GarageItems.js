import React from 'react'
import './GarageItems.css'
import ProductListItem from './ProductListItem'


const GarageItems = ({productData,  addToCart}) => {

    const products = productData.map(product=>{
        return <ProductListItem key={product.id} product={product} addToCart={addToCart}/>
        })
 return (
     <section className="Products">
     <h1>My Garage Sale</h1>
     <ul>
         {products}
     </ul>
     </section>
 )   
}


export default GarageItems