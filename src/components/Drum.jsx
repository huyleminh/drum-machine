import React from "react";
import "../assets/Drum.css";
import DrumControl from "./DrumControl";
import DrumPad from "./DrumPad";

class Drum extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _power: true,
            _type: false
        }
    }

    handlePower = () => {
        this.setState(state => ({
            _power: !state._power
        }))
    }

    handleType = () => {
        this.setState(state => ({
            _type: !state._type
        }))
    }

    render() {
        console.log(this.state._power);
        return (
            <div className="drum__machine" id="drum-machine">
                <DrumPad />
                <DrumControl power={this.state._power} handlePower={this.handlePower} type={this._type} handleType={this.handleType}/>
            </div>
        )
    }
}

export default Drum;