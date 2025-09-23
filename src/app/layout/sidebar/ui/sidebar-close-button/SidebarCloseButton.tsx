import useAppStore from '@store/app-store';
import CloseIcon from '@shared/ui/icons/CloseIcon';
import './styles.scss';

export function SidebarCloseButton() {
  const toogleSidebar = useAppStore((state) => state.toogleSidebar);

  return (
    <div className="close-button-div">
      <button className="close-button" onClick={toogleSidebar}>
        <CloseIcon />
      </button>
    </div>
  );
}
