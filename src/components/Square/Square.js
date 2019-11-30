import React, { Component } from 'react';
import './Square.css';

class Square extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div>
                <button className="Square" onClick={this.btnClick} style={{color:this.props.pos.indexOf(this.props.index)===-1?"":"red"}}>{this.props.value}</button>
            </div>
        )
    }
    btnClick=(e)=>{
        if (!this.props.value && !this.props.winner) {
            this.props.onChange();
        }   
    }
}

export default Square;