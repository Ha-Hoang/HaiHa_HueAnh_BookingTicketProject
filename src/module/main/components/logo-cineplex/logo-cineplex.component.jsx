import React, { Component } from 'react';
import cinemaLogo from "../../../../assets/images/BHD.png";
class LogoCineplex extends Component {
    render() {
        return (
            <a href="#v-pills-bhd" className="nav-link active" data-toggle="pill">
                <img src={cinemaLogo} alt="hehe" />
            </a>
            );
    }
}

export default LogoCineplex;