import React from 'react';
import Calendar from 'react-calendar';

function CustomCalender({activeStartDate, value}) {
  return (
    <Calendar
      value={value}
      activeStartDate = {activeStartDate}
    />
  );
}
export default CustomCalender;