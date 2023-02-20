interface Props {
  icon: string;
  children?: React.ReactNode;
  iconClass?: string;
  onClick: () => void;
}

const IconButton = ({ children, icon, iconClass, onClick }: Props) => {
  const iconPath = `/assets/dashboard.svg#${icon}`;
  const classes = 'flex-shrink-0 block fill-current ' + iconClass;

  const slotText = children ? (
    <span className="hidden sm:inline">{children}</span>
  ) : null;

  return (
    <button
      className="flex items-center p-2 rounded-lg gap-x-2 hover:bg-primary-500/10 hover:text-primary-500"
      onClick={onClick}>
      <svg className={classes}>
        <use href={iconPath} xlinkHref={iconPath} />
      </svg>

      {slotText}
    </button>
  );
};

export default IconButton;
