import React from "react";
import "./Rank.css";
export const Rank = ({ Rank, Name, Point, Team }) => {
  return (
    <div className="block">
      <div className="information">
        <p className="rank">{Rank}</p>
        <p className="name">{Name}</p>
        <p className="point">{Point}</p>
        <p className="team">{Team}</p>
      </div>
    </div>
  );
};
