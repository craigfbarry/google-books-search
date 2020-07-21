import React from "react";


function SaveButton(props) {
    return (
        <button className="btn btn-success mt-3 mx-3" {...props} tabIndex="0">
        Save
      </button>
    );
  }

export default SaveButton;