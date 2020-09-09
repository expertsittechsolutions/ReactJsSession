import React, { Component } from 'react';

class WelcomeClass extends Component{
    constructor(props){
        super(props);

        this.state = {
            message: "Welcome Guest...!"
        }
    }

    changeMessageHandler(){
        // // this.setState({
        // //     message: "Thanks for clicking..."
        // // });

        this.state.message = "Thanks for clicking...";

        console.log(this.state.message);
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessageHandler()}>Click Me...</button>
            </div>
        );
    }
}

export default WelcomeClass