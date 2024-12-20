import type React from "react";
import { toast } from "react-toastify";

export const copyToClipboard = async (text: string): Promise<void> => {
	try {
		await navigator.clipboard.writeText(text);
		toast.success("Copied to clipboard");
	} catch (_error) {
		toast.error("Failed to copy to clipboard");
	}
};

export const handleCopy = (
	e: React.MouseEvent,
	text: string | undefined,
): void => {
	e.stopPropagation();
	if (text) {
		copyToClipboard(text).then((r) => r);
	}
};
