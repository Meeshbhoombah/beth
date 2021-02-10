import React from 'react';
import { hot } from 'react-hot-loader/root';
import IPFS from 'ipfs-mini';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    };


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    };


    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    
    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
          <div>
            <h1>It is {this.state.date.toLocaleTimeString()}</h1>
            <h2>{this.props.message}</h2>
          </div>
        )
    }
}


function App() {
    const msg = "Test"

    return (
        <div>
            <Clock message={msg}/>
        </div>
    );
};


export default hot(App);

