import { useState } from "react";
export function Button(props) {
  const clickHandler = props.clickHandler;
  return (
    <button
      className="btn btn-secondary"
      style={{ width: 60 }}
      onClick={() => {
        clickHandler(props.increment);
      }}
    >
      <Display message={props.message}></Display>
    </button>
  );
}

export function Display(props) {
  return <div>+{props.message}</div>;
}
