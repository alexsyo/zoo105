'use strict';

class Period {
    constructor() {
        this.date = null;
    }

    setDate() {
        this.date = new Date();
    }

    getWeek() {
        let dates = [];
        const TODAY = this.date.getDate();
        const MAX_WEEK_DAYS = 7;

        for(let i=0;i<MAX_WEEK_DAYS;i++) {
            let date = new Date();
            date.setDate(TODAY - i);
            date = new Date(date);

            if(date.getDay() !== 6 && date.getDay() !== 0) {
                dates.push(date);
            }
        }

        return dates;
    }
}

export default Period;