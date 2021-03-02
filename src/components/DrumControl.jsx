import React from "react";
import "../assets/Drum.css";

class DrumControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const powerClassName = (this.props.power) ? "inner__select float__right" : "inner__select";
        const typeClassName = (this.props.type) ? "inner__select float__right" : "inner__select";

        return(
            <div className="drum__right">
                <div className="controll">
                    <span>Power</span>
                    <div className="controll__select">
                        <div className={powerClassName} onClick={this.props.handlePower}></div>
                    </div>
                </div>

                <div className="controll display__controll" id="display">
                    <span>{(this.props.power) ? this.props.displayTxt : ""}</span>
                </div>

                <div className="controll volume__controll">
                    <span>Volume</span>
                    <input type="range" name="_volume" min="0" max="100" />
                </div>

                <div className="controll">
                    <span>Type</span>
                    <div className="controll__select">
                        <div className={typeClassName} onClick={this.props.handleType}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrumControl;