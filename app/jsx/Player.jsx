'use script';

import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.play = (episode) => {
            this.audio = new Media(`http://www.105.net/upload/uploadedContent/repliche/zoo/${episode}_ZOO.mp3`);

            this.audio.play();
        };
    }

    render() {
        return (
            <button onClick={this.play.bind(null, this.props.episode)}>play</button>
        );
    }
}

export default Player;