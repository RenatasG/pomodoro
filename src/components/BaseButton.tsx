interface Props {
  children: React.ReactNode;
}

const BaseButton = ({ children }: Props) => (
  <button className="px-3 py-2 text-white rounded-lg bg-primary-500 hover:bg-primary-600">
    {children}
  </button>
);

export default BaseButton;
