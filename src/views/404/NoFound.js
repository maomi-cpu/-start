import React, { Component } from 'react';
import './NoFound.css';

class NoFound extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div>
                <h1>页面找不到了</h1>
            </div>
        )
    }
}

export default NoFound;