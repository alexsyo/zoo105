'use strict';

import React from 'react';
import Period from './Period.jsx';
import Episode from './Episode.jsx';

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.week = Period.getWeek();
    }

    render() {
        return (
            <div>
                {this.week.map((day) => {
                    return ( 
                        <Episode
                            key={day}
                            day={day} 
                            setEpisode={this.props.setEpisode} />
                    );
                })}
            </div>
        );
    }
}

export default Options;