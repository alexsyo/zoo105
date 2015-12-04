'use script';

import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.audio = new Media();

        this.play = () => {
            this.audio.play();
        };
    }

    render() {
        this.audio.src = `http://www.105.net/upload/uploadedContent/repliche/zoo/${this.props.episode}_ZOO.mp3`;

        return (
            <button onClick={this.play}>play</button>
        );
    }
}

export default Player;