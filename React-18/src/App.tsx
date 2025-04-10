import { useEffect, useState } from "react";
import MyComponent from "./ReactDesign_PATTERNS/HoC/Withloading/MyComponent";
import withloading from "./ReactDesign_PATTERNS/HoC/Withloading/withloading";

const WrappedWithLoading = withloading(MyComponent);

const App = () => {
  const [data, setdata] = useState("");
  const [isloading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setdata("this is data fetched!");
      setloading(false);
    }, 2000);
  }, []);

  return <WrappedWithLoading isloading={isloading} data={data} />;
};

export default App;
