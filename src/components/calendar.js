import React from "react";

const Calendar = ({ date }) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const adjustedFirstDayOfMonth = firstDayOfMonth === 0 ? 7 : firstDayOfMonth + 1; // if Sunday, set to 7 instead of 0
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const rows = [];
  let cells = [];

  // First row: month and year
  rows.push(
    <tr key="month">
      <th colSpan="7">
        {monthNames[date.getMonth()]} {date.getFullYear()}
      </th>
    </tr>
  );

  // Second row: weekdays
  rows.push(
    <tr key="weekdays">
      {weekdays.map((weekday) => (
        <th key={weekday}>{weekday}</th>
      ))}
    </tr>
  );

  // Following rows: dates
  for (let i = 1; i <= daysInMonth + adjustedFirstDayOfMonth - 1; i++) {
    if (i < adjustedFirstDayOfMonth) {
      cells.push(<td key={i} />);
    } else {
      const day = i - adjustedFirstDayOfMonth + 1;
      const dateObj = new Date(date.getFullYear(), date.getMonth(), day);
      const isToday = dateObj.toDateString() === new Date().toDateString();
      const isSelected = dateObj.toDateString() === date.toDateString();

      cells.push(
        <td key={day} className={`day ${isToday ? "today" : ""} ${isSelected ? "selected" : ""}`}>
          {day}
        </td>
      );
    }

    if (i % 7 === 0) {
      rows.push(<tr key={i}>{cells}</tr>);
      cells = [];
    }
  }

  // Last row: remaining cells
  if (cells.length > 0) {
    while (cells.length < 7) {
      cells.push(<td key={`empty-${cells.length}`} />);
    }
    rows.push(<tr key="last">{cells}</tr>);
  }

  return (
    <table className="calendar">
      <thead>{rows.slice(0, 2)}</thead>
      <tbody>{rows.slice(2)}</tbody>
    </table>
  );
};

export default Calendar;
