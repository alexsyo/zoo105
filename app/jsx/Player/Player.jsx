'use script';

import React from 'react';
import Bar from './Bar.jsx';
import Controls from './Controls.jsx';

class Player extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            isPlaying: false
        };


        this.handlePlayingChange = () => {

            if(!this.state.isPlaying) {

                this.props.audio.play();
                this.setState({isPlaying: true});

            } else {

                this.props.audio.pause();
                this.setState({isPlaying: false});

            }

        };

    }

    render() {

        return (

            <div>
                <Bar audio={this.props.audio} />
                <Controls isPlaying={this.state.isPlaying} handlePlayingChange={this.handlePlayingChange} />
            </div>

        );

    }

}

export default Player;