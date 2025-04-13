interface TextProps {
  name: string;
}

const TextCard = ({ name }: TextProps) => {
  return <div className="w-[250px] h-[250px] border border-solid">{name}</div>;
};

export default TextCard;
