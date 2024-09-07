import React, { useState, useEffect } from 'react';
import TwixtPopover from '../../Containers/Popover';
import TwixtSingleLineInput from '../../InputSingleLine';
import { format, addMinutes, startOfDay, isSameMinute } from 'date-fns';

const TimePicker = ({ label = '', popoverTitle = '', selectionType = 'single', onSelection }) => {
  const [timeValue, setTimeValue] = useState('');
  const [endTimeValue, setEndTimeValue] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimeRange, setSelectedTimeRange] = useState({ start: null, end: null });

  useEffect(() => {
    const now = new Date();
    const end = addMinutes(now, 30);

    if (selectionType === 'range') {
      setSelectedTimeRange({ start: format(now, 'HH:mm'), end: format(end, 'HH:mm') });
      if (onSelection) onSelection({ start: format(now, 'HH:mm'), end: format(end, 'HH:mm') });
    }
  }, [selectionType, onSelection]);

  const generateTimeSlots = () => {
    const times = [];
    const start = startOfDay(new Date());
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        times.push(format(addMinutes(start, hour * 60 + minute), 'HH:mm'));
      }
    }
    return times;
  };

  const handleTimeClick = (time) => {
    if (selectionType === 'single') {
      setSelectedTime(time);
      setTimeValue(time);
      if (onSelection) onSelection(time);
    } else {
      if (!selectedTimeRange.start || (selectedTimeRange.start && selectedTimeRange.end)) {
        setSelectedTimeRange({ start: time, end: null });
        if (onSelection) onSelection({ start: time, end: null });
        setTimeValue(time);
      } else {
        setSelectedTimeRange({ start: selectedTimeRange.start, end: time });
        if (onSelection) onSelection({ start: selectedTimeRange.start, end: time });
        setTimeValue(selectedTimeRange.start);
        setEndTimeValue(time)
      }
    }
  };

  const renderTimeSlots = () => {
    const times = generateTimeSlots();

    return times.map((time, index) => {
      const isSelected =
        selectionType === 'single'
          ? selectedTime === time
          : selectedTimeRange.start === time || selectedTimeRange.end === time;
      const isInRange =
        selectedTimeRange.start &&
        selectedTimeRange.end &&
        isSameMinute(new Date(`1970-01-01T${time}:00`), new Date(`1970-01-01T${selectedTimeRange.start}:00`)) ||
        (new Date(`1970-01-01T${time}:00`) >= new Date(`1970-01-01T${selectedTimeRange.start}:00`) &&
          new Date(`1970-01-01T${time}:00`) <= new Date(`1970-01-01T${selectedTimeRange.end}:00`));

      return (
        <button
          key={index}
          className={`p-2 m-1 rounded ${isSelected ? 'bg-blue-500 text-white' : isInRange ? 'bg-blue-100' : 'hover:bg-gray-200'
            }`}
          onClick={() => handleTimeClick(time)}
        >
          {time}
        </button>
      );
    });
  };

  return (
    <TwixtPopover
      overwriteContentClass="min-w-[300px] px-1"
      title={popoverTitle}
      hideOnBlur={false}
      scrollable={true}
      content={(
        <div className="p-4">
          <div className="grid grid-cols-4 gap-2">
            {renderTimeSlots()}
          </div>
        </div>
      )}
      position="bottom"
    >
      <TwixtSingleLineInput label={label} value={timeValue} /> {selectionType === 'single' ? null : (<>to
        <TwixtSingleLineInput value={endTimeValue} /></>)}
    </TwixtPopover>
  )
};

export default TimePicker;
