import React from "react";

export const Admin = props => {
  return (
    <>
      <h1>Admin Page</h1>
      <button onClick={props.onClick}>Log Out</button>
    </>
  );
};
