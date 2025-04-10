interface StatCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center w-full">
      {icon && <div className="text-3xl mb-2">{icon}</div>}
      <h4 className="text-lg font-medium text-[var(--theme-color)]">{value}</h4>
      <p className="text-sm text-gray-400">{title}</p>
    </div>
  );
};

export default StatCard;
