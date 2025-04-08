import React, { ReactNode, useEffect, useState } from "react";
interface Dataprops {
  getDatafun?: () => void;
  resourceName: string;
  children: ReactNode;
}
const DataSource = ({
  getDatafun = () => {},
  resourceName,
  children,
}: Dataprops) => {
  const [state, setstate] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const data = await getDatafun();
      setstate(data);
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};

export default DataSource;
