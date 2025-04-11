interface StatCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
}

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <div
      className={`
        relative p-[2px] rounded-xl overflow-hidden 
        before:content-[''] before:absolute before:inset-[-40%] 
        before:bg-gradient-to-br before:from-cyan-400 
        before:via-[var(--theme-color)] before:to-fuchsia-500 
        before:animate-[spin_4s_linear_infinite] 
        after:content-[''] after:absolute after:inset-[2px] 
        after:bg-gray-800 after:rounded-xl
      `}
    >
      <div className="relative z-10 p-4 rounded-xl shadow-md text-center w-full">
        {icon && <div className="text-3xl mb-2">{icon}</div>}
        <h4 className="text-lg font-medium text-[var(--theme-color)]">
          {value}
        </h4>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default StatCard;
