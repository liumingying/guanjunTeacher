import React, { Component } from 'react'
export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行{this.props.todo.length}</h1>

                <ul>
                    {
                        this.props.todo.map((item,idx)=><li key={item}>
                            <input onClick={()=>this.props.addunder2(item,idx)} type="checkbox"/>{item}<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>)
                    }
                </ul>
                <h1>已经完成{this.props.under.length}</h1>

                <ul>
                    {
                        this.props.under.map((item,idx)=><li key={item}>
                            <input onClick={()=>this.props.addunder3(item,idx)} type="checkbox" checked="checked"/>{item}----<button onClick={()=>{this.props.delunder(idx)}}>删除</button></li>)
                            // 要有本地存储，刷新页面后数据不能丢；
                            //点击上边复选框以后 能存储到下边 的数组  点击下边复选框以后 能存储到上边的数组 到时候再读取出来
                            //“正在进行”和“已经完成”后面的待办事项数量统计要实现
                    }
                </ul>
            </div>
        )
    }
}
