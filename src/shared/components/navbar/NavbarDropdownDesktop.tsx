"use client";

import { Option } from "@/shared";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { MdVerifiedUser } from "react-icons/md";

interface DropdownProps {
	options: OptionProps[];
	buttonIcon: React.ReactNode;
	buttonLabel?: string;
	isProfileDropdown?: boolean;
}

interface OptionProps {
	icon: React.ReactNode;
	label: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DropdownDesktop = ({
	options,
	buttonIcon,
	buttonLabel,
	isProfileDropdown = false,
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => setIsOpen((prev) => !prev);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={dropdownRef} className="relative">
			<button
				onClick={toggleDropdown}
				className={`flex items-center justify-center p-2 bg-zinc-100 rounded-full hover:bg-gray-200 transition ${
					!buttonLabel ? "w-10 h-6" : ""
				}`}
			>
				{buttonIcon}
				{buttonLabel && <span className="ml-2">{buttonLabel}</span>}
			</button>
			{isOpen && (
				<div className="absolute mt-2 right-0 w-56 bg-white rounded-lg shadow-lg z-50">
					{isProfileDropdown && (
						<div className="p-2 text-green-600 font-semibold text-center">
							<MdVerifiedUser className="inline mr-1" /> Verified
						</div>
					)}
					<div className="space-y-2">
						{options.map((option) => (
							<Option key={option.label} {...option} onClick={toggleDropdown} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};
