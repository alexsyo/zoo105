'use script';

import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.url = `http://www.105.net/upload/uploadedContent/repliche/zoo/${this.props.episode}_ZOO.mp3`;
        this.episode = this.props.episode;
        setInterval(() => {console.log(this.episode)}, 1000);
    }

    render() {
        return (
            <audio controls src={`http://www.105.net/upload/uploadedContent/repliche/zoo/${this.props.episode}_ZOO.mp3`} type="audio/mpeg">
            </audio>
        );
    }
}

export default Player;