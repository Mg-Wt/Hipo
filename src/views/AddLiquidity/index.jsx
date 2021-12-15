import StepBar from "../../components/stepBar/index";
import { useState } from "react";
import "./index.css";

import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
const AddLiquidity = () => {
  const [current, setCurrent] = useState(0); // 当前步骤
  const stepDate = Array.from({ length: 5 }); // 步骤条数
  const watcherCurrent = (current) => {
    current <= stepDate.length - 1
      ? setCurrent(current)
      : setCurrent(stepDate.length - 1);
  };
  return (
    <div className="main">
      <StepBar width="80%" current={current} stepTotal={stepDate} />
      {(() => {
        switch (current) {
          case 0:
          return  <Step1 watcher={watcherCurrent} current={current} />;
            break;
          case 1:
          return  <Step2 watcher={watcherCurrent} current={current} />;
            break;
          case 2:
            return  <Step3 watcher={watcherCurrent} current={current} />;
            break;
          case 3:
            break;
          case 4:
            break;
          default:
          return  <Step1 watcher={watcherCurrent} current={current} />;
            break;
        }
      })()}
    </div>
  );
};

export default AddLiquidity;
