// src/components/ui/Icons.jsx
import React from "react";

// SOCIAL ICONS
import LinkedSvg from "../../assets/Linked.svg";
import InstagramSvg from "../../assets/Instagram.svg";
import XSvg from "../../assets/X.svg";

// CONTACT ICONS
import PhoneSvg from "../../assets/phone.svg";
import MailSvg from "../../assets/mail.svg";
import LocationSvg from "../../assets/location.svg";

function Icon({ src, size = 56, alt = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
      }}
    />
  );
}

/* ================================
      SOCIAL ICONS
================================ */

export function LinkedInIcon({ size = 56 }) {
  return <Icon src={LinkedSvg} size={size} alt="LinkedIn" />;
}

export function InstagramIcon({ size = 56 }) {
  return <Icon src={InstagramSvg} size={size} alt="Instagram" />;
}

export function TwitterIcon({ size = 56 }) {
  return <Icon src={XSvg} size={size} alt="Twitter X" />;
}

/* ================================
      CONTACT ICONS
================================ */

export function PhoneIcon({ size = 26 }) {
  return <Icon src={PhoneSvg} size={size} alt="Phone" />;
}

export function MailIcon({ size = 26 }) {
  return <Icon src={MailSvg} size={size} alt="Mail" />;
}

export function LocationIcon({ size = 26 }) {
  return <Icon src={LocationSvg} size={size} alt="Location" />;
}
