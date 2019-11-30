import React, { Component } from 'react';
import './Home.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div>
                <h1>首页</h1>
                <input type="text"/>
            </div>
        )
    }

    componentWillUnmount(){
        console.log("home页面将要被卸载");
    }
}

export default Home;