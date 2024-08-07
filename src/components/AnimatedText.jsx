import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AnimatedText = ({text, speed}) => {

    const [displayText, setDisplayText ] = useState('');
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText((prev)=>prev + text[index]);
        index += 1;

        if(index === text.length){
            clearInterval(interval)
        }
      }, speed);
    
      return () => {
        clearInterval(interval)
      }
    }, [text, speed])
    
  return (
    <p className='whitespace-pre-wrap'>{displayText}</p>
  )
}


AnimatedText.propTypes = {
    text : PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
}

export default AnimatedText