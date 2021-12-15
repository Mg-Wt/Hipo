import { useState } from "react";
import { Radio, InputNumber, Button } from "antd";
import SelectContent from "../../../components/common/selectContent";
const Step1 = (props) => {
  const cycleAllData = [
    { label: "60 Days", value: "60 Days" },
    { label: "45 Days", value: "45 Days" },
    { label: "30 Days", value: "30 Days" },
    { label: "15 Days", value: "15 Days" },
    { label: "10 Days", value: "10 Days" },
    { label: "5 Days", value: "5 Days" },
  ];
  const { current, watcher } = props;
  return (
    <div className="container">
      <div className="computed-panel">
        <SelectContent watcher={watcher} current={current} title="INPUT AMOUNT">
          <div className="bond-title">
            <div className="bond-icon">
              <img
                src={require(`../../../Images/icon/ETH.png`).default}
                alt=""
              />
            </div>
            <div className="bond-describe">
              <div className="bond-type">USDT Bond</div>
              <div className="bond-cycle">60 Days</div>
            </div>
          </div>
          <div className="input-container">
            <InputNumber min={1} max={10} defaultValue={3} bordered={false} />
            <Button>Max</Button>
          </div>
          <footer>
            <Button>Back</Button>
            <Button>Add</Button>
          </footer>
          <div className="amount-computed">
            <div className="amount-ballance">
              <p>Wallet Ballance</p>
              <div className="num-computed">
                  <p className="dollar-color">27,685.492</p>
                  <p className="dollar-num">$27,685.492</p>
              </div>
            </div>
            <div className="amount-ballance">
              <div className="amount-Item flex-bet-cen">
                <p>Add Asset Amount</p>
                <div className="">
                    <p>27,685.492</p>
                    <p className="dollar-num">$27,685.492</p>
                </div>
              </div>
              <div className="amount-Item flex-bet-cen">
                <p>Interest Pool</p>
                <div className="">
                    <p>27,685.492</p>
                    <p className="dollar-num">$27,685.492</p>
                </div>
              </div>
              <div className="amount-Item flex-bet-cen">
                <p>Reserve Pool</p>
                <div className="">
                    <p>27,685.492</p>
                    <p className="dollar-num">$27,685.492</p>
                </div>
              </div>
            </div>
          </div>
        </SelectContent>
      </div>
      <div>
        <SelectContent
          watcher={watcher}
          current={current}
          title="YOUR LIQUIDOITY"
        >
          <div className="computed-result">
            <div className="bond-title">
              <div className="bond-icon">
                <img
                  src={require(`../../../Images/icon/ETH.png`).default}
                  alt=""
                />
              </div>
              <div className="bond-describe">
                <div className="bond-type">USDT Bond</div>
                <div className="bond-cycle">60 Days</div>
              </div>
            </div>
            <div className="dollar-color">27,685.492</div>
          </div>
          <div className="amount-Item flex-bet-cen">
            <p>Pool Share</p>
            <p className="dollar-color">27,685.492</p>
          </div>
        </SelectContent>
      </div>
    </div>
  );
};

export default Step1;
