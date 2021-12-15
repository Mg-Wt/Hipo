import "./index.css";
import { Steps } from "antd";
const { Step } = Steps;

const StepBar = (props) => {
    const { width, current, stepTotal } = props
    console.log(stepTotal)
  return (
    <Steps size="small" current={current} style={{width: width,margin:'0 auto'}}>
        {
            stepTotal.map((ste,idx)=><Step key={idx}/>)
        }
    </Steps>
  );
};
<style>
</style>
export default StepBar
