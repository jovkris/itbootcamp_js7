import React, { Component } from "react";

class Counter extends Component {
    state = {
        counter: 0,
        imageURL: `https://i.picsum.photos/id/87/200/200.jpg?hmac=IHnh6D2-VHDRNEnAKr5_9gaKNH6PfBO0XifjLCb4GUY`,
        tags: ["tag1", "tag2", "tag3"]
    }

    // constructor() {
    //     super();
    //     console.log(`Constructor`, this);
    //     this.formatCount = this.formatCount.bind(this)
    // }

    handleIncrement = () => {
        console.log(`handleIncrement`);
        // set state-u saljemo mu objekat koji zelimo da on apdejtuje
        this.setState({ counter: this.state.counter + 1 })
    }

    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    styles = {
        fontSize: `10px`,
        fontWeight: `bold`
    }

    // ako nije arrow funkcija, potreban nam je constructor

    // formatCount() {
    //     // destructuring
    //     const { counter } = this.state; // iscupa iz jednog objekta ono sto mi hocemo, u nasem slucaju je to counter
    //     console.log(counter);
    // }

    // koristeci arrow funkcije izbegavamo pravljenje constructora

    formatCount = () => {
        const { counter } = this.state // destructuring opet
        return counter === 0 ? `zero` : counter
    }

    renderClass = () => {
        const { counter } = this.state
        return counter === 0 ? `warning` : `success`;
    }


    render() {
        return (
            <div>
                <h2 style={this.styles}>Pozdrav iz child komponente</h2>
                <p style={{ fontSize: 30 }}>Ja sam paragraf</p> {/* inline stilizaciji se pristupa sa duplim viticastim zagradama*/}

                <img src={this.state.imageURL} />

                <button onClick={this.handleDecrement}>-</button>
                <p className={this.renderClass()}>count: {this.formatCount()}</p>
                <button onClick={this.handleIncrement}>+</button>

                <h1>Tagovi</h1>

                {
                    // sad ovo radi kao foreach petlja ali se u reactu ne radi foreach for some reason...
                }
                {

                    // ovo trazi neki unique key koji moramo da dodelimo svakom tagu, u ovom slucaju koristimo index kao jedinstven key za svaki paragraf

                    // map trazi obicne zagrade za razliku od forEach
                    this.state.tags.map((tag, index) => (
                        <p key={index}> # {tag}</p>
                    ))
                }
            </div>

        );
    }
}

export default Counter;