interface Imageprops {
  src: string;
  name: string;
}
const ImageCrad = ({ src, name }: Imageprops) => {
  return (
    <div className="w-[250px] h-[250px] border border-solid text-white">
      <img src={src} alt={name} />
    </div>
  );
};

export default ImageCrad;
