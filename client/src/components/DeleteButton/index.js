import React from "react";


function DeleteButton(props) {
    return (
        <span className="delete-btn" {...props} role="button" tabIndex="0">
        ✗
      </span>
    );
  }

export default DeleteButton;