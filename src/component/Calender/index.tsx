import {
  CalenderType,
  ICalenderProps,
  IDayProps,
  IGetDayRange,
  IWeekProps,
  StartDay,
} from '../../models/calender';
import className from 'classnames';
import moment from 'moment';

const CalenderReport = (props: ICalenderProps) => {
  const { id, type } = props;

  const da = getDateRangesWithRange('2021-10-03', '2021-10-21');

  console.log(da);

  const renderDay = (data: IDayProps) => {
    return <div className="calender__col"></div>;
  };

  const renderNullCol = () => {
    return <div className="calender__col"></div>;
  };

  const renderHeader = () => {
    return <div className="calender__row">{renderNullCol()}</div>;
  };

  const renderCalenderWithWeek = (data: IWeekProps) => {
    return (
      <div className="main">
        {renderHeader()}

        <div className="calender__row">{renderNullCol()}</div>
      </div>
    );
  };

  return (
    <section id={id} className="calender">
      {renderCalenderWithWeek({})}
    </section>
  );
};

const getDateRangesWithThisWeek = (startDay: StartDay): string[] => {
  let start = moment().subtract(0, 'weeks').startOf('isoWeek');
  let end = moment().subtract(0, 'weeks').endOf('isoWeek');

  if (startDay === StartDay.Sunday) {
    start = moment().startOf('week');
    end = moment().endOf('week');
  }

  const dayRanges = getDateRanges(start, end);

  return dayRanges;
};

const getDateRangesWithThisMonth = (): string[] => {
  const start = moment().startOf('months');
  const end = moment().endOf('months');

  const dayRanges = getDateRanges(start, end);

  return dayRanges;
};

const getDateRangesWithRange = (
  startDate: string | Date,
  endDate: string | Date,
): string[] => {
  const start = moment(startDate);
  const end = moment(endDate);

  const dayRanges = getDateRanges(start, end);

  return dayRanges;
};

const getDateRanges = (start: moment.Moment, end: moment.Moment) => {
  let dateRanges: string[] = [];

  const startDayNumber = start.get('D');
  const endDayNumber = end.get('D');

  for (let i = startDayNumber; i < endDayNumber + 1; i++) {
    dateRanges.push(moment().set('D', i).format('YYYY-MM-DD'));
  }

  return dateRanges;
};

export default CalenderReport;
