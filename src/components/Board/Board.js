import React, { Component } from 'react';
import './Board.css';
import Square from "../Square/Square"

class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            xIsNext: true,
            winner: null,
            winnerPos: []
        };
    }
    render(){
        /*var row = [];
        var col = [];
        for(var i = 0; i < this.props.squares.length; i++){
            col.push(this.renderSquare(i));
            if ((i+1) % 3 == 0) {
                row.push(<div key={i} className="Board-row">{col}</div>);
                col = [];
            } 
        }*/
        var row = [];
        for (var i = 0; i < this.props.squares.length; i+=3) {
            var col = [];
            for(var j = i; j < i + 3; j++ ){
                col.push(this.renderSquare(j));
            }
            row.push(<div key={i} className="Board-row">{col}</div>);
        }
        var txt = "";
        // txt = "当前回合：" + (this.state.xIsNext?"X":"O");
        txt = `当前回合：${this.state.xIsNext?"X":"O"}`;
        return (
            <div>
                <div>
                    {txt}    
                </div> 
                {row}
            </div>
        )
    }
    renderSquare(j){
        return (
            <Square key={j} winner={this.state.winner} index={j} pos={this.state.winnerPos} value={this.props.squares[j]} onChange={()=>{this.handleClick(j)}}></Square>
        )
    }

    // 点击每个格子后的回调函数
    handleClick = (index)=>{
        // console.log("点击格子了：" + index);
        // react组件不能直接修改state(更不能直接修改props的值)，否则数据不会同步到页面；
        // console.log(this.props.squares[index]);
        // this.props.squares[index] = "abc";
        // 但是可以通过调用组件的forceUpdate强制页面重新渲染
        // this.forceUpdate();
        // console.log(this.props.squares[index]);

        //  复制旧状态，加入新状态
        var newSquares = this.props.squares.slice();
        newSquares[index] = this.state.xIsNext?"X":"O";
        // 传递回父组件，进行修改
        this.props.onPush({
            squares: newSquares,
            coord:{x:Math.floor(index/3)+1,y:index%3+1},
            player: this.state.xIsNext?"X":"O"
        });
        // 改变xIsNext的状态
        this.setState({
            xIsNext: !this.state.xIsNext
        },()=>{
            // 数据已经修改完毕
            // console.log(this.state.xIsNext);
            var winner = this.calcWinner();
            if (winner) {
                this.setState({winner: winner});
            } 
        });    
        // console.log(this.state.xIsNext);
    }

    // 判断输赢的方法
    calcWinner = ()=>{
        var lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for (let i = 0; i < lines.length; i++) {
            var [a,b,c] = lines[i];
            if (this.props.squares[a] && this.props.squares[a] === this.props.squares[b] && this.props.squares[b] === this.props.squares[c]) {
                this.setState({
                    winnerPos: lines[i]
                },()=>{
                    alert(this.props.squares[a]);
                });
                return this.props.squares[a];
            }
        }
        return null;
        
        // https://www.jianshu.com/p/fb1b26133a8d
        // 五子棋输赢判断逻辑
    }
}

export default Board;