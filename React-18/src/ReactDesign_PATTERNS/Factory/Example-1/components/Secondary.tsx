interface SecondaryProps {
  label: string;
}

const Secondary = ({ label }: SecondaryProps) => {
  return <div className="bg-blue-500 w-100 h-100">{label}</div>;
};

export default Secondary;
