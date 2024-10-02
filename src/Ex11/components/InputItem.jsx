import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/taskSlice";

const InputItem = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    const taskName = inputRef.current?.value;
    dispatch(addTask(taskName));
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      <label htmlFor="taskNameInput">Task name:</label>
      <input
        id="taskNameInput"
        ref={inputRef}
        type="text"
        name="taskItem"
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default InputItem;
