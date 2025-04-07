interface Renderlistprops {
  data: any[];
  resourceName: string;
  dataToRender: any;
}
const Rednderlist = ({
  data,
  resourceName,
  dataToRender: ItemComponent,
}: Renderlistprops) => {
  return (
    <div>
      {data.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};

export default Rednderlist;
/// <div>
// {data.map((item, i) => (
//     <ItemComponent key={i} {...{ [resourceName]: item }} />
//   ))}
// </div>   reasuable map if we have multiple resoucrename in this context we have games,movies as resoucrename
