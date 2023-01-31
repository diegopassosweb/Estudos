
import React from "react";

const ChangeDate = ({state, setter}) => {

  const previousDate = () => {
    state.setDate(state.getDate() - 1);
    setter(new Date(state));
  }
  
  const nextDate = () => {
    state.setDate(state.getDate() + 1);
    setter(new Date(state));
  }
  
  const resetDate = () => {
    setter(new Date());
  }

  return (
    <div className="buttons">
      <button className="prev" onClick={previousDate}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button className="reset" onClick={resetDate}>
        TODAY
      </button>
      <button className="next" onClick={nextDate}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="32px"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  )
};

export default ChangeDate;
