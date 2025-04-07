import {
  clothing,
  electronics,
  homeGoods,
} from "./ReactDesign_PATTERNS/Challenges/Listdata/Data";
import ProductInfo from "./ReactDesign_PATTERNS/Challenges/Listdata/ProductInfo";
import Renderlist from "./ReactDesign_PATTERNS/Challenges/Listdata/Renderlist";

const App = () => {
  return (
    <>
      <Renderlist
        data={electronics}
        resourceName="product"
        DataToRender={ProductInfo}
      />
      <Renderlist
        data={clothing}
        resourceName="product"
        DataToRender={ProductInfo}
      />
      <Renderlist
        data={homeGoods}
        resourceName="product"
        DataToRender={ProductInfo}
      />
    </>
  );
};

export default App;
