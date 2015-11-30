'use strict';

import React from 'react';

class Episode extends React.Component {
    constructor(props) {
        super(props);

        this._setFields(this.props.day);
    }

    _setFields(date) {
        const DAY_NAMES = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
        const DAY_NAME = DAY_NAMES[date.getDay()];
        const DAY = date.getDate();
        const MONTH = date.getMonth() + 1;
        const YEAR = date.getFullYear();

        this.url = `${DAY_NAME}_${DAY}${MONTH}${YEAR}`;
        this.name = `${DAY_NAME} ${DAY}-${MONTH}-${YEAR}`;
    }

    render() {
        return (
            <div onClick={this.props.setEpisode.bind(null, this.url)}>
                {this.name}
            </div>
        );
    }
}

export default Episode;