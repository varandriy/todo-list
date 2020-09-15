import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  deleteTask,
  addTask,
  editTask,
  fetchTasks,
} from "./redux/actions/toDoListActions";
import { Input, Button } from "antd";

const Styled = styled.div`
  .delete-button {
    margin-left: 10px;
  }
  .add-item-input {
    width: 300px;
  }
`;

const Component = ({ todos, deleteTask, addTask, editTask, fetchTasks }) => {
  const [todoText, setTodoText] = React.useState("");
  const [editObjectId, setEditObjectId] = React.useState(null);
  const [editObjectText, setEditObjectText] = React.useState("");

  React.useEffect(() => {
    fetchTasks();
  });

  return (
    <Styled>
      {todos.map((todo) => {
        return (
          <div className={"ant-row"} key={todo.id}>
            <div>
              {editObjectId === todo.id ? (
                <div>
                  <Input
                    className={"add-item-input"}
                    value={editObjectText}
                    onChange={(e) => setEditObjectText(e.target.value)}
                  />
                  <Button
                    onClick={() => {
                      editTask({ id: todo.id, text: editObjectText });
                      setEditObjectId(null);
                      setTodoText("");
                    }}
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <div className={"ant-row"}>
                  <div>{todo.text}</div>
                  <Button
                    onClick={() => {
                      setEditObjectText(todo.text);
                      setEditObjectId(todo.id);
                    }}
                  >
                    edit
                  </Button>
                </div>
              )}
            </div>

            <div
              onClick={() => deleteTask(todo.id)}
              className={"delete-button"}
            >
              X
            </div>
          </div>
        );
      })}
      <Input
        className={"add-item-input"}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button
        onClick={() => {
          todoText && addTask(todoText);
          setTodoText("");
        }}
      >
        Add
      </Button>
    </Styled>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = { deleteTask, addTask, editTask, fetchTasks };

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(Component);
