import React from "react";
import "../assets/Drum.css";
import DrumControl from "./DrumControl";
import DrumPad from "./DrumPad";

class Drum extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _power: true,
            _type: false,
            _txt: ""
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

    handleTxt = (txt) => {
        this.setState({
            _txt: txt
        })
    }

    render() {
        return (
            <div className="drum__machine" id="drum-machine">
                <DrumPad 
                    power = {this.state._power} 
                    handleChangeTxt = {this.handleTxt}
                    type = {this.state._type}
                />
                <DrumControl 
                    power = {this.state._power} 
                    handlePower = {this.handlePower} 
                    type = {this.state._type} 
                    handleType = {this.handleType}
                    displayTxt = {this.state._txt}
                />
            </div>
        )
    }
}

export default Drum;