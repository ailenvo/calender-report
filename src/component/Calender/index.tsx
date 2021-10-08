import {
  CalenderType,
  ICalenderProps,
  IDayProps,
  IGetDayRange,
  IHourProps,
  IWeekProps,
  StartDay,
} from '../../models/calender';
import {
  getDateRangesWithRange,
  getDateRangesWithThisMonth,
  getDateRangesWithThisWeek,
  getHourFormat24h,
  getHoursRanges,
} from '../../helpers';
import classNames from 'classnames';
import moment from 'moment';

const CalenderReport = (props: ICalenderProps) => {
  const { id, type } = props;
  const hours = getHoursRanges(false);
  const dates = getDateRangesWithThisWeek();

  const renderDay = (data: IDayProps) => {
    const date = moment(data.datetime);

    const dd = date.format('D');
    const day = date.format('ddd');

    return (
      <div key={dd} className={classNames('calender__col', data.className)}>
        <div>{day}</div>
        <div>{dd}</div>
      </div>
    );
  };
  const renderTime = (
    hour: IHourProps,
    showTime: boolean = true,
    className?: string,
  ) => {
    return (
      <div key={hour.hour} className={classNames('calender__col', className)}>
        <span className="calender__hour">
          {(showTime ? hour.hour : '') +
            ' ' +
            (showTime ? (hour.textHour ? hour.textHour : '') : '')}
        </span>
      </div>
    );
  };

  const renderNullCol = (
    date?: string,
    time?: IHourProps,
    className?: string,
  ) => {
    if (date && time) {
      const hour = getHourFormat24h(time);

      const day = moment(date).set('hour', hour).format('YYYY/MM/DD hh:mm a');

      return (
        <div
          className={classNames('calender__col', className)}
          onClick={() => alert(day)}></div>
      );
    }

    return <div className={classNames('calender__col', className)}></div>;
  };

  const renderHeader = () => {
    return (
      <div className="calender__row">
        {renderNullCol()}
        {dates.map((item) =>
          renderDay({
            datetime: item,
          }),
        )}
      </div>
    );
  };

  const renderHours = () => {
    return hours.map((hour, i) => (
      <div key={i} className="calender__row">
        {renderTime(hour, i > 0)}
        {dates.map((date) => renderNullCol(date, hour, 'border'))}
      </div>
    ));
  };

  const renderCalender = (data: IWeekProps) => {
    return (
      <div className="main">
        {renderHeader()}
        {renderHours()}
      </div>
    );
  };

  return (
    <section id={id} className="calender">
      {renderCalender({})}
    </section>
  );
};

export default CalenderReport;
