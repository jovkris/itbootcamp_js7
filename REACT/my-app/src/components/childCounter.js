import React, { Component } from "react";

class ChildCounter extends Component {
    state = {
        value: this.props.value
    }

    handleIncrement = () => {

        // set state-u saljemo mu objekat koji zelimo da on apdejtuje
        this.setState({ value: this.state.value + 1 })
    }


    render() {
        return (
            <div style={{ margin: 15 }}>
                {/* ukoliko je state prazan, koristicemo props: */}
                {/* # {this.props.value} */}
                {/* <p>Ovo je iz state-a: {this.props.value}</p> */}
                {/* # {this.state.value} */}
                # {this.props.counter.value}
                {/* <button onClick={this.handleIncrement}>+</button> */}
                {/* <button onClick={() => this.props.onIncrement(this.props.id)}>+</button> */}
                <button onClick={() => this.props.onIncrement(this.props.counter.id)}>+</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }
}

export default ChildCounter;