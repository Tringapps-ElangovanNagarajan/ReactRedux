import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const name = useSelector((state) => state.user.foot);
  return (
    <div className="bottom">
      <h1>{name}</h1>
    </div>
  );
}