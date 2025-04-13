interface DangerProps {
  label: string;
}

const Danger = ({ label }: DangerProps) => {
  return <div className="bg-red-500 w-100 h-100">{label}</div>;
};

export default Danger;
