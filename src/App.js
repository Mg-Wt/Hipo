// import logo from './logo.svg';
import "./App.css";
import Link from "./components/layout/menuSideBar/index.jsx";
import { HashRouter } from "react-router-dom";
import RouterList from "./Router/RouterList";
import RouterView from "./Router/RouterView";
import MainNavbar from "../src/components/layout/mainNavbar/index.jsx";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="app-left">
          <img
            className="hipo-logo"
            alt=""
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1c00e21cc3b8a49d464af3c24879dcbfe0f05cb2b6fc04f43dae59729926b4b3"
          />
          <Link />
        </div>

        <div className="app-right">
          <MainNavbar />
          <RouterView RouterList={RouterList}></RouterView>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
