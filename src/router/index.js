import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import App from '../App' // 作为容器使用
import Index from '../views/main/main' // 作为首页tab的容器
import Login from '../views/login'; // 登录
import Register from '../views/register'; // 注册页
import IndexAll from '../views/main/index'; // 首页
import Sort from '../views/main/sort'; // 分类页
import Car from '../views/main/car'; // 购物车
import Me from '../views/main/me'; // 我的

export default function router() {
  return (
    <App>
      <Router>
        <Switch>
          {/* 登录页 */}
          <Route path="/login" component={Login}/>
          {/* 注册页 */}
          <Route path="/register" component={Register}/>
          {/* 注册协议页 */}
          <Route path="/registration" />
          {/* 首页tab的容器 */}
          <Route path="/" render={() =>
            <Index>
              <Switch>
                {/* 首页 */}
                <Route path='/index' component={IndexAll}/>
                {/* 分类页 */}
                <Route path="/sort" component={Sort}/>
                {/* 购物车 */}
                <Route path="/car" component={Car}/>
                {/* 我的 */}
                <Route path="/me" component={Me}/>
              </Switch>
            </Index>
          } />
        </Switch>
      </Router>
    </App>
  )
}