import React from "react";
interface withloadings {
  isloading: boolean;
  [key: string]: any;
}
const withloading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function Withloading({ isloading, ...props }: withloadings & P) {
    if (isloading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...(props as P)} />;
  };
};

export default withloading;
