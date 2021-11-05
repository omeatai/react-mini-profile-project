import React from 'react';

const styles = {
  color: '#fff',
  backgroundColor: '#000',
  fontSize: '20px',
  padding: '50px',
  textAlign: 'center',
  fontWeight: 'bold',
};

function MyHeader() {
  return (
    <header style={styles} className="navbar">
      WELCOME!
    </header>
  );
}

export default MyHeader;
