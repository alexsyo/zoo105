'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Options from './Options.jsx';
import Player from './Player.jsx';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {episode: null};
        
        this.setEpisode = (episode) => {
            this.setState({episode});
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