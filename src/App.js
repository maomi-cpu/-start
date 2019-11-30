import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// Route：定义一条路由规则
// HashRouter（BrowserRouter）：是两种路由模式，使用url哈希值实现路由（浏览器历史记录实现路由）
// Link：路由跳转链接的组件（类似vue中的router-link标签/组件）
// Switch：在Switch组件中定义多条路由规则，和Route配合使用。
import {Route,HashRouter,Link,Switch} from "react-router-dom"

import Home from "./views/Home/Home"
import User from "./views/User/User"
import User1 from "./views/User/User1"
import User2 from "./views/User/User2"
import Game from "./views/Game/Game"
import NoFound from "./views/404/NoFound"

class App extends Component {
  render() {
    return (
      <div>
        {/* HashRouter组件的路由视图，相当于vue中的router-view */}
        <HashRouter>
          <h1>这里是跟组件，这里可以写一个tabbar</h1>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/user">用户中心</Link></li>
            <li><Link to="/game">游戏中心</Link></li>
          </ul>
          <p>xxxxxxxxxxxxx</p>

          {/* Switch+Route定义路由规则，Switch中嵌套多个Route只能匹配到一个 */}
          <Switch>
            {/* 在react中路由匹配默认使用开头匹配判断，如果要使用严格匹配，则需要给route添加exact属性 */}
            <Route exact path="/" component={Home}></Route>
            <Route path="/user" render={()=>
                <User>
                  <Route exact path="/user" component={User1} />
                  <Route path="/user/user2" component={User2} />
                </User>
            }
              ></Route>
            <Route exact path="/game" component={Game}></Route>
            
            {/* 如果不设置path属性，可以匹配到任何路径，用于设置404页面（写在规则的最后面） */}
            <Route component={NoFound}></Route>
            {/* 浏览器会提示：Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack */}
            {/* 原因：这个是 reactr-router 的一个提示，当前路由下的 history 不能 push 相同的路径到 stack 里。只有开发环境存在，生产环境不存在，目前还没看到官方有去掉的意思。看不惯的话可以采取一些方法关掉这个提示。 */}
            {/* 1.<Link to={{ pathname: "/" }} replace>detail</Link> / props.history.replace('/');*/}
            {/* 2.node_modules/tiny-warning/dist/tiny-warinig.cjs.js 把第13行代码注释掉 */}
          </Switch>


          <p>xxxxxxxxxxxxx</p>
        </HashRouter>
      </div>
    );
  }
}

export default App;
