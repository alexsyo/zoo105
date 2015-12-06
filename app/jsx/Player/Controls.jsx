'use strict';

import React from 'react';

class Controls extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(

            <button onClick={this.props.handlePlayingChange}>
                {(!this.props.isPlaying) ? 'Play' : 'Pause'}
            </button>

        );

    }

}

export default Controls;