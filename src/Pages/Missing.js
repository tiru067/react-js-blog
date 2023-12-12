import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div>
      <p>Not Found 🙄</p>
      <p>
        <Link to="/">Visit out HomePage </Link>
      </p>
    </div>
  );
};

export default Missing;
