import React from "react";
import "../assets/Drum.css";

class DrumControl extends React.Component {
    constructor(props) {
        super(props);
    }


    handleChangeVolume = (e) => {
        
    }

    componentDid = () => {

    }

    render() {
        return(
            <div className="drum__right">
                <div className="controll">
                    <span>Power</span>
                    <div className="controll__select">
                        <div className="inner__select" onClick={this.props.handlePower}></div>
                    </div>
                </div>

                <div className="controll display__controll" id="display">
                    <span></span>
                </div>

                <div className="controll volume__controll">
                    <span>Volume</span>
                    <input type="range" name="_volume" min="0" max="100" value="20" onChange={this.handleChangeVolume}/>
                </div>

                <div className="controll">
                    <span>Type</span>
                    <div className="controll__select">
                        <div className="inner__select"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrumControl;