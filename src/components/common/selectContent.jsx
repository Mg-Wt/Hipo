import { useState } from "react";
import { Radio, Button } from "antd";
import "./index.css";
const Step1 = (props) => {
  const { title, watcher, current, children } = props;
  console.log(props);
  return (
    <div className="step-container">
      <div className="step-title">
        <header>{title || ""}</header>
      </div>
      <main>{children}</main>
      {current < 2 && (
        <div className="step-action">
          <Button onClick={() => watcher(current + 1)}>Next</Button>
        </div>
      )}
    </div>
  );
};

export default Step1;
