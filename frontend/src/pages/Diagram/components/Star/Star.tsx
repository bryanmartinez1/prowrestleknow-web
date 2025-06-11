import React from "react";

type StarType = {
  width?: number;
  height?: number;
  strokeWidth?: number;
  defaultBackgroundColor?: string;
  fillColor?: string;
  fillPercentage?: number;
  strokeColor?: string;
};

function Star({
  width = 100,
  height = 100,
  strokeWidth = 3,
  strokeColor = "black",
  defaultBackgroundColor = "black",
  fillPercentage = 50,
  fillColor = "gold",
}: StarType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      cursor="pointer"
      stroke-linecap="round"
      stroke-linejoin="round"
      strokeWidth={strokeWidth}
      width={width}
      height={height}
      stroke={strokeColor}
    >
      <defs>
        <linearGradient id="half-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={fillColor} />
          <stop offset={`${fillPercentage}%`} stopColor={fillColor} />
          <stop
            offset={`${fillPercentage}%`}
            stopColor={defaultBackgroundColor}
          />
          <stop offset="100%" stopColor={defaultBackgroundColor} />
        </linearGradient>
      </defs>
      <path
        d="M18 2.25l4.66 11.8h12.4l-9.95 7.22 3.82 11.48L18 25.92l-10.93 6.83 3.82-11.48L.94 14.05h12.4L18 2.25z"
        fill="url(#half-gradient)"
      />
    </svg>
  );
}

export default Star;
