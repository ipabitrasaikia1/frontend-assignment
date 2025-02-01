import React from "react";
import "../InfoCard.css"; // Add styles separately

const InfoCard = ({ title, details }) => {
    return (
        <div className="info-card">
            <h3 className="info-card-title">{title}</h3>
            <ul className="info-card-list">
                {Object.entries(details).map(([key, value]) => (
                    <li key={key} className="info-card-item">
                        <i>{key}:</i>  <strong> {value}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfoCard;
