import React from "react";
import Greetings from "./ClassGreetings";
import Header from "./ClassHeader";

class Apps extends React.Component {
    render () {
        return (
            <div>
                <Header username='Tamilore'/>
                <Greetings/>
            </div>
        )
    }
}

export default Apps