import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../TodoItem";
import "./index.css";

class Todos extends Component {
  state = { todoList: [], userInput: "", showAlert: false };

  onClickAddTask = () => {
    const { userInput } = this.state;
    if (userInput === "") {
      this.setState({ showAlert: true });
    } else {
      const newItem = {
        id: uuidv4(),
        taskText: userInput,
        isComplete: false,
      };
      this.setState((prevState) => ({
        showAlert: false,
        todoList: [...prevState.todoList, newItem],
        userInput: "",
      }));
    }
  };

  onDeleteTodoItem = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((eachItem) => eachItem.id !== id),
    }));
  };

  onCompleteStatusChange = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((eachItem) => {
        if (eachItem.id === id) {
          return { ...eachItem, isComplete: !eachItem.isComplete };
        }
        return eachItem;
      }),
    }));
  };

  onChangeUserInput = (e) => {
    this.setState({ userInput: e.target.value, showAlert: false });
  };

  renderCreateTodoItem = () => {
    const { userInput, showAlert } = this.state;

    return (
      <div className="create-todo-item-bg">
        <h1 className="input-title">Create your todo item</h1>
        <div className="input-bg">
          <input
            type="text"
            className="input-bar"
            placeholder="Enter your task here."
            value={userInput}
            onChange={this.onChangeUserInput}
          />
          <button
            type="button"
            className="add-btn"
            onClick={this.onClickAddTask}
          >
            Add
          </button>
        </div>
        {showAlert && <p className="input-alert">Please Enter a Valid Task</p>}
      </div>
    );
  };

  renderAllTodoItems = () => {
    const { todoList } = this.state;

    return (
      <div className="added-todos-bg">
        <h1 className="todo-list-title">Your Todo List</h1>
        <ul className="todo-ul-list">
          {todoList.map((eachItem) => (
            <TodoItem
              todoItemDetails={eachItem}
              key={eachItem.id}
              onCompleteStatusChange={this.onCompleteStatusChange}
              onDeleteTodoItem={this.onDeleteTodoItem}
            />
          ))}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div className="todos-main-bg">
        <div className="todo-main-container">
          <h1 className="todos-title">Todos List</h1>
          {this.renderCreateTodoItem()}
          {this.renderAllTodoItems()}
        </div>
      </div>
    );
  }
}

export default Todos;
