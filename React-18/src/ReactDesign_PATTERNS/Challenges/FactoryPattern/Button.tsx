// Button.tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ label, onClick, disabled }: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded ${
      disabled ? "bg-gray-400" : "bg-blue-500 text-white"
    }`}
  >
    {label}
  </button>
);
