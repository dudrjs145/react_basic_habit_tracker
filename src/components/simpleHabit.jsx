import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
    return () => {
      console.log('unmounted');
    };
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <FaPlusSquare />
      </button>
    </li>
  );
};

export default SimpleHabit;
