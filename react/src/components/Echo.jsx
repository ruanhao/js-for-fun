import React, {Component} from 'react';


export default class Echo extends Component {

    constructor() {
        super();
        this.state = {
            msg: "",
        }
    }

    render() {
        return <div>
            <h3>{this.state.msg}</h3>
            <input type="text" sytle={{width: '100%'}} value={this.state.msg} onChange={(event) => this.onTextChanged(event)} ref="txt"/>
            </div>;
    }



    onTextChanged(event) {
        // 获取 value 的两种方式
        console.log("event.target.value: " + event.target.value)
        console.log("this.refs.txt.value: " + this.refs.txt.value)

        this.setState({
            msg: event.target.value,
        }, () => {console.log(this.state)});
    }
}