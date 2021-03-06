import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function SearchButton({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg btn-success mt-4 mt-sm-0 ", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default SearchButton;