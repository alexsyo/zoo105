'use strict';

import React from 'react';

class Episode extends React.Component {

    constructor(props) {

        super(props);


        this._setFields = (date) => {

            const WEEK = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
            let dayName = WEEK[date.getDay()];
            let day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
            let month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            let year = date.getFullYear();

            this.episode = `${dayName}_${day}${month}${year}`;
            this.name = `${dayName} ${day}-${month}-${year}`;

        };

    }

    render() {
        
        this._setFields(this.props.day);
        const CLASSES = 'grid-block small-12 align-center episode ';

        return (

            <div className={((this.episode === this.props.episode) ? CLASSES + 'selected' : CLASSES + 'default')} 
                onClick={this.props.handleEpisodeChange.bind(null, this.episode)}>
                {this.name}
            </div>

        );
        
    }


}

export default Episode;