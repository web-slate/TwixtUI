import React, { useState } from 'react';
import TwixtPopover from '../../Containers/Popover';
import TwixtSingleLineInput from '../../InputSingleLine';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  isSameDay,
} from 'date-fns';

const DatePicker = ({
  label,
  popoverTitle,
  selectionType = 'single',
  onSelection,
  dateFormat = 'd',
}) => {
  const [startDateValue, setStartDateValue] = useState('');
  const [endDateValue, setEndDateValue] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRange, setSelectedRange] = useState({ start: null, end: null });

  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDayClick = (day) => {
    if (selectionType === 'single') {
      setSelectedDate(day);
      if (onSelection) onSelection(day);
      setStartDateValue(format(day, dateFormat));
    } else {
      if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
        setSelectedRange({ start: day, end: null });
        if (onSelection) onSelection({ start: day, end: null });
        setStartDateValue(format(day, dateFormat));
      } else {
        setSelectedRange({ start: selectedRange.start, end: day });
        if (onSelection) onSelection({ start: selectedRange.start, end: day });
        setStartDateValue(format(selectedRange.start, dateFormat));
        setEndDateValue(format(day, dateFormat));
      }
    }
  };

  const renderDays = () => {
    const startMonth = startOfMonth(currentMonth);
    const endMonth = endOfMonth(currentMonth);
    const days = eachDayOfInterval({
      start: startOfWeek(startMonth, { weekStartsOn: 1 }),
      end: endOfWeek(endMonth, { weekStartsOn: 1 }),
    });

    return days.map((day, index) => {
      const isSelected =
        selectionType === 'single'
          ? selectedDate && isSameDay(day, selectedDate)
          : (selectedRange.start && isSameDay(day, selectedRange.start)) ||
            (selectedRange.end && isSameDay(day, selectedRange.end));
      const isInRange =
        selectedRange.start &&
        selectedRange.end &&
        day >= selectedRange.start &&
        day <= selectedRange.end;

      return (
        <button
          key={index}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
            isSelected ? 'bg-blue-500 text-white' : isInRange ? 'bg-blue-100' : 'hover:bg-gray-200'
          }`}
          onClick={() => handleDayClick(day)}
        >
          {format(day, 'd')}
        </button>
      );
    });
  };

  return (
    <TwixtPopover
      overwriteContentClass="p-0"
      title={popoverTitle}
      hideOnBlur={false}
      content={
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-200">
              &lt;
            </button>
            <div>{format(currentMonth, 'MMMM yyyy')}</div>
            <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-200">
              &gt;
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center font-semibold">
                {day}
              </div>
            ))}
            {renderDays()}
          </div>
        </div>
      }
      position="bottom"
    >
      <TwixtSingleLineInput label={label} value={startDateValue} /> 
      {selectionType === 'single' ? null : (<>to
        <TwixtSingleLineInput value={endDateValue} /></>)}
    </TwixtPopover>
  );
};

export default DatePicker;
