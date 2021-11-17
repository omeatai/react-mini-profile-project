import React from 'react';

const myHeaderStyle = {
  backgroundColor: '#000',
  color: '#fff',
  fontWeight: 'bold',
  padding: '10px',
  textAlign: 'center',
};

let timeOfTheDay = 'Morning';
const date = new Date();
const hours = date.getHours();

if (hours < 12) {
  timeOfTheDay = 'Morning';
  myHeaderStyle.color = 'lightyellow';
} else if (hours < 17) {
  timeOfTheDay = 'Afternoon';
  myHeaderStyle.color = 'red';
} else {
  timeOfTheDay = 'Evening';
  myHeaderStyle.color = 'lightblue';
}
console.log(hours);

function MyHeader() {
  return (
    <header className="myStyle">
      <p>Good {timeOfTheDay}!</p>
      <p>WELCOME TO MY PAGE</p>
    </header>
  );
}

export default MyHeader;
