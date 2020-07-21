import React from "react";


function DeleteButton(props) {
    return (
        <button className="btn btn-danger mt-3 mx-3" {...props} tabIndex="0">
        Remove 
      </button>
    );
  }

export default DeleteButton;