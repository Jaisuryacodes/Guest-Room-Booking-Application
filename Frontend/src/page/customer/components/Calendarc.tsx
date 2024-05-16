import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calandar.css';
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const Calendarc = () => {
    const [value, onChange] = useState<Value>(new Date());
    console.log(value)
 
    const [disabledDates, setDisabledDates] = useState([new Date('2024-05-14'),new Date('2024-05-13')]); // Replace with your disabled dates

  const tileDisabled = ({ date }) => {
    // Check if the date is in the disabledDates array
    return disabledDates.some(disabledDate => 
      date.getFullYear() === disabledDate.getFullYear() &&
      date.getMonth() === disabledDate.getMonth() &&
      date.getDate() === disabledDate.getDate()
    );
  };
  const tileContent = ({ date }) => {
    if (tileDisabled({ date })) {
      return <span title='Already booked' style={{color:'white' ,padding:'5px',backgroundColor: 'red', borderRadius: '20%', cursor:'pointer',textAlign: 'center'}}>X</span>; 
      // Render 'X' for already booked dates
    }
    return null; 
    // Return null for non-disabled dates
  };
    return (
      <div>
        <Calendar  className="custom-calendar" onChange={onChange} value={value} calendarType='gregory' selectRange={true} returnValue="range" 
        tileDisabled={tileDisabled}  tileContent={tileContent}/>
      
       </div>
    );
}

export default Calendarc
