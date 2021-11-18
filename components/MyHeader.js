import React from 'react';

let timeOfTheDay;
const date = new Date();
const hours = date.getHours();

if (hours < 8) {
  timeOfTheDay = 'morning';
} else if (hours < 17) {
  timeOfTheDay = 'afternoon';
} else {
  timeOfTheDay = 'evening';
}
console.log(hours);

function MyHeader() {
  return (
    <header className="{timeOfTheDay}">
      <p>Good {timeOfTheDay}!</p>
      <p>WELCOME TO MY PAGE</p>
    </header>
  );
}

export default MyHeader;
