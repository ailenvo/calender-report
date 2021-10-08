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
import { getDateRangesWithRange, getHoursRanges } from '../../helpers';

const CalenderReport = (props: ICalenderProps) => {
  const { id, type } = props;

  const da = getHoursRanges(false, true);

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

export default CalenderReport;
