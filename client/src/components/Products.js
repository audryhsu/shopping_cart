
import Product from './Product'
import ProductAddForm from './ProductAddForm'
import { useDispatch, useSelector } from 'react-redux';
import toggleAddForm from "../action/toggleAddFormAction";
import { useEffect } from 'react';
// import { productsReceived } from "../action/productsAction"
import {fetchProducts } from "../features/products"

const Products = ()=> {
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.products)
  const addFormVisibility = useSelector((state) => state.addFormVisibility)

  useEffect(() => {
      // dispatch the thunk function instead of action object
    dispatch(fetchProducts())
  },[dispatch]);

  const handleAddClick = (e) => {
    e.preventDefault()
    dispatch(toggleAddForm(!addFormVisibility))
  }
 
  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map(product => {
          return (<Product key={product._id} product={product}/>)
        })}
      </div>
      
      <div className="add-form">
        <p><a href="/#" className="button add-product-button" onClick={ handleAddClick }>Add A Product</a></p>
      </div>
      {addFormVisibility ? <ProductAddForm /> : null}
    </main>
)}

export default Products;