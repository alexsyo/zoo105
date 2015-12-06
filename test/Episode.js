'use strict';

import chai from 'chai';
import sinon from 'sinon';
import datetime from 'chai-datetime';
chai.use(datetime);
let expect = chai.expect;

import Episode from '../app/jsx/Options/Episode';


let day = new Date(15, 11, 5);
let props = {day, handleEpisodeChange: () => true};
let handleEpisodeChange = sinon.spy(props, 'handleEpisodeChange');

let episode = new Episode(props);

describe('Episode', () => {

    it('strh', () => {

        expect(episode.render()).to.equal('ergserg');

    });

});