'use strict';

import React from 'react';

class Controls extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        const CENTER = 'v-align grid-container ';

        return(

            <div className="grid-block v-align">
                <div className={CENTER + 'controls'} onClick={this.props.handlePlayingChange}>
                    <div className={(!this.props.isPlaying) ? CENTER + 'play' : CENTER + 'pause'}></div>
                </div>
            </div>

        );

    }

}

export default Controls;