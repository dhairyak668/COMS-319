import logo from './logo.png';
import './App.css';

import React, {useState} from "react";
import {Products} from "./Products"
import {Categories} from "./Categories"

function App() {
  return (
    <div >
{Products[0].description}
<img src={Products[0].image} />
</div>
  );
}

const App = () => {
  console.log("Step 1 : load Products in a useState.");
  const [ProductsCategory, setProductsCategory] = useState(Products);

  }

return <div>
{ProductsCategory.map((product, index) => (
<div key={index} >
<img src={product.image} alt="Product Image" />
</div>
))}
</div>


export default App;
