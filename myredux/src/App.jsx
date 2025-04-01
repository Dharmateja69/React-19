import React from "react";
import AddNewProduct from "./Service/Components/AddNewProduct";
import AllProducts from "./Service/Components/AllProducts";
import DeleteProduct from "./Service/Components/DeleteProduct";
import SpecificProduct from "./Service/Components/SpecificProduct";
import UpdateProduct from "./Service/Components/UpdateProduct";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <AllProducts />
      <AddNewProduct />
      <DeleteProduct />
      <SpecificProduct />
      <UpdateProduct />
    </div>
  );
};

export default App;
