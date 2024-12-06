import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Update from './pages/Update'
import { useState } from 'react'

function App() {

  const [updateProduct,setupdateProduct]=useState(null);

  const [products, setProducts] = useState([]);

  const updateProductList = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod.id === updatedProduct.id ? updatedProduct : prod
      )
    );
  };
  return (
    <>
    <Routes>
      <Route path="" element={<Home  setupdateProduct ={setupdateProduct} products={products}
              setProducts={setProducts}/>}/>
      <Route path="/add" element={<Add/>}/>
     <Route path="/update" element={<Update updateProduct={updateProduct}  updateProductList={updateProductList}/>}/>
    </Routes>
     
    </>
  )
}

export default App
