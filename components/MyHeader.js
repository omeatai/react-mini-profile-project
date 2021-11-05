import React from 'react';

const headerTag = {
  color: '#fff',
  backgroundColor: '#000',
  fontSize: '20px',
  padding: '30px',
  textAlign: 'center',
  fontWeight: 'bold',
};

function MyHeader() {
  return (
    <header style={headerTag} className="navbar">
      <p>Good Morning!</p>
      <p>WELCOME TO MY PAGE</p>
    </header>
  );
}

export default MyHeader;
