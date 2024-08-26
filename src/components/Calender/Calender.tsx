// import React, { useState } from 'react';
// import {
//   Calendar as BigCalendar,
//   momentLocalizer,
//   Components,
// } from 'react-big-calendar';
// import { RRule } from 'rrule';
// import moment from 'moment-timezone';
// import 'moment/locale/ko';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import * as S from './Calender.Style';
// import Popup from './Popup';

// moment.tz.setDefault('Asia/Seoul');
// moment.locale('ko');
// const localizer = momentLocalizer(moment);

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
// }

// const Calendar = () => {
//   const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
//   const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

//   const createRecurringEvents = (
//     baseDate: Date,
//     title: string,
//     color: string,
//   ): IEvent[] => {
//     const rule = new RRule({
//       freq: RRule.MONTHLY,
//       dtstart: baseDate,
//       interval: 1,
//       until: new Date(2025, 6, 1), // ★until을 설정하여 무한 루프 방지
//     });

//     return rule.all().map((date) => ({
//       start: new Date(date),
//       end: new Date(date),
//       title,
//       color,
//     }));
//   };

//   const events = [
//     ...createRecurringEvents(new Date(2024, 6, 2), 'Netflix', '#E50914'),
//     ...createRecurringEvents(new Date(2024, 6, 5), 'Disney+', '#0063e5'),
//     ...createRecurringEvents(new Date(2024, 6, 20), 'Wavve', '#00A8E1'),
//   ];

//   const DateCellWrapper: Components['dateCellWrapper'] = ({
//     children,
//     value,
//   }) => {
//     const event = events.find((evt) => moment(evt.start).isSame(value, 'day'));

//     return React.cloneElement(
//       React.Children.only(children) as React.ReactElement,
//       {
//         style: {
//           ...((children as React.ReactElement).props.style || {}),
//           position: 'relative',
//           cursor: event ? 'pointer' : 'default',
//           ...(event && {
//             '&::after': {
//               content: '""',
//               position: 'absolute',
//               bottom: '2px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '80%',
//               height: '2px',
//               backgroundColor: event.color,
//             },
//           }),
//         },
//       },
//     );
//   };

//   const handleNavigate = (newDate: Date) => {
//     setCurrentMonth(moment(newDate).format('M월'));
//   };

//   const handleSelectEvent = (event: IEvent) => {
//     setSelectedEvent(event);
//   };

//   return (
//     <S.CalendarCont>
//       <S.MonthTit>{currentMonth}</S.MonthTit>
//       <S.CalendarWrap>
//         <BigCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 230 }}
//           views={['month']}
//           toolbar={false}
//           onNavigate={handleNavigate}
//           onSelectEvent={handleSelectEvent}
//           components={{
//             dateCellWrapper: DateCellWrapper,
//           }}
//           formats={{
//             monthHeaderFormat: 'M월',
//             weekdayFormat: (date: Date) => moment(date).format('ddd'),
//             dayFormat: (date: Date) => moment(date).format('D'),
//           }}
//         />
//       </S.CalendarWrap>
//       {selectedEvent && (
//         <Popup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
//       )}
//     </S.CalendarCont>
//   );
// };

// export default Calendar;

// import React, { useState } from 'react';
// import {
//   Calendar as BigCalendar,
//   momentLocalizer,
//   Components,
// } from 'react-big-calendar';
// import { RRule } from 'rrule';
// import moment from 'moment-timezone';
// import 'moment/locale/ko';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import * as S from './Calender.Style';
// import Popup from './Popup';

// moment.tz.setDefault('Asia/Seoul');
// moment.locale('ko');
// const localizer = momentLocalizer(moment);

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
// }

// const Calendar = () => {
//   const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
//   const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

//   const createRecurringEvents = (
//     baseDate: Date,
//     title: string,
//     color: string,
//   ): IEvent[] => {
//     const rule = new RRule({
//       freq: RRule.MONTHLY,
//       dtstart: baseDate,
//       interval: 1,
//       until: new Date(2025, 6, 1), // ★until을 설정하여 무한 루프 방지
//     });

//     return rule.all().map((date) => ({
//       start: new Date(date),
//       end: new Date(date),
//       title,
//       color,
//     }));
//   };

//   const events = [
//     ...createRecurringEvents(new Date(2024, 6, 2), 'Netflix', '#E50914'),
//     ...createRecurringEvents(new Date(2024, 6, 5), 'Disney+', '#0063e5'),
//     ...createRecurringEvents(new Date(2024, 6, 20), 'Wavve', '#00A8E1'),
//   ];

//   const DateCellWrapper: Components['dateCellWrapper'] = ({
//     children,
//     value,
//   }) => {
//     const event = events.find((evt) => moment(evt.start).isSame(value, 'day'));

//     return React.cloneElement(
//       React.Children.only(children) as React.ReactElement,
//       {
//         style: {
//           ...((children as React.ReactElement).props.style || {}),
//           position: 'relative',
//           cursor: event ? 'pointer' : 'default',
//           ...(event && {
//             '&::after': {
//               content: '""',
//               position: 'absolute',
//               bottom: '2px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '80%',
//               height: '2px',
//               backgroundColor: event.color,
//             },
//           }),
//         },
//       },
//     );
//   };

//   const handleNavigate = (newDate: Date) => {
//     setCurrentMonth(moment(newDate).format('M월'));
//   };

//   const handleSelectEvent = (event: IEvent) => {
//     setSelectedEvent(event);
//   };

//   const EventComponent = ({ event }: { event: IEvent }) => (
//     <div
//       style={{ backgroundColor: event.color, height: '100%', width: '100%' }}
//     />
//   );

//   return (
//     <S.CalendarCont>
//       <S.MonthTit>{currentMonth}</S.MonthTit>
//       <S.CalendarWrap>
//         <BigCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 230 }}
//           views={['month']}
//           toolbar={false}
//           onNavigate={handleNavigate}
//           onSelectEvent={handleSelectEvent}
//           components={{
//             dateCellWrapper: DateCellWrapper,
//             event: EventComponent,
//           }}
//           formats={{
//             monthHeaderFormat: 'M월',
//             weekdayFormat: (date: Date) => moment(date).format('ddd'),
//             dayFormat: (date: Date) => moment(date).format('D'),
//           }}
//         />
//       </S.CalendarWrap>
//       {selectedEvent && (
//         <Popup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
//       )}
//     </S.CalendarCont>
//   );
// };

// export default Calendar;

// import React, { useState, useEffect } from 'react';
// import {
//   Calendar as BigCalendar,
//   momentLocalizer,
//   Components,
// } from 'react-big-calendar';
// import { RRule } from 'rrule';
// import moment from 'moment-timezone';
// import 'moment/locale/ko';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axiosInstance from '../../libs/AxiosInstance';
// import * as S from './Calender.Style';
// import Popup from './Popup';

// moment.tz.setDefault('Asia/Seoul');
// moment.locale('ko');
// const localizer = momentLocalizer(moment);

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
// }

// const Calendar: React.FC = () => {
//   const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
//   const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
//   const [events, setEvents] = useState<IEvent[]>([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axiosInstance.get('/api/subscription/user'); // API 요청
//         const subscriptions = response.data;

//         const eventList = subscriptions.flatMap((subscription: any) =>
//           createRecurringEvents(
//             new Date(subscription.paymentDate), // 각 구독의 결제일을 기준으로 이벤트 생성
//             subscription.ottName,
//             getRandomColor(),
//           ),
//         );
//         setEvents(eventList);
//       } catch (error) {
//         console.error('Error fetching subscription data:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const createRecurringEvents = (
//     baseDate: Date,
//     title: string,
//     color: string,
//   ): IEvent[] => {
//     const dayOfMonth = baseDate.getDate(); // 날짜 부분만 가져옴

//     const rule = new RRule({
//       freq: RRule.MONTHLY,
//       dtstart: baseDate,
//       bymonthday: dayOfMonth, // 매월 해당 일자로 이벤트 생성
//       interval: 1,
//       until: new Date(2025, 6, 1),
//     });

//     return rule.all().map((date) => ({
//       start: new Date(date),
//       end: new Date(date),
//       title,
//       color,
//     }));
//   };

//   const getRandomColor = (): string => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   const DateCellWrapper: Components['dateCellWrapper'] = ({
//     children,
//     value,
//   }) => {
//     const event = events.find((evt) => moment(evt.start).isSame(value, 'day'));

//     return React.cloneElement(
//       React.Children.only(children) as React.ReactElement,
//       {
//         style: {
//           ...((children as React.ReactElement).props.style || {}),
//           position: 'relative',
//           cursor: event ? 'pointer' : 'default',
//           ...(event && {
//             '&::after': {
//               content: '""',
//               position: 'absolute',
//               bottom: '2px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '80%',
//               height: '2px',
//               backgroundColor: event.color,
//             },
//           }),
//         },
//       },
//     );
//   };

//   const handleNavigate = (newDate: Date) => {
//     setCurrentMonth(moment(newDate).format('M월'));
//   };

//   const handleSelectEvent = (event: IEvent) => {
//     setSelectedEvent(event);
//   };

//   const EventComponent = ({ event }: { event: IEvent }) => (
//     <div
//       style={{ backgroundColor: event.color, height: '100%', width: '100%' }}
//     />
//   );

//   return (
//     <S.CalendarCont>
//       <S.MonthTit>{currentMonth}</S.MonthTit>
//       <S.CalendarWrap>
//         <BigCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 230 }}
//           views={['month']}
//           toolbar={false}
//           onNavigate={handleNavigate}
//           onSelectEvent={handleSelectEvent}
//           components={{
//             dateCellWrapper: DateCellWrapper,
//             event: EventComponent,
//           }}
//           formats={{
//             monthHeaderFormat: 'M월',
//             weekdayFormat: (date: Date) => moment(date).format('ddd'),
//             dayFormat: (date: Date) => moment(date).format('D'),
//           }}
//         />
//       </S.CalendarWrap>
//       {selectedEvent && (
//         <Popup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
//       )}
//     </S.CalendarCont>
//   );
// };

// export default Calendar;
import React, { useState, useEffect } from 'react';
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Components,
} from 'react-big-calendar';
import { RRule } from 'rrule';
import moment from 'moment-timezone';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axiosInstance from '../../libs/AxiosInstance';
import * as S from './Calender.Style';
import Popup from './Popup';

moment.tz.setDefault('Asia/Seoul');
moment.locale('ko');
const localizer = momentLocalizer(moment);

interface IEvent {
  start: Date;
  end: Date;
  title: string;
  color: string;
}

interface IPayment {
  paymentDate: number; // 'dd' 형식으로 전달받음
  ottName: string;
}

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get('/api/subscription/user'); // API 요청
        const subscriptions: IPayment[] = response.data;

        const eventList = subscriptions.flatMap((subscription) =>
          createRecurringEvents(
            subscription.paymentDate,
            subscription.ottName,
            getRandomColor(),
          ),
        );
        setEvents(eventList);
      } catch (error) {
        console.error('Error fetching subscription data:', error);
      }
    };

    fetchEvents();
  }, []);

  const createRecurringEvents = (
    dayOfMonth: number,
    title: string,
    color: string,
  ): IEvent[] => {
    // 현재 월의 첫날을 가져옵니다
    const startOfMonth = moment().startOf('month').toDate();
    // 루프를 통해 매월 동일 날짜에 반복되는 이벤트를 생성합니다
    const rule = new RRule({
      freq: RRule.MONTHLY,
      dtstart: startOfMonth,
      bymonthday: dayOfMonth, // 매월 해당 일자로 이벤트 생성
      interval: 1,
      until: new Date(2025, 6, 1), // 반복 종료일 설정
    });

    return rule.all().map((date) => ({
      start: new Date(date),
      end: new Date(date),
      title,
      color,
    }));
  };

  const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const DateCellWrapper: Components['dateCellWrapper'] = ({
    children,
    value,
  }) => {
    const event = events.find((evt) => moment(evt.start).isSame(value, 'day'));

    return React.cloneElement(
      React.Children.only(children) as React.ReactElement,
      {
        style: {
          ...((children as React.ReactElement).props.style || {}),
          position: 'relative',
          cursor: event ? 'pointer' : 'default',
          ...(event && {
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '2px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '2px',
              backgroundColor: event.color,
            },
          }),
        },
      },
    );
  };

  const handleNavigate = (newDate: Date) => {
    setCurrentMonth(moment(newDate).format('M월'));
  };

  const handleSelectEvent = (event: IEvent) => {
    setSelectedEvent(event);
  };

  const EventComponent = ({ event }: { event: IEvent }) => (
    <div
      style={{ backgroundColor: event.color, height: '100%', width: '100%' }}
    />
  );

  return (
    <S.CalendarCont>
      <S.MonthTit>{currentMonth}</S.MonthTit>
      <S.CalendarWrap>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 230 }}
          views={['month']}
          toolbar={false}
          onNavigate={handleNavigate}
          onSelectEvent={handleSelectEvent}
          components={{
            dateCellWrapper: DateCellWrapper,
            event: EventComponent,
          }}
          formats={{
            monthHeaderFormat: 'M월',
            weekdayFormat: (date: Date) => moment(date).format('ddd'),
            dayFormat: (date: Date) => moment(date).format('D'),
          }}
        />
      </S.CalendarWrap>
      {selectedEvent && (
        <Popup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </S.CalendarCont>
  );
};

export default Calendar;