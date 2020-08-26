import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="row mb-3">
      <div className="col-12 text-center">
        <h1 className="display-3">{title}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
