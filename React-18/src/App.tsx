import axios from "axios";
import DataSource from "./ReactDesign_PATTERNS/Challenges/Containercomponent/DataSource";
import ProductInfo from "./ReactDesign_PATTERNS/Challenges/Containercomponent/ProductInfo";

const getServerData = (url: string) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <>
      <DataSource
        getDatafun={getServerData("https://fakestoreapi.com/products")}
        resourceName="products"
      >
        <ProductInfo /> {/* ✅ NO need to pass props manually */}
      </DataSource>
    </>
  );
};

export default App;
