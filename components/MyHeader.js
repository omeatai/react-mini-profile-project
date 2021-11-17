import React from 'react';

let timeOfTheDay = 'Morning';
const date = new Date();
const hours = date.getHours();

if (hours < 12) {
  timeOfTheDay = 'Morning';
  // myHeaderStyle.color = 'lightyellow';
} else if (hours < 17) {
  timeOfTheDay = 'Afternoon';
  // myHeaderStyle.color = 'red';
} else {
  timeOfTheDay = 'Evening';
  // myHeaderStyle.color = 'lightblue';
}
console.log(hours);

function MyHeader() {
  return (
    <header className="mystyle">
      <p>Good {timeOfTheDay}!</p>
      <p>WELCOME TO MY PAGE</p>
    </header>
  );
}

export default MyHeader;
