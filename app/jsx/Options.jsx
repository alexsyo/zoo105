'use strict';

import React from 'react';
import Period from './Period.jsx';
import Episode from './Episode.jsx';

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.episode = null;
        this.period = new Period();
        this.period.setDate();
        this.week = this.period.getWeek();
    }

    render() {
        return (
            <div>
                {this.week.map((day) => {
                    let fields = Episode.setFields(day);

                    return <Episode onClick={this.props.setEpisode.bind(null, fields.url)} key={fields.url} data={fields} />;
                })}
            </div>
        );
    }
}

export default Options;