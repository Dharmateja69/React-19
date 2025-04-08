import React, { ReactNode, useEffect, useState } from "react";

interface DataProps {
  getDatafunc?: () => void;
  resourceName: string;
  children: ReactNode;
}

const DataSource = ({
  getDatafunc = () => {},
  resourceName,
  children,
}: DataProps) => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getDatafunc();
      setState(data);
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
// <ChildComponent user={{ name: "John" }} />
