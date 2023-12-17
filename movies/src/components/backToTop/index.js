import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { IconButton } from '@mui/material';

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <IconButton
    aria-label="Scroll to Top"
    style={{
      position: 'fixed',
      bottom: '70px', 
      right: '16px', 
      padding: '8px', 
      backgroundColor: 'red', 
      color: 'white', 
      
    }}
    onClick={handleClick}
    
  >
      <ArrowCircleUpIcon/>
    </IconButton>
  );
}

export default ScrollToTopButton;