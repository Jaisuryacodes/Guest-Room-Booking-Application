import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calandar.css'
import { format, isSameDay,addDays } from 'date-fns';

const Calendarc = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const startDate = new Date("2024-05-16"); // May 1, 2024
  const endDate = new Date("2024-05-19");
  var disabledDates=[ ];
  const getSequentialDates = (startDate, endDate) => {
  //  const dates=[];
    let currentDate = startDate;
  
    while (currentDate <= endDate) {
      disabledDates.push(format(currentDate, 'yyyy-MM-dd'));
      currentDate = addDays(currentDate, 1);
    }
  
    return disabledDates;
  };
 
  getSequentialDates(startDate, endDate);// Array of dates to disable

  // Function to check if a date should be disabled
  const isDateDisabled = (date) => {
    return disabledDates.some(disabledDate =>
      isSameDay(new Date(disabledDate), date)
    );
  };
  console.log(disabledDates)
  // Function to customize tile styles for disabled dates
  const tileClassName = ({ date, view }) => {
    if (view === 'month' && isDateDisabled(date)) {
      return 'disabled-date'; // CSS class for disabled dates
    }
    return null;
  };
  const tileContentAndDisabled = ({ date, view }) => {
    if (view === 'month') {
      if (isDateDisabled(date)) {
        return <span title='Already Booked' className="text-[#f6f6f6] p-1 bg-[#ff3636] cursor-pointer  rounded">X</span>;
      }
     
    }
    return null;
  };
  return (
    <div>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileDisabled={({ date }) => isDateDisabled(date)}
        tileClassName={tileClassName}
        tileContent={tileContentAndDisabled}
        className="custom-calendar"
      />
    </div>
  );
};

export default Calendarc;
