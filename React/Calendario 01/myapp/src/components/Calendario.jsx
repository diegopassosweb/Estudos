import React, { useState } from "react";
import "./Calendario.css";
import ChangeDate from "./ChangeDate";

const Calendario = () => {
  const [today, setToday] = useState(new Date());

  const year = today.getFullYear();
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.toLocaleString("default", { weekday: "long" });
  const date = today.getDate();

  return (
    <>
    <div className="container">
      <div className="main">
        <p className="month">{month}</p>
        <p className="day">{day}</p>
        <p className="date">{date}</p>
        <p className="year">{year}</p>
      </div>
    </div>
    <ChangeDate state={today} setter={setToday} />
    </>
    
	);
};

export default Calendario;