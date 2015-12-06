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

            <div className="grid-block vertical shrink">

                {this.week.map((day, i) => {

                    return ( 

                        <Episode
                            key={i}
                            day={day}
                            episode={this.props.episode}
                            handleEpisodeChange={this.props.handleEpisodeChange} />

                    );

                })}

            </div>

        );

    }
    
}

export default Options;
