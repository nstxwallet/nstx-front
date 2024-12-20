"use client";
import React, { useCallback, useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface ExpandableItem {
	question: string;
	answer: string;
}

interface ExpandableCardProps {
	items: ExpandableItem[];
	bgColor?: string;
	textColor?: string;
}

export const Accordition = ({
	items,
	bgColor = "bg-zinc-800",
	textColor = "text-gray-300",
}: ExpandableCardProps) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const setRef = useCallback(
		(index: number) => (el: HTMLDivElement | null) => {
			contentRefs.current[index] = el;
		},
		[],
	);

	return (
		<div>
			{items.map((item, index) => {
				const isOpen = openIndex === index;
				return (
					<div
						key={item.question}
						className={`${bgColor} p-4 hover:bg-teal-600 rounded-lg shadow-md mb-4 transition-colors duration-300 ease-in-out`}
					>
						<div
							className="flex justify-between items-center cursor-pointer"
							onClick={() => toggleFAQ(index)}
						>
							<h3 className={`text-lg ${textColor} font-semibold`}>
								{item.question}
							</h3>
							{isOpen ? (
								<FaMinus className="text-white" />
							) : (
								<FaPlus className="text-white" />
							)}
						</div>
						<div
							ref={setRef(index)}
							style={{
								maxHeight: isOpen
									? `${contentRefs.current[index]?.scrollHeight}px`
									: "0px",
							}}
							className={`mt-4 ${textColor} overflow-hidden transition-all duration-500 ease-in-out`}
						>
							<p>{item.answer}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};
