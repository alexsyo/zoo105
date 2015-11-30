'use strict';

class Period {
    static getWeek() {
        let week = [];
        const TODAY = new Date();
        const MAX_WEEK_DAYS = 7;

        for(let i=0;i<MAX_WEEK_DAYS;i++) {
            const PAST_DAY = (new Date()).setDate(TODAY.getDate() - i);
            const READABLE_DATE = new Date(PAST_DAY);

            if(READABLE_DATE.getDay() !== 6 && READABLE_DATE.getDay() !== 0) {
                week.push(READABLE_DATE);
            }
        }

        return week;
    }
}

export default Period;