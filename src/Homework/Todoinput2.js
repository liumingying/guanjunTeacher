import React, { Component } from 'react'
import { placeholder } from '@babel/types';

export default class Todoinput2 extends Component {
    constructor(){
        super();
        this.state = {
            n1 : ""
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){ //回车键
            this.props.addTodo(e.target.value);
            // this.name = "ss";
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                Todolist
                {/* 第一次回车 添加内容  第二次恢复文本框原始内容 */}
                <input name="n1"  onChange={this.handleChange} value={this.state.n1} onKeyDown={(e)=>this.handleInput(e)}  placeholder='添加ToDo' type="text"/>
            
            </div>
        )
    }
}
