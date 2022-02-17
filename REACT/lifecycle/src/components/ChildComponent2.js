import React, { Component } from "react";

export default class ChildComponent2 extends Component {
    componentWillUnmount() {
        alert("This component will be unmount");
    }
    render() {
        return <>I am a child component</>;
    }
}