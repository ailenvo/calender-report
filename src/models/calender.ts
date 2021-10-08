export interface ICalenderProps {
  id: string;
  type: CalenderType;
}

export enum CalenderType {
  ThisWeek = 'ThisWeek',
  ThisMonth = 'ThisMonth',
  Range = 'Range',
}

export interface IDayProps {
  className?: string;
  datetime: string | Date | null | undefined;
}

export interface IWeekProps {}

export enum StartDay {
  Sunday = 'Sunday',
  Monday = 'Monday',
}

export interface IGetDayRange {
  type: CalenderType;
  startDay?: StartDay;
  startDate?: string | Date | null;
  endDate?: string | Date | null;
}

export interface IHourProps {
  hour: number;
  textHour: string | null;
}
