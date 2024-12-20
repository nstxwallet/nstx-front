"use client";

import type React from "react";
import { useState } from "react";
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
	onClick: () => void;
}

export const DropdownMobile = ({
	options,
	buttonIcon,
	buttonLabel,
	isProfileDropdown = false,
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => setIsOpen((prev) => !prev);

	return (
		<>
			<button
				onClick={toggleDropdown}
				className="flex items-center bg-zinc-800 p-2 rounded-full hover:bg-gray-200 transition"
			>
				{buttonIcon}
				{buttonLabel && <span className="ml-2">{buttonLabel}</span>}
			</button>
			{isOpen && (
				<div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center z-50 p-4">
					<button
						className="self-end text-gray-600 text-xl"
						onClick={toggleDropdown}
					>
						✖
					</button>
					<div className="w-full max-w-md">
						{isProfileDropdown && (
							<div className="text-center p-2 bg-green-100 text-green-600 font-semibold">
								<MdVerifiedUser className="inline mr-1" /> Verified
							</div>
						)}
						<div className="space-y-2">
							{options.map((option) => (
								<Option key={option.label} {...option} />
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export const Option = ({ icon, label, onClick }: OptionProps) => (
	<button
		onClick={onClick}
		className="flex items-center w-full p-3 hover:bg-gray-100 transition"
	>
		<span className="flex items-center justify-center text-gray-600 text-lg w-6 h-6">
			{icon}
		</span>
		<span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
	</button>
);
