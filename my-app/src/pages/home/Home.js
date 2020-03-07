import React, { Component } from 'react';


class Home extends Component {
    
    constructor() {
        super();
        this.state = {count: 0};
    }
   
    handlerCount() {
        this.setState({
            count: this.state.count += 1
        });
    }

    render() {

        const { count } = this.state;

        return (
            <div>
                <button onClick={() => this.handlerCount()}>Comprar: {count}</button>
            </div>
        );
    }
}

export default Home;