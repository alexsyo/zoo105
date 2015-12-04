'use script';

import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.audio = new Media();
        this.state = {isPlaying: false};

        this.playPause = () => {
            if(!this.state.isPlaying) {
                this.audio.play();
                this.setState({isPlaying: true});
            } else {
                this.audio.pause();
                this.setState({isPlaying: false});
            }
        };
    }

    render() {
        this.audio.src = `http://www.105.net/upload/uploadedContent/repliche/zoo/${this.props.episode}_ZOO.mp3`;

        return (
            <button onClick={this.playPause}>
                {(!this.state.isPlaying) ? 'Play' : 'Pause'}
            </button>
        );
    }
}

export default Player;