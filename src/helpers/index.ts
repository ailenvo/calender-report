import moment from 'moment';
import { StartDay } from '../models/calender';

export const getDateRangesWithThisWeek = (startDay: StartDay): string[] => {
  let start = moment().subtract(0, 'weeks').startOf('isoWeek');
  let end = moment().subtract(0, 'weeks').endOf('isoWeek');

  if (startDay === StartDay.Sunday) {
    start = moment().startOf('week');
    end = moment().endOf('week');
  }

  const dayRanges = getDateRanges(start, end);

  return dayRanges;
};

export const getDateRangesWithThisMonth = (): string[] => {
  const start = moment().startOf('months');
  const end = moment().endOf('months');

  const dayRanges = getDateRanges(start, end);

  return dayRanges;
};

export const getDateRangesWithRange = (
  startDate: string | Date,
  endDate: string | Date,
): string[] => {
  const start = moment(startDate);
  const end = moment(endDate);

  const dayRanges = getDateRanges(start, end);

  return dayRanges;
};

export const getDateRanges = (start: moment.Moment, end: moment.Moment) => {
  let dateRanges: string[] = [];

  const startDayNumber = start.get('D');
  const endDayNumber = end.get('D');

  for (let i = startDayNumber; i < endDayNumber + 1; i++) {
    dateRanges.push(moment().set('D', i).format('YYYY-MM-DD'));
  }

  return dateRanges;
};

export const hoursRanges = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

export const afternoon = (hours: number, isLower: boolean = false) => {
  if (hours > 11) {
    return isLower ? 'pm' : 'PM';
  } else {
    return isLower ? 'am' : 'AM';
  }
};

export const getHoursRanges = (
  format24H: boolean = true,
  isLower: boolean = false,
) => {
  if (format24H) {
    return hoursRanges.map((item) => {
      return {
        hour: item,
        textHour: null,
      };
    });
  } else {
    return hoursRanges.map((item) => {
      return {
        hour: setHourFormat12H(item),
        textHour: afternoon(item, isLower),
      };
    });
  }
};

export const setHourFormat12H = (hour: number) => {
  if (hour === 0) {
    return 12;
  }
  if (hour > 12) {
    return hour - 12;
  }
  return hour;
};
