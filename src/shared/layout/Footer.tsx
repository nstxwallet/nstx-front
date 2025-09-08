
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

import { Switch } from "@/shared";
import { NstxLogo } from '@/public'

export const Footer = () => {
  return (
    <footer className="text-gray-200 p-4 bg-zinc-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <NstxLogo className="w-10 h-10" />
        </Link>
        <Switch />
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4 md:mb-0">
          <a href="https://t.me/speltaria" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
            <FaMediumM size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
