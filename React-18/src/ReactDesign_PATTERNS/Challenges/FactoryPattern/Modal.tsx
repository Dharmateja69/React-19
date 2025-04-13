interface ModalProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}
export const Modal = ({ header, content, footer }: ModalProps) => (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded w-[90%] max-w-md">
      <div className="font-bold text-xl mb-2">{header}</div>
      <div className="mb-4">{content}</div>
      {footer && <div>{footer}</div>}
    </div>
  </div>
);
