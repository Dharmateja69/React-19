interface ProductPros {
  data: any[];
  resourceName: string;
  DataToRender: any;
}
const Renderlist = ({
  data,
  resourceName,
  DataToRender: ProductToprint,
}: ProductPros) => {
  return (
    <div>
      {data.map((item, i) => (
        <ProductToprint key={i} {...{ [resourceName]: item }} /> //this part is the main which make the work more easier.. to do..
      ))}
    </div>
  );
};

export default Renderlist;
