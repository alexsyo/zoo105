'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Options from './Options.jsx';
import Player from './Player.jsx';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {episode: null};
        // setInterval(() => {console.log(this.state)}, 1000);
        
        this.setEpisode = (url) => {
            this.setState({episode: url});
        };

        this.getEpisode = () => {
            return this.episode;
        };
    }

    render() {
        return (
            <div>
                <Options setEpisode={this.setEpisode} />
                <Player episode={this.state.episode} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('content'));