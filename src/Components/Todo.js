import { React } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Animate } from "react-simple-animate";

const Todo = ({
  todos,
  taskCompleted,
  setEditingText,
  submitEdits,
  setTodoEditing,
  todoEditing,
  removeTask,
  quote,
}) => {
  return (
    <div>
      {todos.length ? (
        <ul>
          {todos?.map((task, index) => (
            <Animate
              key={task.id}
              play
              duration={0.3}
              delay={index / 9}
              start={{ opacity: 0, transform: "translateY(-50px)" }}
              end={{ opacity: 1, transform: "translateY(0px)" }}
              sequenceIndex={index}
            >
              <li
                className={task.isComplete ? "todo-item complete" : "todo-item"}
              >
                <label className="check-container">
                  <input
                    defaultChecked={task.isComplete}
                    onClick={() => taskCompleted(task.id)}
                    type="checkbox"
                  />
                  <div className="checkmark"></div>
                </label>

                <div className="task-edit-cont">
                  <span>{task.text}</span>
                  {task.id === todoEditing ? (
                    <input
                      type="text"
                      className="input-edit"
                      defaultValue={task.text}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                  ) : null}
                </div>
                <div className="edit-trash-cont">
                  {task.id === todoEditing ? (
                    <button
                      className="edit-save"
                      onClick={() => submitEdits(task.id)}
                    >
                      Update
                    </button>
                  ) : (
                    <div
                      className="edit-icon"
                      onClick={() => setTodoEditing(task.id)}
                    >
                      <FiEdit />
                    </div>
                  )}
                  <FiTrash2
                    className="trash-can"
                    onClick={() => removeTask(task)}
                  />
                </div>
              </li>
            </Animate>
          ))}
        </ul>
      ) : (
        <div>
          <blockquote className="quote-container">
            <q>{quote.content}</q>
            <h4>- {quote.author}</h4>
          </blockquote>
        </div>
      )}
    </div>
  );
};

export default Todo;
