import React from 'react';

const myHeaderStyle = {
  backgroundColor: '#000',
  color: '#fff',
  fontWeight: 'bold',
  padding: '10px',
  textAlign: 'center',
};

function MyHeader() {
  return (
    <header style={myHeaderStyle}>
      <p>Good Morning!</p>
      <p>WELCOME TO MY PAGE</p>
    </header>
  );
}

export default MyHeader;
