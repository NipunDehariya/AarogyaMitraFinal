import React from 'react';

const TimeBox = ({ time }) => {
  const boxStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    display: 'inline-block',
  };

  return (
    <div style={boxStyle}>
      {time}
    </div>
  );
};



export default TimeBox;
