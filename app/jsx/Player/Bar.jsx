'use strict';

import React from 'react';

class Bar extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            duration: this.props.audio.getDuration(),
            position: this.props.audio.getCurrentPosition()
        };


        this.handleBarChange = (event) => {

            this.props.audio.seekTo(event.target.value * 1000);

        };

        setInterval(() => {

            this.setState({duration: this.props.audio.getDuration()});
            this.props.audio.getCurrentPosition((seconds) => {
                this.setState({position: seconds});
            });

        }, 500);

    }

    render() {

        return(

            <div className="grid-block shrink">
                <input
                    id="bar"
                    type="range" 
                    max={this.state.duration}
                    value={this.state.position}
                    onChange={this.handleBarChange} />
            </div>

        );

    }

}

export default Bar;