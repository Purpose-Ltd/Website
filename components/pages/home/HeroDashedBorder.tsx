"use client";

import { motion } from "framer-motion";
import React from "react";

export default function HeroDashedBorder() {
  return (
    <>
      {/* ================= DESKTOP ================= */}
      <svg
        className="w-full hidden lg:block"
        viewBox="0 0 1327 257"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="borderGradient" cx="17.79%" cy="0%" r="136.3%">
            <stop offset="0%" stopColor="#5323E5" />
            <stop offset="38.13%" stopColor="#5472FF" />
            <stop offset="81.27%" stopColor="#6DC9D8" />
            <stop offset="92.1%" stopColor="#72E0DA" />
            <stop offset="100%" stopColor="#6DECD3" />
          </radialGradient>

          {/* Animated mask */}
          <mask id="ellipseMask">
            <motion.ellipse
              cx="663.5"
              cy="128.5"
              rx="662.5"
              ry="127.5"
              fill="none"
              stroke="white"
              strokeWidth="3"
              pathLength={1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
              }}
            />
          </mask>
        </defs>

        <ellipse
          cx="663.5"
          cy="128.5"
          rx="662.5"
          ry="127.5"
          fill="none"
          stroke="url(#borderGradient)"
          strokeWidth="3"
          strokeDasharray="8 8"
          mask="url(#ellipseMask)"
        />
      </svg>

      {/* ================= MOBILE ================= */}

      <svg
        className="w-full lg:hidden"
        viewBox="0 0 400 120"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient
            id="borderGradientMobile"
            cx="17.79%"
            cy="0%"
            r="136.3%"
          >
            <stop offset="0%" stopColor="#5323E5" />
            <stop offset="38.13%" stopColor="#5472FF" />
            <stop offset="81.27%" stopColor="#6DC9D8" />
            <stop offset="92.1%" stopColor="#72E0DA" />
            <stop offset="100%" stopColor="#6DECD3" />
          </radialGradient>

          <mask id="ellipseMaskMobile">
            <motion.ellipse
              cx="200"
              cy="60"
              rx="195"
              ry="55"
              fill="none"
              stroke="white"
              strokeWidth="2"
              pathLength={1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </mask>
        </defs>

        <ellipse
          cx="200"
          cy="60"
          rx="195"
          ry="55"
          fill="none"
          stroke="url(#borderGradientMobile)"
          strokeWidth="2"
          strokeDasharray="6 6"
          mask="url(#ellipseMaskMobile)"
        />
      </svg>
    </>
  );
}
