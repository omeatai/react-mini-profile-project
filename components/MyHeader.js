import React from 'react';

const header = {
  color: '#fff',
  backgroundColor: '#000',
  fontSize: '20px',
  padding: '50px',
  textAlign: 'center',
  fontWeight: 'bold',
};

function MyHeader() {
  return (
    <header style={header} className="navbar">
      WELCOME!
    </header>
  );
}

export default MyHeader;
