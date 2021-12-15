import { Switch, Redirect, Route } from "react-router-dom"

import { Suspense } from "react"

const RouterView = (props) => {
    
    let { RouterList } = props

    // console.log(RouterList)
    let routerList = RouterList.filter(item => !item.to)
    
    let redirect = RouterList.filter(item => item.to)[0]
    return (
        <Suspense fallback={<div>...laoding</div>}>
            <Switch>
                {
                    routerList ? routerList.map((item, index) => {
                        // console.log(item.meta)
                        // document.title=`${item.meta}`
                        return <Route path={item.path} key={index} render={
                            propsList => {
                                let Son = item.component
                                if (item.children) {
                                    return <Son {...propsList} child={item.children} navList={item.children.filter(val => !val.to)}></Son>
                                }
                                return <Son {...propsList}></Son>
                            }
                        }></Route>
                    }) : <div>暂无数据</div>
                }

                {
                    <Redirect to={redirect.to} from={redirect.from}></Redirect>
                }
            </Switch >
        </Suspense >
    );
}


export default RouterView;