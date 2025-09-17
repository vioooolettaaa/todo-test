import "./styles.css";
import UrgentlyInput from "../UrgentlyInput/UrgentlyInput";

function FormTask({ onCreate, onCancel }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const dataForm = {};

    const elements = e.target.elements;
    Array.from(elements).forEach((item) => {
      if (!!item.name) {
        dataForm[item.name] = item.value;
      }
      if (item.type === "checkbox") {
        dataForm[item.name] = item.checked;
      }
    });

    dataForm.redy = false;

    onCreate(dataForm);
    e.target.reset();
  };

  return (
    <>
      <form className="task-form" onSubmit={onSubmit}>
        <input
          required
          name="title"
          className="input-form"
          type="text"
          placeholder="Название задачи"
        ></input>
        <textarea
          required
          name="description"
          rows={3}
          className="textarea-form"
          placeholder="Описание задачи"
        ></textarea>
        <div className="form-buttons">
          <div className="checkbox-div">
            <UrgentlyInput />
          </div>
          <button type="reset" className="button-reset" onClick={onCancel}>
            Отмена
          </button>
          <button className="add-button-form" type="submit">
            Добавить задачу
          </button>
        </div>
      </form>
    </>
  );
}

export default FormTask;
