import { useState } from "react";
import { Radio, Button } from "antd";
import SelectContent from "../../../components/common/selectContent";
const Step1 = (props) => {
  const mainnetAllData = [
    { label: "ETH", value: 1 },
    { label: "ETH", value: 2 },
  ];
  const { current, watcher } = props;
  return (
    <SelectContent
      watcher={watcher}
      current={current}
      title="SELECT ASSET"
    >
      <Radio.Group value={1}>
          {mainnetAllData.map((main, idx) => (
            <div className="radio-item" key={idx}>
              <img
                className="mainnet-logo"
                src={require(`../../../Images/icon/${main.label}.png`).default}
                alt=""
              />
              <Radio value={main.value}>{main.label}</Radio>
            </div>
          ))}
        </Radio.Group>
    </SelectContent>
  );
};

export default Step1;
