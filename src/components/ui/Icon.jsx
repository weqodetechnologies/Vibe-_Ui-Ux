// src/components/ui/Icons.jsx

import React from "react";

export function LinkedInIcon({ size = 28, color = "white" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="none" stroke={color} strokeWidth="1.6" />
      <path
        d="M8 10H6V18H8V10ZM7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8Z"
        fill={color}
      />
      <path
        d="M13 10H11V18H13V14C13 12.8954 13.8954 12 15 12C16.1046 12 17 12.8954 17 14V18H19V13.5C19 11.0147 16.9853 9 14.5 9C13.6716 9 12.9216 9.33579 12.4 9.87868C12.14 10.1448 13 10 13 10Z"
        fill={color}
      />
    </svg>
  );
}

export function InstagramIcon({ size = 28, color = "white" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" stroke={color} strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.2" fill={color} />
    </svg>
  );
}

export function TwitterIcon({ size = 28, color = "white" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" stroke={color} strokeWidth="1.6" />
      <path
        d="M18 8.5C17.5 8.8 16.9 9 16.3 9.1C16.9 8.7 17.3 8.1 17.5 7.4C16.9 7.8 16.2 8.1 15.5 8.2C14.9 7.5 13.9 7.3 13.1 7.7C12.3 8.1 11.8 9 12 9.9C10.6 9.8 9.3 9.1 8.4 8C7.8 9.1 8.1 10.4 9.1 11C8.7 11 8.3 10.9 8 10.7C8 11.8 8.8 12.8 9.9 13C9.5 13.1 9.1 13.2 8.8 13.1C9.1 14.1 10 14.8 11 14.8C10.2 15.4 9.2 15.8 8.2 15.8C8 15.7 8.7 16 9.3 16C13 16 15.1 13 15.1 10.2V9.9C15.7 9.6 16.3 9.1 16.8 8.5H18Z"
        fill={color}
      />
    </svg>
  );
}
