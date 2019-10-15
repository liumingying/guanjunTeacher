import React, { Component } from 'react'
import  {con} from './Context'
let {Provider,Consumer} = React.createContext(); //生成一个对象
export default class Child extends Component {
    render() {
        console.log(this);
        return (
            <div>
                <h1>Context</h1>
                <div>{this.context}</div>
                {/* <Consumer>
                    {
                        (data)=><div>{data}</div>
                    }
                </Consumer> */}
            </div>
        )
    }
}
Child.contextType = con;