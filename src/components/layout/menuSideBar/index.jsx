import { useState } from "react";
import { Menu } from "antd";
import "./index.css";
import slideNavList from "../../../Router/RouterList";
import { NavLink as RouteNavLink } from "react-router-dom";
import { withRouter } from "react-router";
const { SubMenu } = Menu;

const MenuSideBar = ({ location }) => {
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <div className="main-sideMenu" style={{ width: 230 }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        // inlineCollapsed={collapsed}
        mode="inline"
      >
        {slideNavList.map((nav, idx) => {
          return !nav.children ? (
            nav.path && (
              <Menu.Item key={"menu" + idx} onClick={()=>setActiveIdx(idx)}>
                <RouteNavLink className="ant-menu-title-content" to={nav.path}>
                  <img
                    className="slide-icon"
                    src={
                      require(`../../../Images/icon/menu-${activeIdx === idx ? 'active-' : ''}${nav.icon}.png`)
                        .default
                    }
                  />
                  {nav.meta}
                </RouteNavLink>
              </Menu.Item>
            )
          ) : (
            <SubMenu
              key={"subMenu" + idx}
              title={
                <>
                  <img
                    className="slide-icon"
                    src={
                      require(`../../../Images/icon/menu-${activeIdx === idx ? 'active-' : ''}${nav.icon}.png`)
                        .default
                    }
                  />
                  <span onClick={()=>setActiveIdx(idx)}>{nav.meta}</span>
                </>
              }
            >
              {nav.children.map((navchild, inx) => (
                <Menu.Item key="5" key={inx}>
                  {navchild.meta}
                </Menu.Item>
              ))}
            </SubMenu>
          );
        })}
      </Menu>
    </div>
  );
};
export default withRouter(MenuSideBar);
