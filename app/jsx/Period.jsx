'use strict';

class Period {

    static getWeek() {
        const MAX_WEEK_DAYS = 7;
        let week = [];
        let today = new Date();

        for(let i=0;i<MAX_WEEK_DAYS;i++) {
            let day = (new Date()).setDate(today.getDate() - i);
            let readableDate = new Date(day);

            if(readableDate.getDay() !== 6 && readableDate.getDay() !== 0) {
                week.push(readableDate);
            }
        }

        return week;
    }
}

export default Period;