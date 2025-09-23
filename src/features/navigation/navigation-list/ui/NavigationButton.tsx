import './styles.css';

type SidebarButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
};

export function NavigationButton({ onClick, icon, title }: SidebarButtonProps) {
  return (
    <button className="nav-item" onClick={onClick}>
      {icon}
      <span className="nav-item-name">{title}</span>
    </button>
  );
}
