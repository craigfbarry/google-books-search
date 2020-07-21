import React from "react";
import "./style.css";

function Thumbnail({ src,title }) {
    return (
      <div
        className="thumbnail"
        role="img"
        aria-label="Book cover"
        alt= {title}
        style={{
          backgroundImage: `url(${src})`
        }}
      />
    );
  }
  
  export default Thumbnail;