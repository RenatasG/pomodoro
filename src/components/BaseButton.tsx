interface Props {
  children: React.ReactNode;
}

const BaseButton = ({ children }: Props) => (
  <button className="px-3 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
    {children}
  </button>
);

export default BaseButton;
