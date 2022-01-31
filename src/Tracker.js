import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Tracker.css"



    
export default function Tracker () {
  const [date, setDate] = useState(new Date());

<div className='calendar'>
      <h1 className='text-center'>Period Tracker</h1>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          selectRange={true}
          defaultValue={date} 
          nextLabel='Month>>'
          nextAriaLabel='Go to next month'
          next2Label='Year>>'
          next2AriaLabel='Go to next year'
          prevLabel='<<Month'
          prevAriaLabel='Go to prev month'
          prev2Label='<<Year'
          prev2AriaLabel='Go to prev year'
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div> }