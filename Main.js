import "./App.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "./slice";
export default function Main() {
  const [name, setName] = useState("");
  console.log(name);
  const dispatch = useDispatch();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(change({ name }));
  };
  return (
    <div className="main">
      <form onSubmit={handleUpdate}>
        <label>Enter your value here : </label>
        <input
          type="text"
          placeholder="Enter any value"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
