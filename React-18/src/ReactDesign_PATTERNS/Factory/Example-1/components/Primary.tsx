interface PrimaryProps {
  label: string;
}

const Primary = ({ label }: PrimaryProps) => {
  return <div className="bg-green-500 w-100 h-100">{label}</div>;
};

export default Primary;
