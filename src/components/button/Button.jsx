import React from "react";

const Button = ({
  onClick,
  className,
  full = false,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "bg-primary";

  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg ${bgClassName} ${
        full ? "w-full" : ""
      } capitalize  mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
