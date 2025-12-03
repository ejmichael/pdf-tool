import React from "react";
import { Link } from "react-router-dom";

const ToolCard = ({ title, description, route }) => {
  return (
    <Link to={route} className="block bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default ToolCard;
