import { useState } from "react";
import { Radio, Button } from "antd";
import SelectContent from "../../../components/common/selectContent";
const Step1 = (props) => {
  const cycleAllData = [{label:'60 Days',value:'60 Days'},{label:'45 Days',value:'45 Days'},{label:'30 Days',value:'30 Days'},{label:'15 Days',value:'15 Days'},{label:'10 Days',value:'10 Days'},{label:'5 Days',value:'5 Days'}]
  const { current, watcher } = props
  return (
    <SelectContent
      watcher={watcher}
      current={current}
      title="SELECT DURATION"
    >
      <Radio.Group value={1}>
          {cycleAllData.map((cycle, idx) => (
            <div className="radio-item" key={idx}>
              <Radio value={cycle.value}>{cycle.label}</Radio>
            </div>
          ))}
        </Radio.Group>
    </SelectContent>
  );
};

export default Step1;
