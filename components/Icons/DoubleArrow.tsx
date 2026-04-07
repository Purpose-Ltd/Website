import React from "react";

export default function DoubleArrow({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.488155 0.488156C1.13903 -0.162718 2.1943 -0.162718 2.84518 0.488155L12.8452 10.4882C13.1577 10.8007 13.3333 11.2246 13.3333 11.6667C13.3333 12.1087 13.1577 12.5326 12.8452 12.8452L2.84518 22.8452C2.19431 23.4961 1.13903 23.4961 0.488156 22.8452C-0.162717 22.1943 -0.162718 21.139 0.488156 20.4882L9.30964 11.6667L0.488156 2.84518C-0.162718 2.1943 -0.162718 1.13903 0.488155 0.488156ZM13.8215 0.488155C14.4724 -0.162718 15.5276 -0.162718 16.1785 0.488155L26.1785 10.4882C26.8294 11.139 26.8294 12.1943 26.1785 12.8452L16.1785 22.8452C15.5276 23.4961 14.4724 23.4961 13.8215 22.8452C13.1706 22.1943 13.1706 21.139 13.8215 20.4882L22.643 11.6667L13.8215 2.84518C13.1706 2.1943 13.1706 1.13903 13.8215 0.488155Z"
        fill="url(#paint0_radial_2144_41)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2144_41"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(24.698 23.3333 -27.3941 31.3452 4.74273 -2.23239e-07)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5323E5" />
          <stop offset="0.381279" stopColor="#5472FF" />
          <stop offset="0.812697" stopColor="#6DC9D8" />
          <stop offset="0.921022" stopColor="#72E0DA" />
          <stop offset="1" stopColor="#6DECD3" />
        </radialGradient>
      </defs>
    </svg>
  );
}
