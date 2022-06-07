import React from "react";
import { useState, useEffect } from "react";
import Cart from "./Cart"
import Products from "./Products"
import staticData from "../lib/data.js"
// todo:
  // onclick for showing add form
  // onclick for showing edit form
// should we move the data into individual components? (cart data will be different from product data)
const App = () => {
  const [data, setProductData] = useState([]);

  // const handleClick = (state, callback) => {
  //   return () => {
  //     // e.preventDefault()
  //     callback(!state);
  //   }
  //  }

  useEffect(()=> {
    setProductData(staticData)}, [])

  //   ;(async (arguments) => {
      
  //   })()
  // }

  return (
    <div id="app">
      <h1>The Shop!</h1>
      <Cart data={data}/>
      <Products data={data} />
    </div>
  );
};

export default App;
