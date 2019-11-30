import React, { Component } from 'react';
import './Game.css';
import Board from '../../components/Board/Board';

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            history: [
                {
                    // 表示9个格子的状态
                    squares: Array(9).fill(null),
                    coord: null,
                    player: "X"
                }
            ]
        };
    }
    render(){
        return (
            <div>
                <Board squares={this.state.history[this.state.history.length-1].squares} onPush={this.pushHistory}></Board>
                <ul>
                    
                    {this.state.history.map((h,i)=>{
                        return (
                            <li key={i} onClick={(e)=>{this.goBack(e,i)}}>
                                <a href="">{h.coord?`${h.player} 落子于 (${h.coord.x},${h.coord.y})`:"开局"}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    pushHistory=(his)=>{
        // 复制原来的历史
        // slice：方法可从已有的数组中返回选定的元素。
        // 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
        var newHistory = this.state.history.slice();

        newHistory.push(his);
        // 1.不要直接修改 state(状态)
        // 2.state(状态) 更新可能是异步的
        // 3.state(状态)更新会被合并
        this.setState({
           history: newHistory
        });
        // setTimeout(() => {
        //     console.log(this.state.history);
        // }, 100);
    }
    goBack = (e,i)=>{
        e.preventDefault();
        this.setState({
            history: this.state.history.slice(0,i+1)
        });
    }
}

export default Game;