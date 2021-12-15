import { lazy } from "react";

const RouterList = [
  {
    path: "/dashboard",
    meta:"Dashboard",
    icon: 'dashboard',
    component: lazy(() => import("../views/Dashboard/index")),
  },
  {
    path: "/pledge",
    meta:"Pledge",
    icon: 'pledge',
    component: lazy(() => import("../views/Pledge/index")),
  },
  {
    path: "/issuebonds",
    meta:"Issue Bonds",
    icon: 'issueBonds',
    component: lazy(() => import("../views/IssueBonds/index")),
  },
  {
    path: "/purchasebonds",
    meta:"Purchase Bond",
    icon: 'purchaseBonds',
    component: lazy(() => import("../views/PurchaseBonds/index")),
  },
  {
    path: "/addliquidity",
    meta:"Add Liquidity",
    icon: 'addLiquidity',
    component: lazy(() => import("../views/AddLiquidity/index")),
  },
  {
    path: "/myhipo",
    meta:"My Hipo",
    icon: 'myHipo',
    component: lazy(() => import("../views/MyHipo/index")),
    children: [
      {
        path: "/myhipo/bonds",
        meta:"bonds",
        component: lazy(() => import("../views/MyHipo/Bonds/index")),
      },
      {
        path: "/myhipo/collaterals",
        meta:"collaterals",
        component: lazy(() =>
          import("../views/MyHipo/Collaterals/index")
        ),
      },
      {
        path: "/myhipo/pools",
        meta:"pools",
        component: lazy(() => import("../views/MyHipo/Pools/index")),
      },
      //Redirect
      {
        to: "/myhipo/collaterals",
        meta:"collaterals",
        from: "/myhipo",
      },
    ],
  },
  //Redirect
  {
    to: "/dashboard",
    from: "/",
  },
];

export default RouterList;
