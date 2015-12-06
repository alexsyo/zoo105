'use strict';

import React from 'react';
import Options from './Options/Options.jsx';
import Player from './Player/Player.jsx';
// import Media from '../../test/Media';

class App extends React.Component{

    constructor(props) {

        super(props);
        this.audio = new Media();
        this.state = {
            episode: null
        };
        
        
        this.handleEpisodeChange = (episode) => {

            this.audio.release();
            this.audio.src = `http://www.105.net/upload/uploadedContent/repliche/zoo/${episode}_ZOO.mp3`;
            this.audio.duration = null;
            this.audio.position = null;
            this.setState({episode});

        };

    }

    render() {

        return (

            <div className="grid-block vertical">
                <Options episode={this.state.episode} handleEpisodeChange={this.handleEpisodeChange} />
                <Player audio={this.audio} />
            </div>

        );

    }

}

export default App;