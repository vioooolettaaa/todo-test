import './styles.scss';
import UrgentlyInput from '../UrgentlyInput/UrgentlyInput';
import React from 'react';
import useBreakpoints from '@shared/hooks/useBreakpoints';
import AddIcon from '@shared/ui/icons/AddIcon';

type formTaskProps = {
  onCreate: (data: Record<string, any>) => void;
  onCancel: () => void;
};

function FormTask({ onCreate, onCancel }: formTaskProps) {
  const { isMobile } = useBreakpoints();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataForm: Record<string, any> = {};

    const elements = Array.from(e.currentTarget.elements) as HTMLInputElement[];

    elements.forEach((item) => {
      if (item.name) {
        if (item.type === 'checkbox') {
          dataForm[item.name] = item.checked;
        } else {
          dataForm[item.name] = item.value;
        }
      }
    });

    dataForm.redy = false;

    onCreate(dataForm);
    e.currentTarget.reset();
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
            {isMobile ? <AddIcon /> : 'Добавить задачу'}
          </button>
        </div>
      </form>
    </>
  );
}

export default FormTask;
