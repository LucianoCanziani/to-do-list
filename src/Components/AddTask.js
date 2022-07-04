import React, { useState } from "react";

const AddTask = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let uniqueID =
      "ID" +
      Math.random().toString(10).slice(2) +
      Date() +
      new Date().getTime();

    props.onSubmit({
      id: uniqueID.replace(/\s/g, ""),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="I swear I’ll..."
        value={input}
        name="text"
        className="input"
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <button type="submit" className="button--submit">
        Add
      </button>
    </form>
  );
};

export default AddTask;
