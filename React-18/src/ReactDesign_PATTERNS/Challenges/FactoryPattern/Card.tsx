// Card.tsx
interface CardProps {
  title: string;
  content: string;
  footer?: string;
}

export const Card = ({ title, content, footer }: CardProps) => (
  <div className="border p-4 rounded shadow">
    <h2 className="font-bold text-lg">{title}</h2>
    <p>{content}</p>
    {footer && <div className="mt-2 text-sm text-gray-600">{footer}</div>}
  </div>
);
