import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <section className="row mb-3">
      <div className="col-12 text-center">
        <h1 className="display-3">{title}</h1>
      </div>
    </section>
  );
};

export default SectionTitle;
