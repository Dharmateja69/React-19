interface Dataprops {
  data: string;
}

const MyComponent = ({ data }: Dataprops) => {
  return <div>Data:{data}</div>;
};

export default MyComponent;
