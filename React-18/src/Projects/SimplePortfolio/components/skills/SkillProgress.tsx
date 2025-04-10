interface SkillProgressProps {
  label: string;
  percent: number;
}

const SkillProgress = ({ label, percent }: SkillProgressProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-1">{label}</h3>

      <div className="w-full bg-gray-800 rounded-full h-5 relative overflow-hidden">
        <div
          className="bg-[var(--theme-color)] h-full transition-all duration-700 ease-in-out flex items-center justify-end pr-2"
          style={{ width: `${percent}%` }}
        >
          <span className="text-xs text-white font-medium">{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
