import React, { Component } from 'react';
import './User.css';
import {withRouter,Link} from "react-router-dom"

class User extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div>
                <h1>用户中心</h1>
                <input type="text"/>
                <ul>
                    <li><Link to="/user">user1</Link></li>
                    <li><Link to="/user/user2">user2</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }

    componentWillUnmount(){
        console.log("user页面将要被卸载");
    }
}

export default withRouter(User);