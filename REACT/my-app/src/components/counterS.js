import React, { Component } from "react";
import ChildCounter from "./childCounter";

class Counters extends Component {
    state = {
        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
        ]
    }

    handleIncrement = (id) => {
        console.log(id, "u Counters, handleIncrement se nalazi")
        // ovaj ID prosledjujemo Child komponenti
        // Spread operator
        // const counters = [...this.state.counters]
        // pravimo kopiju objekta iznad
        // const counter = {...this.state.counters[0], name: "Child"}
        this.setState({
            counters: this.state.counters.map((counter) => {
                return counter.id === id ? { ...counter, value: counter.value + 1 } : counter;
            })
        }
        )
    }

    handleDelete = (id) => {
        this.setState((previousState) => ({
            counters: previousState.counters.filter((item) => item.id !== id)
            // filter vraca sve sto ne spada u uslov
        }))
    }

    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <ChildCounter
                        key={counter.id}
                        // id={counter.id}
                        // value={counter.value}
                        counter={counter}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                ))}
                {/* <ChildCounter /> */}
                {/* odmah zatvaramo sa /> jer samo hocemo da renderujemo */}
            </div>
        )
    }
}

export default Counters;