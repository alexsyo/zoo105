'use strict';

class Media {

    constructor() {

        this.src = 'abc';
        this.position = 10;
        this.duration = 123;
        this.seekTo = (val) => this.position = val / 1000;
        this.getCurrentPosition = () => this.position;
        this.getDuration = () => 3600;
        this.play = () => setInterval(() => this.position += 1, 1000);
        this.pause = () => console.log('pause');
        this.release = () => true;

    }

}

export default Media;