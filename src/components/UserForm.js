import React from "react";

function UserForm(props) {
  return (
    <form onSubmit={props.getUser}>
      <input
        style={{ margin: "20px auto", display: "block" }}
        type='text'
        name='username'
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default UserForm;
