import React from "react";

const spinner = () => {
  return (
    <div className="container m-5">
      <div className="spinner-border text-info " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default spinner;
