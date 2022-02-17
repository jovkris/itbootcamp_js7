import React, { Component } from "react";

export default class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "shouldComponentUpdate Method",
        };
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "componentDidMount Method" });
        }, 1000);
    }

    render() {
        return (
            <div>
                <p>This is a {this.state.name}</p>
            </div>
        );
    }
}