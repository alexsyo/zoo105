'use strict';

import React from 'react';

class Episode extends React.Component {
    constructor(props) {
        super(props);
    }

    // handleClick(url) {
    //     this.setState({url: url});
    //     console.log(this.state.url);
    // };


    static setFields(date) {
        let dayNames = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
        let dayName = dayNames[date.getDay()];
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let url = `${dayName}_${day}${month}${year}`;
        let name = `${dayName} ${day}-${month}-${year}`;
        let setEpisode = () => url;

        return {url, name};
    }

    render() {
        return (
            <div onClick={this.props.onClick.bind(this.props.data.url)}>
                {this.props.data.name}
            </div>
        );
    }
}

export default Episode;