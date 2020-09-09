import React, { Component } from 'react';

class HelloUserClass extends Component{
    render(){
        return <h1>Hello {this.props.name} from Class Component...!!!</h1>;
    }
}

export default HelloUserClass;