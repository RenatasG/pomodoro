interface Props {
  icon: string;
  className?: string;
  onClick: () => void;
}

const IconButton = ({ icon, className, onClick }: Props) => {
  const iconPath = `/public/assets/dashboard.svg#${icon}`;
  const classes = 'flex-shrink-0 block fill-current ' + className;

  return (
    <button
      className="p-2 rounded-lg hover:bg-primary-500/10 hover:text-primary-500"
      onClick={onClick}>
      <svg className={classes}>
        <use href={iconPath} xlinkHref={iconPath} />
      </svg>
    </button>
  );
};

export default IconButton;
