import React from 'react';

let timeOfTheDay = 'Morning';
const date = new Date();
const hours = date.getHours();

if (hours < 12) {
  timeOfTheDay = 'Morning';
} else if (hours < 17) {
  timeOfTheDay = 'Afternoon';
} else {
  timeOfTheDay = 'Evening';
}
console.log(hours);

function MyHeader() {
  return (
    <header className="mystyle evening">
      <p>Good {timeOfTheDay}!</p>
      <p>WELCOME TO MY PAGE</p>
    </header>
  );
}

export default MyHeader;
