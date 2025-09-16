import AddIcon from "../../../shared/ui/icons/AddIcon";
import useAppStore from "../../../store/app-store";
import "./styles.css";

function OpenFormTask({ onClick = null }) {
  const toogleForm = useAppStore((state) => state.toogleForm);

  const onClickHandle = () => {
    toogleForm();
    if (onClick) onClick();
  };

  return (
    <>
      <button className="add-button" onClick={onClickHandle}>
        <AddIcon />
        <span>Добавить задачу</span>
      </button>
    </>
  );
}

export default OpenFormTask;
