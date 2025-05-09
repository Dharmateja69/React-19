const printProps = (Component: any) => {
  return (props: any) => {
    console.log(props);
    return <Component {...props} />;
  };
};

export default printProps;
