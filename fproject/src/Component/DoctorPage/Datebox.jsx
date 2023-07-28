import React from 'react';

const DateBox = ({ date }) => {
  const boxStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    display: 'inline-block',
  };

  return (
    <div style={boxStyle}>
      {date}
    </div>
  );
};


export default DateBox;
