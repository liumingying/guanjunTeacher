import React, { Component } from 'react'
import Todoing from './Todoing2';
import Todoinput from './Todoinput2';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: JSON.parse(localStorage.getItem('todo') || '[]'),
            under: JSON.parse(localStorage.getItem('under') || '[]')
        }
    }
    addItem = (msg)=>{//文本框添加
        // var todo =[...this.state.todo,msg];
        this.setState({
            todo: [...this.state.todo,msg],
        },()=>{
            // localStorage.setItem(msg,key)
            localStorage.setItem('todo',JSON.stringify(this.state.todo));
        })
    }
    addItem2 = (msg,key)=>{//删掉todo里的  添加到under
        var todo =[...this.state.todo,msg];

        this.delItem(key);
        this.setState({
            under: [...this.state.under,msg],
        },()=>{
            // localStorage.setItem(msg,key)
            localStorage.setItem('under',JSON.stringify(this.state.under)); 
        })
    }
    addItem3 = (msg,key)=>{//删掉under里的，添加到todo
        var todo =[...this.state.todo,msg];

        this.delItem2(key);
        this.setState({
            todo: [...this.state.todo,msg],
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo));
        })
    }
    delItem = (a)=>{ //删掉todo里的
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo: todo
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo));
        })
    }
    delItem2 = (a)=>{//删掉under里的
        var under = [...this.state.under];
        under.splice(a,1);
        this.setState({
            under:under
        },()=>{
            localStorage.setItem('under',JSON.stringify(this.state.under));
        })
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem} />
                <Todoing delTodo={this.delItem} delunder={this.delItem2} todo={this.state.todo} under={this.state.under} addunder2={this.addItem2} addunder3 = {this.addItem3}/>
            </div>
        )
    }
}