import { MdDelete } from "react-icons/md";
import "./index.css";

const TodoItem = (props) => {
  const { todoItemDetails, onCompleteStatusChange, onDeleteTodoItem } = props;
  const { id, taskText, isComplete } = todoItemDetails;

  const checkBoxId = "checkBox" + id;

  const onClickDeleteBtn = () => {
    onDeleteTodoItem(id);
  };

  const onClickCheckBox = () => {
    onCompleteStatusChange(id);
  };

  const completedTaskStyle = isComplete ? "completed" : "";

  return (
    <li className={`todo-item ${completedTaskStyle}`} key={id}>
      <div className="task-bg">
        <input
          id={checkBoxId}
          type="checkbox"
          className="task-checkbox"
          value={isComplete}
          onChange={onClickCheckBox}
        />
        <label htmlFor={checkBoxId} className="task-text">
          {taskText}
        </label>
      </div>

      <button type="button" className="delete-btn" onClick={onClickDeleteBtn}>
        <MdDelete size={20} />
      </button>
    </li>
  );
};

export default TodoItem;
