import { NstxLogo } from "@/shared";
import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedin,
	FaMediumM,
	FaTelegramPlane,
	FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className="text-gray-200 p-4 bg-zinc-900">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="mb-4 md:mb-0 text-center md:text-left">
					<NstxLogo />
				</div>

				<div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4 md:mb-0">
					<a
						href="https://t.me/Blueremelka"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-zinc-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaTelegramPlane size={20} />
						<span className="text-sm">TG Chat</span>
					</a>
					<a
						href="https://t.me/Blueremelka"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-zinc-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaTelegramPlane size={20} />
						<span className="text-sm">TG Group</span>
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-zinc-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaTwitter size={20} />
						<span className="text-sm">Twitter</span>
					</a>
				</div>
				<div className="flex gap-4 justify-center md:justify-start">
					<a
						href="https://medium.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-zinc-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaMediumM size={20} />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-zinc-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaInstagram size={20} />
					</a>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-zinc-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaFacebookF size={20} />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-zinc-800   p-2 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaLinkedin size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
};
